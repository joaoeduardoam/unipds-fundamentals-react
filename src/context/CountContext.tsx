"use client"
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";


type ContadorType = number | null;

type ContadorContextType = {
count: ContadorType;
setCount: Dispatch<SetStateAction<ContadorType>>;

};

export const ContadorContext = createContext<ContadorContextType>({
count: 0,
setCount: () => {}
});

export default function ContadorProvider({children,}:{children: React.ReactNode}) {
  const [count, setCount] = useState<ContadorType>(null);

  useEffect(() => {
    const countLocalStorage = localStorage.getItem('count') ?? 0;

    if (countLocalStorage !== null) {
      setCount(+countLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (count !== null) {
      localStorage.setItem('count', count.toString());
    }
    

  }, [count]);

  return (
    <ContadorContext.Provider value={{count, setCount}}>
      {children}
    </ContadorContext.Provider>
  );
}


