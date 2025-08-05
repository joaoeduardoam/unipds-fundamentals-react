'use client'

import { createContext, useState, useContext, useEffect } from 'react'

import Cookies from 'js-cookie'
import { decodeJwt } from 'jose'
import { useRouter } from 'next/navigation'

export type User = {
  email: string
  role: 'user' | 'admin'
}

type AuthContextProps = {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const router = useRouter();

  useEffect(() => {

    const savedToken = Cookies.get('token');

    if (savedToken) {

      const { email, role } = decodeJwt(savedToken) as unknown as User
      
      setUser({ email, role })

      setToken(savedToken);
    }
  }, [])

  const login = async (email: string, password: string) => {

    const res = await fetch('/nivel-4/api/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })

  const data = await res.json()

  if (res.ok) {
      setUser(data.user)
    } else {
      throw new Error(data.message)
  }



  }

  const logout = () => {
    setToken(null);
    setUser(null);
    Cookies.remove('token');
    router.push('/nivel-4/login');
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
