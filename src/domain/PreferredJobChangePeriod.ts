export type PreferredJobChangePeriod = {
  id: number
  name: string
}

export const preferredJobChangePeriodMaster: PreferredJobChangePeriod[] = [
  {
    id: 1,
    name: 'できるだけ早く',
  },
  {
    id: 2,
    name: '1～2か月先',
  },
  {
    id: 3,
    name: '3か月以上先',
  },
]
