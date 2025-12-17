import TablePlayer from "./components/tablePlayer";
import InsertPlayer from "./components/insertPlayer";
import EditPlayer from "./components/editPlayer"; 
import { useState } from "react";
import "./index.css";

export default function App() {
  const [view, setView] = useState("table");

  return (
    <>
      <div>
        <h1 className="mt-4">NBA CRUD Jamur Club's🍄</h1>
      {view === "table" && (
        <TablePlayer
        onAddClick={() => setView("insert")}
        onEditClick={() => setView("edit")}
        />
      )}
      {view === "insert" && (
        <InsertPlayer onBackClick={() => setView("table")} />
      )}
      {view === "edit" && (
        <EditPlayer onBackClick={() => setView("table")} />
      )}
      </div>
    </>
  );
}
