// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET =  new TextEncoder().encode(process.env.JWT_SECRET!)



export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  console.log("token midd: ", token);

  if (!token) return NextResponse.redirect(new URL('/nivel-4/login', req.url))


  try {
 
    const { payload } = await jwtVerify(token, SECRET)


    const role = payload.role
    console.log("try role: ", role);

    if (req.nextUrl.pathname.startsWith('/nivel-4/dashboard') && role !== 'admin') {
      return NextResponse.redirect(new URL('/nivel-4/unauthorized', req.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/nivel-4/login', req.url))
  }
}

export const config = {
  matcher: ['/nivel-4/dashboard'],
}
