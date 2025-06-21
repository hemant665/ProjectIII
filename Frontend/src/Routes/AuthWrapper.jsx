/* eslint-disable react/prop-types */

import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AuthWrapper =  (props) => {
      const {users} = useSelector((state) => state.users)
      return users? props.children : <Navigate to="/login" />
}

export default AuthWrapper;