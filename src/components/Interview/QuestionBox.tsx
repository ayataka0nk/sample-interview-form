import { Flex } from '@chakra-ui/layout'
import { Fade, SlideFade } from '@chakra-ui/transition'
import { SpeechBubble } from '../common/SpeechBubble'
import { OperatorIcon } from './OperatorIcon'

type QuestionBoxProps = {
  text: string
  isDisplay: boolean
  onDisplayed?: () => void
}

export const QuestionBox = ({
  isDisplay,
  text,
  onDisplayed,
}: QuestionBoxProps) => {
  return (
    <Flex justifyContent='start'>
      <Flex alignItems='center' gap='10px'>
        <Fade in={isDisplay}>
          <OperatorIcon />
        </Fade>
        <SlideFade
          in={isDisplay}
          offsetX='-10px'
          offsetY='0px'
          onAnimationComplete={() => {
            if (isDisplay && onDisplayed) {
              onDisplayed()
            }
          }}
        >
          <SpeechBubble text={text} />
        </SlideFade>
      </Flex>
    </Flex>
  )
}
