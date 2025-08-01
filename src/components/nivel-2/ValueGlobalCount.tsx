"use client"

import { use, useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { ContadorContext } from "@/context/nivel-2/CountContext";

export const ValueGlobalCount = () => {

    const {count} = useContext(ContadorContext);

    return <div className="grid gap-y-4">
        
        <p>Actual ValueGlobalCount: {count}</p>
        
        </div>
        
} 
        
    