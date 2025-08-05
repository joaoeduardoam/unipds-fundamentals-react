// app/dashboard/page.tsx
'use client'


import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/nivel-4/AuthContext'
import { Button } from '@/components/nivel-2/Button'

export default function Dashboard() {
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <div className='grid gap-y-4 p-4 border border-gray-900 rounded'>
      <h1 className='text-3xl font-bold'>Dashboard <br />Bem-vindo, {user.email}!</h1>
      <p>Sua role: {user.role}</p>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}
