export function noteReducer(state, action) {
  switch (action.type) {
    case "INITIALIZE_NOTES": {
      return {
        ...state,
        notes: action.payload,
        status: "fulfilled",
      };
    }
    case "SHOW_NOTE_CONTENT": {
      return {
        ...state,
        noteID: action.payload,
        noteIDContent: state.notes?.find((note) => note.id === action.payload),
      };
    }
    case "CLEAR_NOTE_CONTENT": {
      return {
        ...state,
        noteID: "",
        noteIDContent: "",
      };
    }
    case "SEARCH_NOTES": {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case "SHOW_MARKDOWN": {
      return {
        ...state,
        markdownText: action.payload,
      };
    }
  
    default:
      return state;
  }
}
