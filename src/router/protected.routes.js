import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { MENU_LOGIN } from './routes'
import MenuPage from '../components/layouts/Menu/Index'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { PROFILE, TOKEN } from '../Constants'

const ProtectedRoutes = () => {
  const token = localStorage.getItem(TOKEN)
  const profile = JSON.parse(localStorage.getItem(PROFILE))
  const [isToggle, setIsToggle] = useState(true)

  return token && profile ? (
    <BodyPage>
      <MenuPage isToggle={isToggle} setIsToggle={setIsToggle} />

      <BodyContent style={{ marginLeft: isToggle ? '245px' : '110px' }}>
        <Container fluid className="pe-xl-4">
          <Outlet />
        </Container>
      </BodyContent>
    </BodyPage>
  ) : (
    <Navigate to={MENU_LOGIN} />
  )
}
const BodyPage = styled.div`
  height: 100%;
  display: flex;
`
const BodyContent = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  min-width: 0px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-left: 0 !important;
  }
`
export default ProtectedRoutes
