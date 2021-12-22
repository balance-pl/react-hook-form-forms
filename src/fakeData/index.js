export const getFakeOptions = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'г. Москва, ул. Тверская, д.123',
      data: {
        house: 123,
        street: 'Тверская',
        city: 'Москва',
      },
    },
    {
      id: 2,
      name: 'г. Калининград, ул. Какая-то, д.12',
      data: {
        house: 12,
        street: 'Какая-то',
        city: 'Калининград',
      },
    },
  ])

export const FAKE_REASONS_FOR_LIVING = [
  {
    id: 1,
    name: 'Аренда',
  },
  {
    id: 2,
    name: 'Проживание у родственников',
  },
]
