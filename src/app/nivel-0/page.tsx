// export default function Page() {
//   return <div>Page</div>
// }

import { MyHobbies } from "../../../components/MyHobbies";
import { MyImage } from "../../../components/MyImage";
import { MyName } from "../../../components/MyName";
const Page = () => <div>
  <MyName name="João" age={39} birthDate = {new Date(1987,6,27)}/>
  <MyHobbies/>

  Gosto de:
  <MyImage/>
</div>;


export default Page;
