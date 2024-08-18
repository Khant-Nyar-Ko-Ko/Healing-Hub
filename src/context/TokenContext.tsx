import React, { createContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TokenContext = createContext<any>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isToken, setIsToken] = useState(false);

  const handleToken = () => {
    setIsToken(!isToken);
  };

  return (
    <TokenContext.Provider value={{ isToken, handleToken }}>
      {children}
    </TokenContext.Provider>
  );
};
