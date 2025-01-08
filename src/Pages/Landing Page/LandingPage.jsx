import { Outlet } from 'react-router-dom'
import LandingPageNav from '../../components/LandingPageNav'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <LandingPageNav/>
        <Outlet/>
    </div>
  )
}

export default LandingPage
