import { Image, SimpleGrid, Spinner } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
  gameID: number
}

const GameScreenshots = ({ gameID }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameID)

  if (!screenshots) return null
  if (isLoading) return null
  if (error) throw error

  return (<SimpleGrid
    columns={{
      sm: 1,
      md: 2,
    }}
    gap='2'
    marginTop={5}>
    {
      screenshots.results.map(screenshot =>
        <Image
          key={screenshot.id}
          src={screenshot.image}
        />)
    }
  </SimpleGrid >
  )
}

export default GameScreenshots