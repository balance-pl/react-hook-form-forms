import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { object } from 'yup'
import * as Yup from 'yup'

import H from '../../components/H'
import FormRow from '../../components/FormRow'
import InputSuggest from '../../components/InputSuggest'
import Checkbox from '../../components/Checkbox'
import SelectBox from '../../components/SelectBox'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import Button from '../../components/Button'
import IconDelete from '../../components/IconDelete'
import LinkButton from '../../components/LinkButton'

import { isExistDadata } from '../RegistrationForm'

import { REQUIRED_MESSAGE } from '../../constants/errors'
import { FAKE_REASONS_FOR_LIVING, getFakeOptions } from '../../fakeData'

import styles from './styles.module.scss'

const ADDRESS_NOT_FROM_DADATA_ERROR = 'Адрес должен быть из подсказки'
export const validateAddressByDadata = object().test(
  'Проверка адреса по наличию дадаты',
  ADDRESS_NOT_FROM_DADATA_ERROR,
  ({ value, dadata }) => {
    if (value) {
      return isExistDadata(dadata)
    }
    return true
  }
)

export const peopleSchemaValidation = Yup.object({
  people: Yup.array().of(
    Yup.object().shape({
      reasonOfLiving: Yup.string().when(['realAddress'], {
        is: ({ value }) => Boolean(value),
        then: Yup.string().required(REQUIRED_MESSAGE),
        otherwise: Yup.string(),
      }),
      addressRegistration: validateAddressByDadata,
      realAddress: validateAddressByDadata,
    })
  ),
})

export const initialPersonData = {
  addressRegistration: {
    value: undefined,
    dadata: undefined,
  },
  realAddress: {
    value: undefined,
    dadata: undefined,
  },
  areTheSameAddresses: false,
}

function ChangeClientDataAdvancedForm() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      people: [initialPersonData],
    },
    resolver: yupResolver(peopleSchemaValidation),
  })

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'people',
  })

  const onSubmit = (data) => {
    console.log('success submit -> ', data)
  }

  const handleAddressChange = (field) => (value, _, dadata) => {
    field.onChange({
      value,
      dadata,
    })
  }

  const handleDelete = (index) => () => {
    remove(index)
  }

  const handleAddPerson = () => {
    append(initialPersonData)
  }

  return (
    <div className={styles.ChangeClientDataAdvancedForm}>
      <H size={2}>Изменение данных клиента (Продвинутое)</H>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          const areTheSameAddresses = watch(
            `people.${index}.areTheSameAddresses`
          )

          return (
            <div key={index}>
              <FormRow>
                <div
                  className={styles.ChangeClientDataAdvancedForm__IconWrapper}
                >
                  <Controller
                    name={`people.${index}.addressRegistration`}
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
                  <IconDelete
                    className={styles.ChangeClientDataAdvancedForm__IconDelete}
                    onClick={handleDelete(index)}
                  />
                </div>
              </FormRow>

              <FormRow>
                <Controller
                  name={`people.${index}.areTheSameAddresses`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox {...field} checked={field.value}>
                      Адрес фактического проживания совпадает с адресом
                      регистрации
                    </Checkbox>
                  )}
                />
              </FormRow>

              {!areTheSameAddresses && (
                <>
                  <FormRow>
                    <Controller
                      name={`people.${index}.realAddress`}
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
                      name={`people.${index}.reasonOfLiving`}
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

              {fields.length !== index + 1 && (
                <div
                  className={styles.ChangeClientDataAdvancedForm__Separator}
                />
              )}
            </div>
          )
        })}

        <Row>
          <Col>
            <LinkButton type="button" onClick={handleAddPerson}>
              + Добавить адрес
            </LinkButton>
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Сохранить
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ChangeClientDataAdvancedForm
