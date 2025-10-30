import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterProvider from './components/CounterProvider.jsx'
import {Provider} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
 <CounterProvider>
      <App />
    </CounterProvider>
    </Provider>
   
  </StrictMode>,
)
