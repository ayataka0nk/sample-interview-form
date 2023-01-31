import { Box } from '@chakra-ui/layout'

export type SpeechBubbleProps = {
  text: string
}

export const SpeechBubble = ({ text }: SpeechBubbleProps) => {
  return (
    <Box
      backgroundColor='white'
      width='fit-content'
      padding='10px 20px'
      borderRadius='0px 10px 10px 10px'
    >
      {text}
    </Box>
  )
}
