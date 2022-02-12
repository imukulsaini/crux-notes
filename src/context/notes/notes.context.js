import React, { createContext, useContext, useReducer } from "react";
import { noteReducer } from "./notes.reducer";

const noteContext = createContext();

const initialState = {
  notes: [],
  noteID: "",
  searchValue: "",
  noteIDContent: "",
  status: "idle",
  markdownText: "",
};

export default function NoteProvider({ children }) {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  return (
    <noteContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </noteContext.Provider>
  );
}

export function useNote() {
  return useContext(noteContext);
}
