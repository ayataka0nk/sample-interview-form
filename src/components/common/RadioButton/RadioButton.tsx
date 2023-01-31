import { Radio } from './Radio'

export type RadioOption = {
  value: number
  label: string
}

export type RadioOptions = RadioOption[]

type RadioButtonProps = {
  options: RadioOptions
  value?: number
  onChange: (value: number) => void
}

export const RadioButton = ({ options, value, onChange }: RadioButtonProps) => {
  return (
    <div>
      {options.map(option => (
        <Radio
          key={option.value}
          value={option.value}
          label={option.label}
          selectedValue={value}
          onClick={onChange}
        />
      ))}
    </div>
  )
}
