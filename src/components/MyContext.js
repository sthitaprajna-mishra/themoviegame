import { createContext, useContext } from "react";

// Step 1: Create a context
const MyContext = createContext();

// Export the context for use in MyProvider
export { MyContext };

// Step 3: Create a consumer hook
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

// Export the consumer hook for use in other components
export { useMyContext };
