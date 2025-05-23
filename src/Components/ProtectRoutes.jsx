import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectRoutes = ({children}) => {
        const authData = JSON.parse(localStorage.getItem("formData"));
  const authDataGoogle = JSON.parse(localStorage.getItem("googleFormData"));
        return authData || authDataGoogle ? children : <Navigate to={"/"} replace></Navigate>
      }
export default ProtectRoutes
