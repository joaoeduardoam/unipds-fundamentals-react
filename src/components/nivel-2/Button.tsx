"use client"

import { ButtonHTMLAttributes, FC, ReactNode } from "react"

type ButtonProps = {
    onClick: () => void,
    children: ReactNode
}

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({onClick, children, ...props}) => 
        <button className="border border-solid border-black px-4 py-2 rounded cursor-pointer
            hover:bg-black hover:text-white transition-colors font-bold"
            onClick={onClick} 
            {...props}
        >            

            {children}
            
        </button>
    