export const getOptionsPosition = (query, count) =>
  fetch(`https://api.hh.ru/suggests/positions/?text=${query}`, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((response) => {
      if (!response.items) {
        throw new Error('Suggestions not found')
      }

      const result = response.items
        .sort((item1, item2) => (item1.text < item2.text ? -1 : 1))
        .reduce((resultAcc, item, index) => {
          if (index < count) {
            return [
              ...resultAcc,
              {
                id: item.id,
                name: item.text,
              },
            ]
          }

          return resultAcc
        }, [])

      return result
    })
    .catch((error) => {
      console.error(error)
      return []
    })
