// export default function Page() {
//   return <div>Page</div>
// }

import Link from "next/link";
import { MyHobbies } from "../../../../components/MyHobbies";
import { MyImage } from "../../../../components/MyImage";
import { MyName } from "../../../../components/MyName";

type PageProps = {
  params: Promise<{
    name: string
  }>;
}

const Page = async ({params}: PageProps) => {

  const {name} = await params;


  return (
    <div className="grid gap-y-4">
      <MyName name={name} age={39} birthDate = {new Date(1987,6,27)}/>
      <MyHobbies/>
      <div>
      Gosto de:
      <MyImage/>
      </div>
      <div>
      <Link className="underline" href="/nivel-0">Voltar</Link>
      </div>
    </div>
    
  );

}


export default Page;









