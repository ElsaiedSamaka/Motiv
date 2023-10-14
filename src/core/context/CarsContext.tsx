import { createContext, useContext, useReducer } from "react";

// initial state
const initialState = {
  data: [],
  error: null,
  isError: false,
  isLoading: false,
  isFetching: false,
  isSuccess: false,
};
// reducer
const carsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_CARS":
      return {
        ...state,
        isFetching: true,
        isLoading: true,
      };
    case "FETCH_CARS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isSuccess: true,
        isFetching: false,
        isLoading: false,
      };
    case "FETCH_CARS_FAIL":
      return {
        ...state,
        error: action.payload,
        isError: true,
        isSuccess: false,
      };
    case "FETCH_CARS_LOAD":
      return {
        ...state,
        isLoading: true,
        isFetching: false,
      };
    case "FETCH_CARS_BY_BRAND":
      return {
        ...state,
        data: action.payload,
      };
    case "RESET_CARS":
      return initialState;
    default:
      return state;
  }
};
// context
export const CarsContext = createContext({
  state: initialState,
  dispatch: (value) => {},
});
// context provider
export const CarsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carsReducer, initialState);

  return (
    <CarsContext.Provider value={{ state, dispatch }}>
      {children}
    </CarsContext.Provider>
  );
};

// provider of context consumer
export const useCarsContext = () => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error("useCarsContext must be used within a CarsProvider");
  }
  return context;
};
