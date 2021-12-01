import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// API
import {
  getAddresses,
  getNames,
  getPatronymics,
  getSurnames,
} from '../../api/dadata'

// Components
import Button from '../../components/Button'
import FormRow from '../../components/FormRow'
import { Col, Row } from '../../components/Grid'
import H from '../../components/H'
import InputSuggest from '../../components/InputSuggest'
import SelectBox from '../../components/SelectBox'
import { REQUIRED_MESSAGE } from '../../constants/errors'

const NATIVE_CITIZEN = 1
const FOREIGN_CITIZEN = 2

const ContractorSchema = yup.object({
  surname: yup.string().required(REQUIRED_MESSAGE),
  name: yup.string().required(REQUIRED_MESSAGE),
  cityzenship: yup.string().required(REQUIRED_MESSAGE),
  address: yup.string().when('cityzenship', {
    is: (val) => val === String(NATIVE_CITIZEN),
    then: yup.string().required(REQUIRED_MESSAGE),
  }),
})

function ContractorDataForm() {
  const { control, handleSubmit, watch } = useForm({
    resolver: yupResolver(ContractorSchema),
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  const isNativeCitizen = watch('cityzenship') === NATIVE_CITIZEN

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <H size="1">Данные исполнителя</H>
      <Row>
        <Col>
          <FormRow>
            <Controller
              control={control}
              name="surname"
              render={({ field, fieldState }) => (
                <InputSuggest
                  {...field}
                  getOptionsMethod={getSurnames}
                  label="Фамилия *"
                  error={fieldState.error?.message}
                />
              )}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <InputSuggest
                  {...field}
                  getOptionsMethod={getNames}
                  label="Имя *"
                  error={fieldState.error?.message}
                />
              )}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Controller
              control={control}
              name="patronymic"
              render={({ field, fieldState }) => (
                <InputSuggest
                  {...field}
                  getOptionsMethod={getPatronymics}
                  label="Отчество"
                  error={fieldState.error?.message}
                />
              )}
            />
          </FormRow>
        </Col>
        <Col>
          <FormRow>
            <Controller
              name="cityzenship"
              control={control}
              render={({ field, fieldState, formState }) => {
                return (
                  <SelectBox
                    {...field}
                    label="Гражданство *"
                    name="cityzenship"
                    options={[
                      { id: NATIVE_CITIZEN, name: 'Гражданство РФ' },
                      { id: FOREIGN_CITIZEN, name: 'Иностранный гражданин' },
                    ]}
                    error={fieldState.error?.message}
                  />
                )
              }}
            />
          </FormRow>
        </Col>
      </Row>
      {isNativeCitizen && (
        <FormRow>
          <Controller
            shouldUnregister
            control={control}
            name="address"
            render={({ field, fieldState }) => (
              <InputSuggest
                {...field}
                getOptionsMethod={getAddresses}
                label="Адрес регистрации *"
                error={fieldState.error?.message}
              />
            )}
          />
        </FormRow>
      )}
      <Row>
        <Col />
        <Col>
          <Button variant="primary">Отправить на анализ</Button>
        </Col>
      </Row>
    </form>
  )
}

export default ContractorDataForm
