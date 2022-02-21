import React from 'react'
import { NavLink as NavLinkComponent, Route, Routes } from 'react-router-dom'
import cn from 'classnames'

import styles from './App.module.scss'

// Forms
const BorrowerPassportForm = React.lazy(() =>
  import('./forms/BorrowerPassportForm')
)
const ChangeClientDataAdvancedForm = React.lazy(() =>
  import('./forms/ChangeClientDataAdvancedForm')
)
const ChangeClientDataForm = React.lazy(() =>
  import('./forms/ChangeClientDataForm')
)
const ContractorDataForm = React.lazy(() =>
  import('./forms/ContractorDataForm')
)
const EmployeeInfoForm = React.lazy(() => import('./forms/EmployeeInfoForm'))
const LoginForm = React.lazy(() => import('./forms/LoginForm'))
const PropertyForm = React.lazy(() => import('./forms/PropertyForm'))
const RegistrationForm = React.lazy(() => import('./forms/RegistrationForm'))
const ApproximatelyCalculateForm = React.lazy(() =>
  import('./forms/ApproximatelyCalculateForm')
)

const PATH = {
  BORROWER_PASSPORT_FORM: 'borrower-passport-form',
  CHANGE_CLIENT_DATA_ADVANCED_FORM: 'change-client-data-advanced-form',
  CHANGE_CLIENT_DATA_FORM: 'change-client-data-form',
  CONTRACTOR_DATA_FORM: 'contractor-data-form',
  EMPLOYEE_INFO_FORM: 'employee-info-form',
  LOGIN_FORM: 'login-form',
  PROPERTY_FORM: 'property-form',
  REGISTRATION_FORM: 'registration-form',
  APPROXIMATELY_CALCULATE_FORM: 'approximately-calculate-form',
}

function NavLink(props) {
  return (
    <NavLinkComponent
      {...props}
      className={({ isActive }) =>
        cn(styles.Menu__Item, {
          [styles.Menu__Item_active]: isActive,
        })
      }
    />
  )
}

function SuspenceFallback() {
  return (
    <div className={styles.SuspenseFallback}>
      <div className={styles.SuspenseFallback__Loader} />
    </div>
  )
}

function IndexComponent() {
  return '← Выберите форму из списка слева'
}

function App() {
  return (
    <div className={styles.App}>
      <aside className={styles.App__Sidebar}>
        <nav className={styles.Menu}>
          <NavLink to={`/${PATH.LOGIN_FORM}`}>Вход в систему</NavLink>
          <NavLink to={`/${PATH.EMPLOYEE_INFO_FORM}`}>
            Информация о сотруднике
          </NavLink>
          <NavLink to={`/${PATH.CONTRACTOR_DATA_FORM}`}>
            Данные исполнителя
          </NavLink>
          <NavLink to={`/${PATH.BORROWER_PASSPORT_FORM}`}>
            Паспорт заёмщика
          </NavLink>
          <NavLink to={`/${PATH.PROPERTY_FORM}`}>Объект</NavLink>
          <NavLink to={`/${PATH.REGISTRATION_FORM}`}>Регистрация</NavLink>
          <NavLink to={`/${PATH.CHANGE_CLIENT_DATA_FORM}`}>
            Изменения данных клиента
          </NavLink>
          <NavLink to={`/${PATH.CHANGE_CLIENT_DATA_ADVANCED_FORM}`}>
            Изменения данных клиента (продвинутое)
          </NavLink>
          <NavLink to={`/${PATH.APPROXIMATELY_CALCULATE_FORM}`}>
            Примерный расчёт
          </NavLink>
        </nav>
      </aside>
      <main className={styles.App__Content}>
        <div className={styles.App__Container}>
          <Routes>
            <Route
              path={PATH.BORROWER_PASSPORT_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <BorrowerPassportForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.CHANGE_CLIENT_DATA_ADVANCED_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <ChangeClientDataAdvancedForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.CHANGE_CLIENT_DATA_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <ChangeClientDataForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.CONTRACTOR_DATA_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <ContractorDataForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.EMPLOYEE_INFO_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <EmployeeInfoForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.LOGIN_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <LoginForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.PROPERTY_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <PropertyForm />
                </React.Suspense>
              }
            />
            <Route
              path={PATH.REGISTRATION_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <RegistrationForm />
                </React.Suspense>
              }
            />
            <Route path="*" element={<IndexComponent />} />

            <Route
              path={PATH.APPROXIMATELY_CALCULATE_FORM}
              element={
                <React.Suspense fallback={<SuspenceFallback />}>
                  <ApproximatelyCalculateForm />
                </React.Suspense>
              }
            />

            <Route path="*" element={<IndexComponent />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
