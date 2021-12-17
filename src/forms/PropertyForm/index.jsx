import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import H from '../../components/H'
import SelectBox from '../../components/SelectBox'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import FormRow from '../../components/FormRow'
import Button from '../../components/Button'
import Input from '../../components/Input'
import LinkButton from '../../components/LinkButton'
import IconDelete from '../../components/IconDelete'

import { REQUIRED_MESSAGE } from '../../constants/errors'

import styles from './style.module.scss'

const sellerTypes = [
  {
    id: 1,
    name: 'Продавец 1',
  },
  {
    id: 2,
    name: 'Продавец 2',
  },
]

const purchaseOfAgreement = [
  {
    id: 1,
    name: 'Договор 1',
  },
  {
    id: 2,
    name: 'Договор 2',
  },
]

const creditFunds = [
  {
    id: 1,
    name: 'тип 1',
  },
  {
    id: 2,
    name: 'тип 2',
  },
]

const initialSellerData = {
  surname: undefined,
  name: undefined,
  patronymic: undefined,
  phone: undefined,
  email: undefined,
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
    })
  ),
  inn: yup.string().required(REQUIRED_MESSAGE),
})

function PropertyForm() {
  const { control, handleSubmit, trigger, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      // Объект
      object: {
        sellerType: undefined,
        purchaseAgreement: undefined,
        gettingOfCreditFunds: undefined,
        creditingOfCreditFunds: undefined,
      },
      // Продавцы
      sellers: [initialSellerData],

      // Прочая информация
      inn: undefined,
      snils: undefined,
    },
  })

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'sellers',
  })

  const onSubmit = (data) => {
    console.log('main submit -> ', data)
  }

  const submitObjectData = async (e) => {
    e.preventDefault()
    const isValid = await trigger('object')
    if (isValid) {
      const objectData = getValues('object')
      alert(objectData)
    }
  }

  const submitSellerData = (index) => async () => {
    const isValid = await trigger(`sellers.${index}`)
    if (isValid) {
      const data = getValues(`sellers.${index}`)
      console.log('save seller data ->', data)
    }
  }

  return (
    <div>
      <H size={1}>Объект</H>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Row>
            <Col>
              <Controller
                control={control}
                name="object.sellerType"
                render={({ field, fieldState }) => (
                  <SelectBox
                    {...field}
                    label="Тип продавца *"
                    options={sellerTypes}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="object.purchaseAgreement"
                render={({ field, fieldState }) => (
                  <SelectBox
                    {...field}
                    label="Договор приобретения *"
                    options={purchaseOfAgreement}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </Col>
          </Row>
        </FormRow>
        <FormRow>
          <Row>
            <Col>
              <Controller
                control={control}
                name="object.gettingOfCreditFunds"
                render={({ field, fieldState }) => (
                  <SelectBox
                    {...field}
                    label="Получение кредитных средств *"
                    options={creditFunds}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="object.creditingOfCreditFunds"
                render={({ field }) => (
                  <SelectBox
                    {...field}
                    label="Зачисление кредитных средств"
                    options={creditFunds}
                  />
                )}
              />
            </Col>
          </Row>
        </FormRow>
        <FormRow>
          <Row>
            <Col />
            <Col>
              <Button variant="default" onClick={submitObjectData}>
                Сохранить
              </Button>
            </Col>
          </Row>
        </FormRow>

        <H size={2}>Продавцы</H>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <div
                style={{
                  padding: '30px 0',
                }}
              >
                <FormRow>
                  <Row>
                    <Col>
                      <Controller
                        control={control}
                        name={`sellers.${index}.surname`}
                        render={({ field, fieldState }) => (
                          <Input
                            {...field}
                            label="Фамилия *"
                            error={fieldState.error?.message}
                          />
                        )}
                      />
                    </Col>

                    <Col>
                      <div className={styles.PropertyForm__IconWrapper}>
                        <Controller
                          control={control}
                          name={`sellers.${index}.name`}
                          render={({ field, fieldState }) => (
                            <Input
                              {...field}
                              label="Имя *"
                              error={fieldState.error?.message}
                            />
                          )}
                        />

                        {fields.length > 1 && (
                          <IconDelete
                            className={styles.PropertyForm__IconDelete}
                            onClick={() => {
                              remove(index)
                            }}
                          />
                        )}
                      </div>
                    </Col>
                  </Row>
                </FormRow>

                <FormRow>
                  <Row>
                    <Col>
                      <Controller
                        control={control}
                        name={`sellers.${index}.patronymic`}
                        render={({ field }) => (
                          <Input {...field} label="Отчество" />
                        )}
                      />
                    </Col>

                    <Col>
                      <Controller
                        control={control}
                        name={`sellers.${index}.phone`}
                        render={({ field }) => (
                          <Input {...field} label="Телефон" />
                        )}
                      />
                    </Col>
                  </Row>
                </FormRow>

                <Row>
                  <Col>
                    <Controller
                      control={control}
                      name={`sellers.${index}.email`}
                      render={({ field }) => <Input {...field} label="Email" />}
                    />
                  </Col>
                  <Col>
                    <Button type="button" onClick={submitSellerData(index)}>
                      Сохранить
                    </Button>
                  </Col>
                </Row>
              </div>
              <hr />
            </div>
          )
        })}

        <FormRow>
          <LinkButton type="button" onClick={() => append(initialSellerData)}>
            Добавить продавца
          </LinkButton>
        </FormRow>

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
                render={({ field }) => <Input {...field} label="СНИЛС" />}
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
