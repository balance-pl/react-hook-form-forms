import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Components
import H from '../../components/H'
import FormRow from '../../components/FormRow'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import Input from '../../components/Input'
import Button from '../../components/Button'
import InputSuggest from '../../components/InputSuggest'

import { REQUIRED_MESSAGE } from '../../constants/errors'

const getFakeDadata = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'Сверх Разум',
      data: {
        legalAddress: 'г. Калининград, ул. Ленина, д.124',
        ogrn: '1238213818238128318',
        kpp: '12391919239123912391923',
        inn: '19934923942934',
        ceoFio: 'Сверх Разум Разумович',
      },
    },
    {
      id: 2,
      name: 'Джо Роган',
      data: {
        legalAddress: 'г. Санкт-Петербург, ул. Пойменная, д.22',
        ogrn: '23942934923942934',
        kpp: '39429348234828348',
        inn: '93429349239423949234',
        ceoFio: 'Джо Роган Подкастович',
      },
    },
  ])

const schema = yup.object({
  email: yup.string().required(REQUIRED_MESSAGE),
  password: yup.string().required(REQUIRED_MESSAGE),
  nameOfTheLegalEntity: yup.string().required(REQUIRED_MESSAGE),
  phone: yup.string().required(REQUIRED_MESSAGE),
  ogrn: yup.string().required(REQUIRED_MESSAGE),
})

export const isExistDadata = (dadata = undefined) =>
  dadata && Object.keys(dadata).length > 0

function RegistrationForm() {
  const { control, handleSubmit, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: undefined,
      password: undefined,
      nameOfTheLegalEntity: undefined,
      legalAddress: undefined,
      phone: undefined,
      ogrn: undefined,
      kpp: undefined,
      inn: undefined,
      ceoFio: undefined,
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('success send -> ', data)
  }

  const handleLegalEntityChange = (field) => (value, _, dadata) => {
    if (isExistDadata(dadata)) {
      setValue('legalAddress', dadata.legalAddress)
      setValue('ogrn', dadata.ogrn, { shouldValidate: true })
      setValue('kpp', dadata.kpp)
      setValue('inn', dadata.inn)
      setValue('ceoFio', dadata.ceoFio)
    }
    field.onChange(value)
  }

  return (
    <div>
      <H size={2}>Регистрация</H>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Row>
            <Col>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Email *"
                    error={fieldState.error?.message}
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    label="Пароль *"
                    error={fieldState.error?.message}
                  />
                )}
              />
            </Col>
          </Row>
        </FormRow>
        <FormRow>
          <Controller
            control={control}
            name="nameOfTheLegalEntity"
            render={({ field, fieldState }) => (
              <InputSuggest
                {...field}
                getOptionsMethod={getFakeDadata}
                onChange={handleLegalEntityChange(field)}
                label="Название юр. лица *"
                error={fieldState.error?.message}
              />
            )}
          />
        </FormRow>
        <FormRow>
          <Controller
            control={control}
            name="legalAddress"
            render={({ field, fieldState }) => (
              <Input
                {...field}
                error={fieldState.error?.message}
                label="Юридический адрес"
              />
            )}
          />
        </FormRow>
        <FormRow>
          <Col>
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  mask="+7 (999) 999-99-99"
                  error={fieldState.error?.message}
                  label="Телефон *"
                />
              )}
            />
          </Col>
          <Col />
        </FormRow>
        <FormRow>
          <Row>
            <Col>
              <Controller
                control={control}
                name="ogrn"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    mask="9999 99999 9999 9999"
                    error={fieldState.error?.message}
                    label="ОГРН"
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="kpp"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    mask="999999999999"
                    error={fieldState.error?.message}
                    label="КПП"
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
                name="inn"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    mask="999999999999"
                    error={fieldState.error?.message}
                    label="ИНН"
                  />
                )}
              />
            </Col>
            <Col>
              <Controller
                control={control}
                name="ceoFio"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    error={fieldState.error?.message}
                    label="ФИО генерального директора"
                  />
                )}
              />
            </Col>
          </Row>
        </FormRow>

        <Row>
          <Col />
          <Col>
            <Button variant="primary">Создать аккаунт</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default RegistrationForm
