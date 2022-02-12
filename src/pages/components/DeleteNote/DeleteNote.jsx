import { useNote } from "../../../context/notes/notes.context";
import { deleteNote } from "../../../firebase/firebase.config";

export function DeleteNote() {
  const {
    state: { noteID },
    dispatch,
  } = useNote();

  return (
    <>
      {noteID && (
        <span
          onClick={() => {
            deleteNote(noteID);
            dispatch({
              type: "CLEAR_NOTE_CONTENT",
            });
          }}
          className="note__action-name"
        >
          Delete
        </span>
      )}
    </>
  );
}
