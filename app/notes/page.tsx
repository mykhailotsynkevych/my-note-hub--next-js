import type { Metadata } from "next";
import { getNotes } from "@/lib/api";

export const metadata: Metadata = {
  title: "Notes - Note Hub",
  description: "View all your notes",
};

const Notes = async () => {
  const notes = await getNotes();
  console.log("notes", notes);

  return <div>Notes page</div>;
}

export default Notes;
