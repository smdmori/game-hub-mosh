import { Box, Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
  title: string
  children: ReactNode | ReactNode[]
}
const DefinitionItem = ({ title, children }: Props) => {
  return (<Box mb={10}>
    <Heading as={'dt'} size={"sm"} color={'gray.600'}>{title}</Heading>
    <dd>{children}</dd>
  </Box>
  )
}

export default DefinitionItem