import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import { Col, Row } from '../../components/Grid'
import H from '../../components/H'
import Input from '../../components/Input'
import InputDate from '../../components/InputDate'
import InputSuggest from '../../components/InputSuggest'
import SelectBox from '../../components/SelectBox'
import {
  ERROR_MESSAGE_INVALID_EMAIL,
  REQUIRED_MESSAGE,
} from '../../constants/errors'

const fakeAddresses = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'г. Москва, ул. Ленина д.23',
      data: {
        key1: '1',
      },
    },
    {
      id: 2,
      name: 'г. Санкт-Петербург, ул. Пойменная д.23',
      data: {
        key2: '2',
      },
    },
  ])

const fakeSurnames = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'Иванов 1',
      data: {
        key1: '1',
      },
    },
    {
      id: 2,
      name: 'Иванов 2',
      data: {
        key2: '2',
      },
    },
  ])

const fakeEmployers = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'ООО СЫКТЫВКАР КОРПОРЕЙШН',
      data: {
        key1: '1',
      },
    },
    {
      id: 2,
      name: 'ГАЗПРОМ',
      data: {
        key2: '2',
      },
    },
  ])

const employerSchema = yup.object({
  surname: yup.string().required(REQUIRED_MESSAGE),
  name: yup.string().required(REQUIRED_MESSAGE),
  gender: yup.string().required(REQUIRED_MESSAGE),
  birthday: yup.string().required(REQUIRED_MESSAGE),
  email: yup.string().email(ERROR_MESSAGE_INVALID_EMAIL),
  phone: yup.string().required(REQUIRED_MESSAGE),
})

function EmployeeInfoForm() {
  const { control, handleSubmit, watch } = useForm({
    resolver: yupResolver(employerSchema),
  })

  console.log("watch('phone') -> ", watch('phone'))

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <H size="1">Информация о сотруднике</H>
      <FormRow>
        <Controller
          name="surname"
          control={control}
          render={({ field, fieldState }) => (
            <InputSuggest
              {...field}
              getOptionsMethod={fakeSurnames}
              label="Фамилия *"
              error={fieldState.error?.message}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <InputSuggest
              {...field}
              getOptionsMethod={fakeSurnames}
              label="Имя *"
              error={fieldState.error?.message}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          name="patronymic"
          control={control}
          render={({ field, fieldState }) => (
            <InputSuggest
              {...field}
              error={fieldState.error?.message}
              getOptionsMethod={fakeSurnames}
              label="Отчество"
            />
          )}
        />
      </FormRow>
      <Row>
        <Col>
          <FormRow>
            <Controller
              name="gender"
              control={control}
              render={({ field, fieldState }) => (
                <SelectBox
                  {...field}
                  error={fieldState.error?.message}
                  label="Пол *"
                  options={[
                    { id: 'male', name: 'мужской' },
                    { id: 'female', name: 'женский' },
                  ]}
                />
              )}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Controller
              control={control}
              name="birthday"
              render={({ field, fieldState }) => (
                <InputDate
                  {...field}
                  label="Дата рождения *"
                  error={fieldState.error?.message}
                />
              )}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Мобильный телефон *"
                  mask="+7 (999) 999-99-99"
                  error={fieldState.error?.message}
                />
              )}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  label="Email"
                  error={fieldState.error?.message}
                />
              )}
            />
          </FormRow>
        </Col>
      </Row>
      <FormRow>
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <InputSuggest
              {...field}
              getOptionsMethod={fakeAddresses}
              label="Адрес постоянной регистрации"
              error={fieldState.error?.message}
            />
          )}
        />
      </FormRow>
      <FormRow>
        <Controller
          control={control}
          name="employerName"
          render={({ field, fieldState }) => (
            <InputSuggest
              {...field}
              getOptionsMethod={fakeEmployers}
              label="Наименование работодателя"
              error={fieldState.error?.message}
            />
          )}
        />
      </FormRow>
      <Row>
        <Col />
        <Col>
          <Button variant="primary">Сохранить</Button>
        </Col>
      </Row>
    </form>
  )
}

export default EmployeeInfoForm
