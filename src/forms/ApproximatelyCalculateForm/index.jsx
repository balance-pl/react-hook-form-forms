import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import Input from '../../components/Input'
import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Row from '../../components/Grid/Row'
import { Col } from '../../components/Grid'
import FormRow from '../../components/FormRow'
import { formatPriceNumber } from './helpers'
import InputSuggest from '../../components/InputSuggest'

import { CalculateSchema } from './validationSchema'

const getFakeOptions = () =>
  Promise.resolve([
    {
      id: 1,
      name: 'Иванов',
      data: {
        surname: 'Иванов',
      },
    },
    {
      id: 2,
      name: 'Петров',
      data: {
        surname: 'Петров',
      },
    },
    {
      id: 3,
      name: 'Сидоров',
      data: {
        surname: 'Сидоров',
      },
    },
  ])

const ApproximatelyCalculateForm = () => {
  const { control, handleSubmit, watch, formState } = useForm({
    shouldFocusError: false,
    defaultValues: {
      fio: undefined,
      phone: undefined,
      withPassportData: undefined,
      serialNumber: undefined,
      monthlySalary: undefined,
    },
    resolver: yupResolver(CalculateSchema),
  })

  const withPassportData = watch('withPassportData')

  useEffect(() => {
    const isDirtyCheckbox = formState.dirtyFields.withPassportData

    if (!isDirtyCheckbox) {
      return undefined
    }

    handleSubmit(onSubmit)()
  }, [withPassportData, formState.dirtyFields.withPassportData])

  const handleFioChange = (field) => (value, _, data) => {
    if (data) {
      return field.onChange(`${data.surname} `)
    }

    field.onChange(value)
  }

  const onSubmit = (data) => {
    console.log('success submitted ->', data)
  }

  return (
    <div>
      <h1>Примерный расчёт</h1>

      <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
        <FormRow>
          <Row>
            <Col>
              <Controller
                control={control}
                name="fio"
                render={({ field, fieldState }) => (
                  <InputSuggest
                    {...field}
                    onChange={handleFioChange(field)}
                    label="ФИО*"
                    error={fieldState.error?.message}
                    getOptionsMethod={getFakeOptions}
                  />
                )}
              />
            </Col>

            <Col>
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    error={fieldState.error?.message}
                    label="Телефон*"
                    mask="+7 (999) 999-99-99"
                  />
                )}
              />
            </Col>
          </Row>
        </FormRow>

        <FormRow>
          <Controller
            name="withPassportData"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value}>
                По паспорту
              </Checkbox>
            )}
          />
        </FormRow>

        {withPassportData && (
          <>
            <FormRow>
              <Controller
                shouldUnregister={!withPassportData}
                name="serialNumber"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    error={fieldState.error?.message}
                    label="Серия и номер паспорта*"
                    mask="9999 999999"
                  />
                )}
              />
            </FormRow>

            <FormRow>
              <Controller
                shouldUnregister={!withPassportData}
                name="monthlySalary"
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    error={fieldState.error?.message}
                    label="Ежемесячный доход*"
                    onChange={(value) => {
                      field.onChange(formatPriceNumber(value))
                    }}
                  />
                )}
              />
            </FormRow>
          </>
        )}

        <Row>
          <Col />
          <Col>
            <Button variant="primary">Отправить</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default ApproximatelyCalculateForm
