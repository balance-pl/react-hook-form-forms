import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import H from '../../components/H'
import FormRow from '../../components/FormRow'
import InputSuggest from '../../components/InputSuggest'
import Checkbox from '../../components/Checkbox'
import SelectBox from '../../components/SelectBox'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import Button from '../../components/Button'
import { REQUIRED_MESSAGE } from '../../constants/errors'

const schema = yup.object({
  reasonOfLiving: yup.string().when('realAddress', {
    is: (val) => !!val,
    then: yup.string().required(REQUIRED_MESSAGE),
  }),

  // TODO - думаю над реализацией валидации по наличию дадаты...
  // addressRegistration: yup.string().when('addressRegistration', {
  //   is: (val) => {
  //     console.log('validation check ->', val)
  //     return true
  //   },
  //   then: yup.string().required(REQUIRED_MESSAGE),
  // }),
})

function ChangeClientDataForm() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      addressRegistration: undefined,
      realAddress: undefined,
      areTheSameAddresses: false,
      reasonOfLiving: undefined,
    },
    resolver: yupResolver(schema),
  })

  const areTheSameAddresses = watch('areTheSameAddresses')

  const onSubmit = (data) => {
    console.log('success submitted -> ', data)
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
