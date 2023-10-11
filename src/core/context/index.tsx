import { TabContextProvider } from "./TabContext";
// you can then wrap the entire app with this context provider
const ContextProvider = ({ children }) => (
    <TabContextProvider>{children}</TabContextProvider>
);

export default ContextProvider;
