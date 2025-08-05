'use client'


import { useAuth } from "@/context/nivel-4/AuthContext";
import { fetchWithToken } from "@/lib/nivel-4/fetchWithToken";
import { useEffect, useState } from "react";


export default function Page() {

  const [response, setResponse] = useState();

  const { token } = useAuth();

  console.log("token: ", token);

  useEffect(() => {

    if (token) {

      (async () => {
        const res = await fetchWithToken("http://localhost:3000/nivel-4/api/protected", token);
        const data = await res.json();
        setResponse(data);
      })();  

    }

   
  }, [token]);


  if (!token) {
    return (
      <div>
        <h1>Token not found</h1>
      </div>
    )
  }

  return (
  <div>
    {JSON.stringify(response)}
  </div>
  );
}
