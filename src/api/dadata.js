const getDadataCall =
  (type) =>
  (query, count = 5, part = null) =>
    fetch(
      `https://front-dhr-st1.dhr-st.dc-yc.b-pl.pro/dadata/suggestions/api/4_1/rs/suggest/${type}/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          count,
          parts: part ? [part] : undefined,
          query,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) =>
        response.suggestions.map((item, index) => ({
          id: index,
          name: item.value,
          data: item,
        }))
      )
      .catch((error) => {
        console.log('error', error)
        return []
      })

export const getAddresses = getDadataCall('address')
export const getCompanies = getDadataCall('party')
export const getNames = getDadataCall('fio', 'NAME')
export const getPatronymics = getDadataCall('fio', 'PATRONYMIC')
export const getSurnames = getDadataCall('fio', 'SURNAME')
