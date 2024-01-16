// PageContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface PageContextProps {
  currentPage: string;
  updateCurrentPage: (page: string) => void;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const usePageContext = (): PageContextProps => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};

interface PageProviderProps {
  children: ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("default");

  const updateCurrentPage = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    updateCurrentPage(currentPage)
    console.log(currentPage,  " from page context")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageContext.Provider value={{ currentPage, updateCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
