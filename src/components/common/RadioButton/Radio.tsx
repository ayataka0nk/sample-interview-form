export type RadioProps = {
  value: number
  onClick: (value: number) => void
  selectedValue?: number
  label: string
}
export const Radio = ({ value, onClick, selectedValue, label }: RadioProps) => {
  const handleClick: React.ChangeEventHandler<HTMLInputElement> = e => {
    onClick(Number(e.target.value))
  }
  return (
    <div>
      <label>
        <input
          type='radio'
          value={value}
          checked={value === selectedValue}
          onChange={handleClick}
        />
        {label}
      </label>
    </div>
  )
}
