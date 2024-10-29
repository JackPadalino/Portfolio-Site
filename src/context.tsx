import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';

// defining types for context and provider
export type AppContextType = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

export type AppContextProviderProps = {
  children: ReactNode;
};

// create the context object
export const AppContext = createContext<AppContextType | undefined>(undefined);

// create the provider to pass props to components
export const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
}) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  // values and functions that will be provided to our app's components
  const value: AppContextType = {
    showNav,
    setShowNav,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
