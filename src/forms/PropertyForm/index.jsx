import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

import H from '../../components/H'
import SelectBox from '../../components/SelectBox'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import FormRow from '../../components/FormRow'
import Button from '../../components/Button'
import Input from '../../components/Input'
import LinkButton from '../../components/LinkButton'

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

function PropertyForm() {
  const { control } = useForm({
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

  return (
    <div>
      <H size={1}>Объект</H>

      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <FormRow>
          <Row>
            <Col>
              <Controller
                control={control}
                name="object.sellerType"
                render={({ field }) => (
                  <SelectBox
                    {...field}
                    label="Тип продавца *"
                    options={sellerTypes}
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="object.purchaseAgreement"
                render={({ field }) => (
                  <SelectBox
                    {...field}
                    label="Договор приобретения *"
                    options={purchaseOfAgreement}
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
                render={({ field }) => (
                  <SelectBox
                    {...field}
                    label="Получение кредитных средств *"
                    options={creditFunds}
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
              <Button variant="default">Сохранить</Button>
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
                        render={({ field }) => (
                          <Input {...field} label="Фамилия *" />
                        )}
                      />
                    </Col>

                    <Col>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Controller
                          control={control}
                          name={`sellers.${index}.name`}
                          render={({ field }) => (
                            <Input {...field} label="Имя *" />
                          )}
                        />

                        {fields.length > 1 && (
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginLeft: 25,
                              cursor: 'pointer',
                              color: 'red',
                              fontSize: '25px',
                            }}
                            onClick={() => {
                              remove(index)
                            }}
                          >
                            X
                          </div>
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
                    <Button>Сохранить</Button>
                  </Col>
                </Row>
              </div>
              <hr />
            </div>
          )
        })}

        <FormRow>
          <LinkButton onClick={() => append(initialSellerData)}>
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
                render={({ field }) => <Input {...field} label="ИНН *" />}
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
            <Button variant="primary">Далее</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default PropertyForm
