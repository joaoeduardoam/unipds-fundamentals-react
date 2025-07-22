"use client"

import { FC, ReactNode } from "react"

type ButtonProps = {
    onClick: () => void,
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({onClick, children}) => 
        <button className="border border-solid border-black px-4 py-2 rounded cursor-pointer
            hover:bg-black hover:text-white transition-colors"
            onClick={onClick} >            

            {children}
            
        </button>
    