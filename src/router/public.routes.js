import React from 'react'
import { store } from './../index'
import { Navigate, Outlet } from 'react-router-dom'
import { MENU_HOME } from './routes'

const PublicRoutes = () => {
  const auth = store.getState().loginReducer.token
  return auth ? <Navigate to={MENU_HOME} /> : <Outlet />
}

export default PublicRoutes
