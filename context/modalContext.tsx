import { FC, ReactNode, createContext, useReducer } from "react";

interface ContextProps {
  open: boolean;
  toggleModal: (modalState: boolean) => void;
}

export const ModalContext = createContext({} as ContextProps);

type ActionType = {
  type: "toggle_open";
  payload: boolean;
};

const reducer = (state: { open: boolean }, action: ActionType) => {
  switch (action.type) {
    case "toggle_open":
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  open: false,
};

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const toggleModal = (modalState: boolean) => {
    dispatch({ type: "toggle_open", payload: !modalState });
  };

  return (
    <ModalContext.Provider value={{ ...state, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
