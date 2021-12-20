import React from 'react'
import { Controller, useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'

import H from '../../../../components/H'
import FormRow from '../../../../components/FormRow'
import Row from '../../../../components/Grid/Row'
import Col from '../../../../components/Grid/Col'
import Input from '../../../../components/Input'
import IconDelete from '../../../../components/IconDelete'
import Button from '../../../../components/Button'

import styles from '../../style.module.scss'
import LinkButton from '../../../../components/LinkButton'
import { initialSellerData } from '../../index'

function SellersForm({ control, submitSellerData }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'sellers',
  })

  return (
    <>
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
    </>
  )
}

SellersForm.propTypes = {
  control: PropTypes.object,
  submitSellerData: PropTypes.func,
}

export default SellersForm
