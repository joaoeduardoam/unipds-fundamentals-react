// import { ValueGlobalCount } from "@/components/ValueGlobalCount";
// import { MyGlobalCount } from "../../components/MyGlobalCount";

import { MyGlobalCount } from "@/components/nivel-2/MyGlobalCount";
import { ValueGlobalCount } from "@/components/nivel-2/ValueGlobalCount";



const Page = () => (
    <div >
      <h1 className="text-4xl font-bold">
        Page Level 2
      </h1>
      <MyGlobalCount/>
      <ValueGlobalCount/>
    </div>
    
  );


export default Page;
