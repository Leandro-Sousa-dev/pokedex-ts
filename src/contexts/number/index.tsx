import { createContext, useState } from "react";
import { ChildrenInteface } from "../../interfaces/Generics";
import { NumberUseStateProps } from "../../interfaces/NumberContext";

export const listNumber = 10

export const NumberContext = createContext({} as NumberUseStateProps)

export const NumberProvider = ({children}: ChildrenInteface) => {

    const [ number, setNumber] = useState(listNumber)

    function newNumber(num: number){
        setNumber(num)
    }

    return (
        <NumberContext.Provider value={{number, newNumber}}>
            {children}
        </NumberContext.Provider>
    )
}