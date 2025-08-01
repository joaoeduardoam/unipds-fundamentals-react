// app/dashboard/page.tsx
'use client'


import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/nivel-4/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/nivel-4/login')
    }
  }, [user, router])

  if (!user) return null

  return (
    <div>
      <h1>Bem-vindo, {user.email}!</h1>
      <p>Sua role: {user.role}</p>
      <button onClick={logout}>Sair</button>
    </div>
  )
}
