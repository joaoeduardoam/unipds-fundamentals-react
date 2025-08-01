// app/api/auth/route.ts
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

// variavel de ambiente para seguranca: opennssl rand -base 64
const JWT_SECRET = process.env.JWT_SECRET!


export async function POST(req: Request) {
  const { email, password } = await req.json()

  console.log("SECRET111: ", JWT_SECRET);
  console.log("email: ", email);
  console.log("password: ", password);
  // Simulação simples
  if (email === 'admin@example.com' && password === '123456') {
    const user = { email, role: 'admin' }
    console.log("SECRET2222: ", JWT_SECRET);
    const token = jwt.sign(user, JWT_SECRET, {
         expiresIn: '1h' 
        })

    return NextResponse.json({ token, user })
  }

  return NextResponse.json({ message: 'Credenciais inválidas' }, { status: 401 })
}
