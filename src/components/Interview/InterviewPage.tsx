import { useState } from 'react'
import { employementStatusMaster } from '../../domain/EmployementStatus'
import { RadioButton } from '../common/RadioButton/RadioButton'
import { Box } from '@chakra-ui/react'
import { AnswerBox } from './AnswerBox'
import { QuestionBox } from './QuestionBox'
import { preferredJobChangePeriodMaster } from '../../domain/PreferredJobChangePeriod'

export const InterviewPage = () => {
  const [esQuestionDisplayed, setEsQuestionDisplayed] = useState(false)
  const [es, setEs] = useState<number | undefined>()
  const [periodDisplayed, setPeriodDisplayed] = useState(false)
  const [period, setPeriod] = useState<number | undefined>()

  const handleEmployementStatusChange = (value: number) => {
    setEs(value)
  }
  const handleEsQuestionDisplayed = () => {
    setEsQuestionDisplayed(true)
  }
  const handlePreferredJobChangePeriod = (value: number) => {
    setPeriod(value)
  }
  const handlePeriodDisplayed = () => {
    setPeriodDisplayed(true)
  }
  return (
    <Box padding='10px' maxHeight='100%' height='100%' maxWidth='500px'>
      <QuestionBox
        text='就業状況は？'
        isDisplay={true}
        onDisplayed={handleEsQuestionDisplayed}
      />
      <AnswerBox display={esQuestionDisplayed}>
        <RadioButton
          value={es}
          onChange={handleEmployementStatusChange}
          options={employementStatusMaster.map(e => ({
            value: e.id,
            label: e.name,
          }))}
        />
      </AnswerBox>

      <QuestionBox
        text='希望の転職時期は？'
        isDisplay={typeof es !== 'undefined'}
        onDisplayed={handlePeriodDisplayed}
      />
      <AnswerBox display={periodDisplayed}>
        <RadioButton
          value={period}
          onChange={handlePreferredJobChangePeriod}
          options={preferredJobChangePeriodMaster.map(e => ({
            value: e.id,
            label: e.name,
          }))}
        />
      </AnswerBox>
    </Box>
  )
}
