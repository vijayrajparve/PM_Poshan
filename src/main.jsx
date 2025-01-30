import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ParentFeedbackForm from './pages/ParentFeedbackForm.jsx'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './hooks/useAuth.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App/>
    </AuthProvider>
  </StrictMode>,
)
