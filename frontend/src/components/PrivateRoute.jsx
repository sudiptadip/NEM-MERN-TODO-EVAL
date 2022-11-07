import React from 'react'
import { Navigate } from "react-router-dom";

export default function PrivateRoute({todo}) {
  
    let data = JSON.parse(localStorage.getItem("token"))
    if(data){
        return todo
    }else{
        return <Navigate to={'/login'} />
    }

}
