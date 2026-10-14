import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast"
import CourseContext from './context/CourseContext'
import UserContex from './context/UserContex.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <UserContex>
    <Toaster />

    <CourseContext>
      <App/>
    </CourseContext>
    </UserContex>

  </>
)