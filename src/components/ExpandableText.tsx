import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  if (!children) return null

  const [expanded, setExpanded] = useState(false)

  const limit = 300

  if (children.length <= limit) return <Text>{children}</Text>

  const summary = expanded ? children : children.substring(0, limit) + '...'

  return (
    <div>{summary} <Button marginLeft={1} size={"xs"} colorScheme='yellow' onClick={() => setExpanded(!expanded)}>Show {expanded ? 'Less' : 'More'}</Button></div>
  )
}

export default ExpandableText