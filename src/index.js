import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './styles/main.sass'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from 'features/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className='spinner-border text-primary' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          }
        >
          <PersistGate persistor={persistor} loading={<p>Loading ... </p>}>
            <App />
          </PersistGate>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.Fragment>
)
