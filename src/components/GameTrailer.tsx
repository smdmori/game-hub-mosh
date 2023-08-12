import { Box } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameID: number
}

const GameTrailer = ({ gameID }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameID)
  const trailer = trailers?.results[0]
  if (isLoading || !trailer) return null

  if (error) throw error

  return (
    <Box margin={'0 auto'} width='480px'>
      <video
        src={trailer.data[480]}
        poster={trailer.preview}
        controls
      />
    </Box>
  )
}

export default GameTrailer