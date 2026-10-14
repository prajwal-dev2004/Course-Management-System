import React, { useContext } from 'react'
import { userdetails } from '../context/UserContex'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
   let{user}= useContext(userdetails)
  return (
    user?.role==="admin"?children:<Navigate to="/login"/>
    
  )
}

export default PrivateRoute
