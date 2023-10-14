import { CarsContextProvider } from "./CarsContext";
import { TabContextProvider } from "./TabContext";
// you can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
  <CarsContextProvider>
    <TabContextProvider>{children}</TabContextProvider>
  </CarsContextProvider>
);

export default ContextProvider;
