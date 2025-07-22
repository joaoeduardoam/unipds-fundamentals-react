"use client"

import { use, useEffect, useState } from "react";
import { Button } from "./Button";

export const MyCount = () => {

    const [count, setCount] = useState(0);
    const [ex, setEx] = useState("");

    useEffect(() => {
        console.log("componet count changed");
    }, [count])

    useEffect(() => {
        console.log("componet ex changed");
    }, [ex])

    useEffect(() => {
        console.log("componet ex or count changed");
    }, [ex, count])



    return <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">
            Contador
        </h2>
        <p>Actual count: {count}</p>
        <div className="flex gap-4">
            
            <input className="border border-emerald-500 bg-gray-200 rounded" value={ex} onChange={(e) => setEx(e.target.value)}/>
            <Button 
            onClick={() => {
                console.log("click");
                setEx("")
            }}
            >            
            Clear
            </Button>
        </div>
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
        
    