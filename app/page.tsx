"use client"

import Login from '@/components/Login'
import { useState } from 'react'


export default function Home() {
  const [IsLogin,SetIsLogin]=useState(true);
  return (
    <main className="">
      <div className=' h-screen'>

      {
        IsLogin===true ?
        <Login  />: <h1>Login Diil</h1>
      }
      </div>
    </main>
  )
}
