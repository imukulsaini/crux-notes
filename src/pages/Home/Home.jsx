import "./home.css";
import { GrFormAdd } from "react-icons/gr";
import { NoteSearch } from "../components/Search/Search";
import { NotesShow } from "../components/NotesShow/NotesShow";
import { CreateNote } from "../components/CreateNote/CreateNote";
import { useState } from "react";
import { DeleteNote } from "../components/DeleteNote/DeleteNote";
import { HomeHeader } from "./components/HomeHeader";

export function Home() {
  const [isFocusOnTitle, setFocusTitle] = useState(false);

  return (
    <div className="home">
      <section className="home__top">
      <HomeHeader/>
      </section>

      <section className="home__bottom">
   
      </section>

      <section className="home__note">
        <div className="note__header">
          <div className="note__head-info">
            <span className="note-header__text"> All Notes </span>
            <div
              onClick={() => !isFocusOnTitle && setFocusTitle(true)}
              className="note-add__button"
            >
              <GrFormAdd size={"1.2rem"} />
              <span className="note__text-name">new</span>
            </div>
          </div>
          <NoteSearch />
        </div>

        <div className="note__actions">
          <span className="note__action-name">Options</span>
          <DeleteNote />
        </div>

        <div className="note__show">
          <NotesShow />
        </div>
      </section>

      <section className="home__main">
        <CreateNote
          isAddButtonClick={isFocusOnTitle}
          setFocusTitle={setFocusTitle}
        />
      </section>
    </div>
  );
}
