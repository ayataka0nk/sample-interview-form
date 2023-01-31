import { Box, Flex } from '@chakra-ui/layout'
import { Fade } from '@chakra-ui/transition'

type AnswerBoxProps = {
  display: boolean
  children: React.ReactNode
}

export const AnswerBox = ({ display, children }: AnswerBoxProps) => {
  return (
    <Flex justifyContent='end'>
      <Fade
        in={display}
        transition={{
          enter: {
            duration: 0.3,
          },
        }}
      >
        <Box background='white' padding='10px 20px' borderRadius='10px'>
          {children}
        </Box>
      </Fade>
    </Flex>
  )
}
