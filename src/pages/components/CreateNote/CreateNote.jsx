import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/auth/auth.context";
import { useNote } from "../../../context/notes/notes.context";
import { createANewNote, updateNote } from "../../../firebase/firebase.config";
import { MarkDownPreview } from "../MarkdownPreview/MarkDownPreview";

export function CreateNote({ isAddButtonClick, setFocusTitle }) {
  const noteRef = useRef();
  const { userData } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
    setValue,
    getValues,
  } = useForm();
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const {
    state: { noteID, noteIDContent },
    dispatch,
  } = useNote();
  const [previewMarkdown, setMakrdown] = useState(false);

  useEffect(() => {
    if (isAddButtonClick === true) {
      dispatch({
        type: "CLEAR_NOTE_CONTENT",
      });

      setValue("title", "");
      setValue("note", "");
      setValue("tag", "");
      setFocusTitle(false);
      setFocus("title");
    }
  }, [isAddButtonClick]);

  useEffect(() => {
    if (noteID && noteIDContent) {
      setValue("title", noteIDContent.title);
      setValue("note", noteIDContent.text);
      setValue("tag", noteIDContent.tagName);
      noteRef?.current?.scrollIntoView({ behavior: "smooth" });
      setFocus("note");
    }
  }, [noteID]);

  useEffect(() => {
    if (previewMarkdown === true) {
      const text = getValues("note");
      dispatch({
        type: "SHOW_MARKDOWN",
        payload: text,
      });
    }
  }, [previewMarkdown]);

  function clearData() {
    setValue("title", "");
    setValue("note", "");
    setValue("tag", "");
  }

  async function createNewNote(data) {
    setLoading("pending");
    const { tag, title, note } = data;

    if (!noteID) {
      const response = await createANewNote({
        tagName: tag,
        title: title,
        text: note,
        ownerID: userData.uid,
      });

      if (response?.errMessage) {
        setLoading("rejected");
        setError(response.errMessage);
      } else {
        setLoading("fulfilled");
        clearData();
      }
    } else {
      const response = await updateNote({ noteID: noteID, note, tag, title });
      if (response?.errMessage) {
        setLoading("rejected");
        setError(response.errMessage);
      } else {
        setLoading("fulfilled");
        setFocus("note");
      }
    }
  }

  return (
    <form className="home-main__form" onSubmit={handleSubmit(createNewNote)}>
      <div className="form__title">
        <input
          {...register("title", {
            required: true,
          })}
          placeholder="add title"
          className="form-title__input"
        />
      </div>
      <div className="form__tag">
        <input
          {...register("tag", {
            required: true,
          })}
          placeholder="# add tag"
          className="form-tag__input"
        />
      </div>
      <div className="main__actions">
        <span
          onClick={() => setMakrdown((mark) => !mark)}
          className="main__action-name"
        >
          View Markdown
        </span>
        <span className="main__action-name">MarkDown Preview  Support</span>
        <div className="main__action-contain">
          <button type="submit" className="main__action-name">
            Save
          </button>
          <button onClick={() => clearData()} className="main__action-name">
            Clear
          </button>
        </div>
      </div>
      <div ref={noteRef} className="form__textarea">
        {!previewMarkdown ? (
          <textarea
            {...register("note", {
              required: true,
            })}
            placeholder="take notes"
            className="form-textarea__input"
          />
        ) : (
          <MarkDownPreview />
        )}
      </div>
    </form>
  );
}
