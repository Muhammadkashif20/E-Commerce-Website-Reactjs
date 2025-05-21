import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectRoutes = ({children}) => {
        const authData = JSON.parse(localStorage.getItem("formData"));
        return authData ? children : <Navigate to={"/"} replace></Navigate>
      }
export default ProtectRoutes
