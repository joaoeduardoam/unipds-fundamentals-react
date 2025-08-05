// app/api/protected/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)


export async function GET(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1]

  console.log("token: ", token);

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
      const { payload } = await jwtVerify(token, SECRET)
    return NextResponse.json({ message: 'Data Protected!', user: payload })
  } catch {
    return NextResponse.json({ message: 'Invalid Token!' }, { status: 401 })
  }
}
