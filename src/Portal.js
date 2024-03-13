import React from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'

export default function Portal() {
  return (
    <div className='portal'>
        <Topbar />
        <Outlet />
    </div>
  )
}
