import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'
import { ModalProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider>
  <BrowserRouter>
  <AuthProvider>
  <div className='dark:bg-gray-200 dark:text-white'>
  <App/>
  </div>
  </AuthProvider>
  </BrowserRouter>
  </ModalProvider>
);
