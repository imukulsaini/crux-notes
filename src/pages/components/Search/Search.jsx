import { useForm } from "react-hook-form";
import { TiDeleteOutline } from "react-icons/ti";
import { useNote } from "../../../context/notes/notes.context";
import { CgSearch } from "react-icons/cg";

export function NoteSearch() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const { dispatch } = useNote();

  const watchSearch = watch("search");

  function searchNote(data) {
    const { search } = data;
    dispatch({
      type: "SEARCH_NOTES",
      payload: search,
    });
  }
  function clearSearch() {
    setValue("search", "");
  }

  return (
    <div className="note__search">
      <form onSubmit={handleSubmit(searchNote)} className="note__search-form">
        <input
          {...register("search")}
          className="search__input"
          type="text"
          placeholder="Search By  #tag"
        />
        <button className="search__button" type="submit">
          <CgSearch className="search-icon" />
        </button>
        {watchSearch?.length > 0 && (
          <span className="search__delete-icon">
            <TiDeleteOutline
              onClick={clearSearch}
              className="search__delete"
              size={"1.4rem"}
            />
          </span>
        )}
      </form>
    </div>
  );
}
