import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'

import * as yup from 'yup'

import H from '../../components/H'
import FormRow from '../../components/FormRow'
import Input from '../../components/Input'
import Row from '../../components/Grid/Row'
import { Col } from '../../components/Grid'
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import InputDate from '../../components/InputDate'
import { yupResolver } from '@hookform/resolvers/yup'

import { REQUIRED_MESSAGE } from '../../constants/errors'

const schema = yup.object({
  passports: yup.array().of(
    yup.object().shape({
      serialNumber: yup.string().required(REQUIRED_MESSAGE),
      issueAt: yup.string().required(REQUIRED_MESSAGE),
    })
  ),
})

function BorrowerPassportForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      passports: [
        {
          serialNumber: undefined,
          issueAt: undefined,
          code: undefined,
        },
      ],
    },
    resolver: yupResolver(schema),
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'passports',
  })

  const addFormArray = () => {
    append({
      serialNumber: undefined,
      issueAt: undefined,
      code: undefined,
    })
  }

  const handleDelete = (index) => () => {
    remove(index)
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <H size="1">Информация о сотруднике</H>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <FormRow>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Controller
                    name={`passports.${index}.serialNumber`}
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                        {...field}
                        label="Серия и номер *"
                        mask="9999 999999"
                        error={fieldState.error?.message}
                      />
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
                      onClick={handleDelete(index)}
                    >
                      X
                    </div>
                  )}
                </div>
              </FormRow>

              <FormRow>
                <Row>
                  <Col>
                    <Controller
                      name={`passports.${index}.issueAt`}
                      control={control}
                      render={({ field, fieldState }) => (
                        <InputDate
                          label="Дата выдачи *"
                          {...field}
                          error={fieldState.error?.message}
                        />
                      )}
                    />
                  </Col>

                  <Col>
                    <Controller
                      name={`passports.${index}.code`}
                      control={control}
                      render={({ field, fieldState }) => (
                        <Input
                          label="Код подразделения"
                          mask="999-999"
                          {...field}
                          error={fieldState.error?.message}
                        />
                      )}
                    />
                  </Col>
                </Row>
              </FormRow>

              <br />
              <hr />
              <br />
              <br />
            </div>
          )
        })}

        <Row>
          <Col>
            <LinkButton type="button" variant="default" onClick={addFormArray}>
              Добавить паспорт
            </LinkButton>
          </Col>

          <Col>
            <Button variant="primary">Сохранить</Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default BorrowerPassportForm
