import { createContext } from "react";

export const ContextContador = createContext({
    balance: 1000, 
    transacciones: [], 
    realizarTransferencia: () => {}, 
    agregarTransaccion: () => {},
})

