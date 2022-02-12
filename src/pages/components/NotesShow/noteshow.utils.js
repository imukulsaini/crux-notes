export function getFilteredNotes(searchValue, userNotes) {
    return userNotes.filter((note) =>
      searchValue === ""
        ? note
        : note.tagName.toLowerCase().includes(searchValue?.toLowerCase())
    );
  }
