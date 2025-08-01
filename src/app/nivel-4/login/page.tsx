'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context//nivel-4/AuthContext'
import { Button } from '@/components/nivel-2/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push('/nivel-4/dashboard')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='grid gap-y-4 p-4 border border-gray-900 rounded'>
      <h1 className="text-3xl font-bold">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="grid gap-y-2 w-96">
        <input 
            className='p-2 border border-gray-900 rounded'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
        />

        <input 
            className='p-2 border border-gray-900 rounded'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
        />

        <Button type="submit">Entrar</Button>
    </form>
    </div>
    
  )
}
