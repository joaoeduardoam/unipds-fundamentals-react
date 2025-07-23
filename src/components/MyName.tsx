"use client";

import { FC } from "react";

// const name = "João";

type MyNameProps = {
    name: string;
    age: number;
    birthDate: Date;
}

export const MyName: FC <MyNameProps> = ({name, age, birthDate}) =>

    <h1>My name is {name} and I'm {age} years old and I was born on {birthDate.toLocaleDateString("pt-BR")}</h1>

        
    
