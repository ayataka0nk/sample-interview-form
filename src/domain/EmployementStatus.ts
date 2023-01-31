export type EmploymentStatus = {
  id: number
  name: string
}

export const employementStatusMaster: EmploymentStatus[] = [
  {
    id: 1,
    name: '就業経験なし',
  },
  {
    id: 2,
    name: '在職中',
  },
  {
    id: 3,
    name: '離職中',
  },
]
