import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import H from '../../components/H'
import FormRow from '../../components/FormRow'
import InputSuggest from '../../components/InputSuggest'
import Checkbox from '../../components/Checkbox'
import SelectBox from '../../components/SelectBox'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import Button from '../../components/Button'
import { REQUIRED_MESSAGE } from '../../constants/errors'

const getFakeOptions = () =>
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

const FAKE_REASONS_FOR_LIVING = [
  {
    id: 1,
    name: 'Аренда',
  },
  {
    id: 2,
    name: 'Проживание у родственников',
  },
]

// const ADDRESS_NOT_FROM_DADATA_ERROR = 'Адрес должен быть из подсказки'
// const validateAddressByDadata = object().test(
//   'Проверка адреса по наличию дадаты',
//   ADDRESS_NOT_FROM_DADATA_ERROR,
//   ({ value, dadata }) => {
//     if (value) {
//       return isExistDadata(dadata)
//     }
//     return true
//   }
// )

const schema = Yup.object({
  reasonOfLiving: Yup.string().when(['realAddress', 'areTheSameAddresses'], {
    is: ({ value }) => !!value,
    then: Yup.string().required(REQUIRED_MESSAGE),
    otherwise: Yup.string(),
  }),
  // addressRegistration: validateAddressByDadata,
  // realAddress: validateAddressByDadata,
})

function ChangeClientDataForm() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      addressRegistration: {
        value: undefined,
        dadata: undefined,
      },
      areTheSameAddresses: true,
    },
    resolver: yupResolver(schema),
  })

  const areTheSameAddresses = watch('areTheSameAddresses')
  console.log('areTheSameAddresses -> ', areTheSameAddresses)

  const onSubmit = (data) => {
    console.log('success submitted -> ', data)
  }

  const handleAddressChange = (field) => (value, _, dadata) => {
    field.onChange({
      value,
      dadata,
    })
  }

  return (
    <div>
      <H size={1}>Изменение данных клиента</H>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Controller
            name="addressRegistration"
            control={control}
            render={({ field, fieldState }) => (
              <InputSuggest
                {...field}
                getOptionsMethod={getFakeOptions}
                onChange={handleAddressChange(field)}
                value={field.value.value}
                error={fieldState.error?.message}
                label="Адрес регистрации"
              />
            )}
          />
        </FormRow>

        <FormRow>
          <Controller
            name="areTheSameAddresses"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value}>
                Адрес фактического проживания совпадает с адресом регистрации
              </Checkbox>
            )}
          />
        </FormRow>

        {!areTheSameAddresses && (
          <>
            <FormRow>
              <Controller
                shouldUnregister
                name="realAddress"
                control={control}
                render={({ field, fieldState }) => (
                  <InputSuggest
                    {...field}
                    getOptionsMethod={getFakeOptions}
                    onChange={handleAddressChange(field)}
                    value={field.value?.value}
                    error={fieldState.error?.message}
                    label="Адрес фактического проживания"
                  />
                )}
              />
            </FormRow>

            <FormRow>
              <Controller
                shouldUnregister
                name="reasonOfLiving"
                control={control}
                render={({ field, fieldState }) => (
                  <SelectBox
                    {...field}
                    options={FAKE_REASONS_FOR_LIVING}
                    error={fieldState.error?.message}
                    label="Основание для проживания"
                  />
                )}
              />
            </FormRow>
          </>
        )}

        <Row>
          <Col />
          <Col>
            <Button variant="primary">Сохранить</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ChangeClientDataForm
