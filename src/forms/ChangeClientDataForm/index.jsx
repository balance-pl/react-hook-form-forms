import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import H from '../../components/H'
import FormRow from '../../components/FormRow'
import InputSuggest from '../../components/InputSuggest'
import Checkbox from '../../components/Checkbox'
import SelectBox from '../../components/SelectBox'
import Row from '../../components/Grid/Row'
import Col from '../../components/Grid/Col'
import Button from '../../components/Button'

import {
  initialPersonData,
  peopleSchemaValidation,
} from '../ChangeClientDataAdvancedForm'

import { FAKE_REASONS_FOR_LIVING, getFakeOptions } from '../../fakeData'

function ChangeClientDataForm() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      people: [initialPersonData],
    },
    resolver: yupResolver(peopleSchemaValidation),
  })

  const { fields } = useFieldArray({
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

  return (
    <div>
      <H size={1}>Изменение данных клиента</H>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          const areTheSameAddresses = watch(
            `people.${index}.areTheSameAddresses`
          )

          return (
            <div key={index}>
              <FormRow>
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
                <hr
                  style={{
                    margin: '30px 0',
                  }}
                />
              )}
            </div>
          )
        })}

        <Row>
          <Col />
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

export default ChangeClientDataForm
