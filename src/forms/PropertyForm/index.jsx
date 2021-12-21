import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import H from '../../components/H'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import FormRow from '../../components/FormRow'
import Button from '../../components/Button'
import Input from '../../components/Input'

// Forms
import ObjectFields from './components/ObjectFields'
import SellersFields from './components/SellersFields'

import {
  ERROR_MESSAGE_INVALID_EMAIL,
  REQUIRED_MESSAGE,
} from '../../constants/errors'

export const initialSellerData = {
  surname: undefined,
  name: undefined,
  patronymic: undefined,
  phone: undefined,
  email: undefined,
}

const initialObjectData = {
  sellerType: undefined,
  purchaseAgreement: undefined,
  gettingOfCreditFunds: undefined,
  creditingOfCreditFunds: undefined,
}

const schema = yup.object({
  object: yup.object().shape({
    sellerType: yup.string().required(REQUIRED_MESSAGE),
    purchaseAgreement: yup.string().required(REQUIRED_MESSAGE),
    gettingOfCreditFunds: yup.string().required(REQUIRED_MESSAGE),
  }),
  sellers: yup.array().of(
    yup.object().shape({
      surname: yup.string().required(REQUIRED_MESSAGE),
      name: yup.string().required(REQUIRED_MESSAGE),
      email: yup.string().email(ERROR_MESSAGE_INVALID_EMAIL),
    })
  ),
  inn: yup.string().required(REQUIRED_MESSAGE),
})

function PropertyForm() {
  const { control, handleSubmit, trigger, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // Объект
      object: initialObjectData,
      // Продавцы
      sellers: [initialSellerData],
      // Прочая информация
      inn: undefined,
      snils: undefined,
    },
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    console.log('main submit -> ', data)
  }

  const submitObjectData = async (e) => {
    e.preventDefault()
    const isValid = await trigger('object')
    if (isValid) {
      const objectData = getValues('object')
      console.log('object submit ->', objectData)
    }
  }

  const submitSellerData = (index) => async () => {
    const isValid = await trigger(`sellers.${index}`, {
      shouldFocus: true,
    })
    if (isValid) {
      const data = getValues(`sellers.${index}`)
      console.log('save seller data ->', data)
    }
  }

  return (
    <div>
      <H size={1}>Объект</H>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ObjectFields control={control} submitObjectData={submitObjectData} />
        <SellersFields control={control} submitSellerData={submitSellerData} />
        <FormRow>
          <H size={2}>Прочая информация</H>

          <Row>
            <Col>
              <Controller
                control={control}
                name="inn"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    onBlur={field.onBlur}
                    label="ИНН *"
                    error={fieldState.error?.message}
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="snils"
                render={({ field }) => (
                  <Input {...field} label="СНИЛС" mask="999-999-999 99" />
                )}
              />
            </Col>
          </Row>
        </FormRow>

        <Row>
          <Col />
          <Col>
            <Button variant="primary" type="submit">
              Далее
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default PropertyForm
