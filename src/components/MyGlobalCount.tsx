"use client"

import { use, useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { ContadorContext } from "@/context/CountContext";

export const MyGlobalCount = () => {

    const {count, setCount} = useContext(ContadorContext);
    return <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
            Contador
        </h2>
        <p>Actual count: {count}</p>
        
        <div className="flex gap-4">
            <Button 
            onClick={() => {
                console.log("click");
                setCount((c) => c + 1);
            }}
            >            
            +1
        </Button>
        <Button 
            onClick={() => {
                console.log("click");
                setCount((c) => c - 1);
            }}
            >            
            -1
        </Button>
        </div>
        
    </div>
} 
        
    