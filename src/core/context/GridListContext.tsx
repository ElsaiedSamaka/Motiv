import { createContext, useContext, useEffect, useReducer } from "react";

// initial state
const initialState = {
  selectedView: "grid",
};

// reducer
const viewReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_VIEW":
      console.log("payload", action.payload);
      return {
        ...state,
        selectedView: action.payload,
      };
    default:
      return state;
  }
};
// context
export const ViewContext = createContext({
  state: initialState,
  selectView: (index) => {},
});
// context provider
export const ViewContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(viewReducer, initialState);

  // wrapper of dispatch function
  const selectView = (view) => {
    dispatch({ type: "SELECT_VIEW", payload: view });
  };

  return (
    <ViewContext.Provider value={{ state, selectView }}>
      {children}
    </ViewContext.Provider>
  );
};

// provider of context consumer
export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useViewContext must be used within a ViewContextProvider");
  }
  return context;
};
