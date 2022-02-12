import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { RiBarChartHorizontalLine, RiAccountCircleFill } from "react-icons/ri";
import { useAuth } from "../../../context/auth/auth.context";
import { useNote } from "../../../context/notes/notes.context";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
import { LoadingSpinner } from "../../Spinner/LoadingSpinner";
import { getFilteredNotes } from "./noteshow.utils";

export function NotesShow() {
  const { userData } = useAuth();
  const {
    dispatch,
    state: { notes, noteID, searchValue },
  } = useNote();
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let noteMount = true;
    setLoading("pending");
    (async function () {
      if (userData) {
        try {
          const collRef = collection(db, "notes");
          const q = query(collRef, where("ownerID", "==", `${userData.uid}`));
          onSnapshot(q, (snapshotNotes) => {
            let notes = [];
            snapshotNotes.docs.forEach((doc) =>
              notes.push({ id: doc.id, ...doc.data() })
            );
            noteMount === true &&
              dispatch({
                type: "INITIALIZE_NOTES",
                payload: notes,
              });
            setLoading("fulfilled");
          });
        } catch (error) {
          console.log(error);
          setError(error.message);
        }
      }
    })();
    return () => {
      noteMount = false;
    };
  }, [userData, dispatch]);

  const fileredNotes = notes && getFilteredNotes(searchValue, notes);

  return (
    <>
      {loading === "pending" && (
        <LoadingSpinner isDefaultCss={true} color="#9b9b9b" size={"1.5rem"} />
      )}
      {loading === "fulfilled" &&
        fileredNotes &&
        fileredNotes.map((note) => {
          const createdAt = note.timeStamp && note?.timeStamp.toDate().toISOString().slice(0, 10)
          return (
            <div
              key={note.id}
              onClick={() =>
                dispatch({
                  type: "SHOW_NOTE_CONTENT",
                  payload: note.id,
                })
              }
              className={
                noteID === note.id
                  ? "note__container "
                  : "note__container bg-primary-color"
              }
            >
              <span className="note__show-icon">
                <RiBarChartHorizontalLine color="#086dd6" size={"1.1rem"} />
              </span>
              <div className="note__info">
                <span className="note__title-show">{note.title}</span>
                <p className="note__preview">{note.text}</p>
                <span className="note__created-at">{createdAt}</span>
              </div>
            </div>
          );
        })}
    </>
  );
}
