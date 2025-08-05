"use client";

import { useAuth } from "@/context/nivel-4/AuthContext";
import Link from "next/link";



export default function Page() {

  const { user } = useAuth();

 
  return (
  <div className='grid gap-y-4 p-4 border border-gray-900 rounded'>
    <h1 className="3xl font-bold">Access unathorized!!</h1>

    {user ? (
      <p>Access not authorized! (Authorization NOK)</p>
    ) : (
      <p>Access not authorized! (Authentication NOK)</p>
      )}
    
    
    {user?.role && <h2>Your actual role is {user?.role}</h2>}

    <br />
    <Link className="underline border border-solid border-black px-4 py-2 rounded cursor-pointer
            hover:bg-black hover:text-white transition-colors font-bold text-center"
             href="/nivel-4/login">Login</Link>
  </div>
  );
}