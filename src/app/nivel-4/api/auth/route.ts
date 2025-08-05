// app/api/auth/route.ts
import { NextResponse } from 'next/server'
import { jwtVerify, SignJWT } from 'jose'
const SECRET =  new TextEncoder().encode(process.env.JWT_SECRET!)
import { User } from '@/context/nivel-4/AuthContext'

// variavel de ambiente para seguranca: opennssl rand -base 64
const JWT_SECRET = process.env.JWT_SECRET!

const fakeUsers = ["admin@example.com", "user@example.com" ];

export async function POST(req: Request) {
  const { email, password } = await req.json()

  console.log("SECRET111: ", JWT_SECRET);
  console.log("email: ", email);
  console.log("password: ", password);

  // Simulação simples
  if (fakeUsers.includes(email)) {
    if (password === '123456') {
      const user: User = { email, role: email.split('@')[0] === 'admin' ? 'admin' : 'user' }
      console.log("USER: ", user);
      const token = await new SignJWT(user)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime("1h")      
        .sign(SECRET)

      // return NextResponse.json({ token, user })

      const response = NextResponse.json({ user })

      // Acesso ao token no lado do servidor com cookies
      response.cookies.set('token', token, {
        // httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 , // 1 hora
    })

    return response
    }else{
      return NextResponse.json({ message: 'Password Incorrect!' }, { status: 401 })
    }


  }else{
    return NextResponse.json({ message: 'User not found!' }, { status: 401 })
  }

}
