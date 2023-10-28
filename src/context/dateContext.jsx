import { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export function useDateContext() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const setDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <DateContext.Provider value={{ selectedDate, setDate }}>
      {children}
    </DateContext.Provider>
  );
}
