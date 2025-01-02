'use client';
import React, {createContext, useContext, useState, ReactNode} from 'react';

type DashboardContextType = {
  isExpanded: boolean;
  toggleExpanded: () => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider = ({children}: {children: ReactNode}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <DashboardContext.Provider value={{isExpanded, toggleExpanded}}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider'
    );
  }
  return context;
};
