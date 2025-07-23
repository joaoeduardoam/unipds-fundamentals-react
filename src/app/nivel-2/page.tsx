import { ValueGlobalCount } from "@/components/ValueGlobalCount";
import { MyGlobalCount } from "../../components/MyGlobalCount";



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
