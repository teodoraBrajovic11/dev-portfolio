import { Navigate, Outlet, useParams } from "react-router-dom";
import type { Note } from "./App";

type NoteListProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteListProps) {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (note == null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
}
