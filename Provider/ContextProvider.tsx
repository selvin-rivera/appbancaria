import { View } from 'react-native';
import React, { ReactNode, useContext, useState } from 'react';
import { contextoBanco } from '../Context/Contextapp';
import { Alert } from 'react-native';

interface ViewReact {
  children: ReactNode;
}

export default function ContextProvider({ children }: ViewReact) {
  const [balance, setBalance] = useState<number>(1000); // Saldo inicial
  const [transactiones, setTransactiones] = useState<string[]>([]); // Lista de transacciones

  const realizarTransferencia = (amount: string, accountNumber: string, recipientName: string) => {
    const transferAmount = parseFloat(amount);

    // Validación de monto
    if (isNaN(transferAmount) || transferAmount <= 0) {
      Alert.alert('Error', 'Ingrese un monto válido');
      return;
    }

    // Validación de saldo suficiente
    if (transferAmount > balance) {
      Alert.alert('Error', 'No tienes suficiente saldo para completar la transferencia');
      return;
    }

    // Actualización del saldo y registro de la transacción
    setBalance((prevBalance) => prevBalance - transferAmount);
    const transactionRecord = `Transferido $${transferAmount} a ${recipientName} (Cuenta: ${accountNumber})`;

    // Guardar solo las últimas 5 transacciones
    setTransactiones((prevTransactiones) => {
      const updatedTransactions = [...prevTransactiones, transactionRecord];
      return updatedTransactions.slice(-5);
    });

    Alert.alert('Éxito', 'Transferencia realizada con éxito');
  };

  return (
    <View>
      <contextoBanco.Provider value={{
        balance,
        transactiones,
        realizarTransferencia,
        setBalance,
      }}>
        {children}
      </contextoBanco.Provider>
    </View>
  );
}

// Hook personalizado para usar el contexto de banco
export const useContextBanco = () => {
  return useContext(contextoBanco);
};
