import { useState, useEffect } from "react";
import { deletePlayer, tampilPlayer } from "../services/service.js";
import TablePlayer from "../components/tablePlayer";
import InsertPlayer from "../components/tambahPlayer.jsx";
import EditPlayer from "../components/editPlayer.jsx";
import "../index.css";

export default function App() {
  const [view, setView] = useState("table");
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const fetchPlayers = async () => {
    const data = await tampilPlayer()
    setPlayers(Array.isArray(data) ? data : [])
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPlayers();
  }, [])

  const handleDelete = async (id) => {
    const ok = confirm("Yakin mau hapus?")
    if (!ok) return;

    await deletePlayer(id)
    fetchPlayers();
  }

  return (
    <>
      <div>
        <h1 className="mt-4">NBA CRUD Jamur Club's🍄</h1>
        {view === "table" && (
          <TablePlayer
            players={players}
            onAddClick={() => setView("insert")}
            onEditClick={(player) => {
              setSelectedPlayer(player)
              setView("edit")
            }}
            onDeleteClick={handleDelete}
          />
        )}

        {view === "insert" && (
          <InsertPlayer
            onSuccess={() => {
              fetchPlayers()
              setView("table")
            }}
            onBackClick={() => setView("table")}
          />
        )}

        {view === "edit" && (
          <EditPlayer
            playerData={selectedPlayer}
            onSuccess={() => {
              fetchPlayers()
              setView("table")
            }}
            onBackClick={() => setView("table")}
          />
        )}
      </div>
    </>
  );
}
