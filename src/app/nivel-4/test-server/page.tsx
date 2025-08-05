
import { fetchWithToken } from "@/lib/nivel-4/fetchWithToken";
import { cookies } from "next/headers";


export default async function Page() {

  const cookieStore = await cookies();

  const token = cookieStore.get('token')?.value

  console.log("token: ", token);

  if (!token) {
    return (
      <div>
        <h1>Token not found</h1>
      </div>
    )
  }

  const response = await fetchWithToken("http://localhost:3000/nivel-4/api/protected", token);

  const data = await response.json();
  return (
  <div>
    {JSON.stringify(data)}
  </div>
  );
}
