import React, { useContext } from 'react'
import { userdetails } from '../context/UserContex'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    let{user}=useContext(userdetails)
  return (
    user?children:<Navigate to="/login"/>
  )
  
}

export default ProtectedRoute
