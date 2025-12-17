import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function EditPlayer({ onBackClick }) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    tampilPlayer().then(setPlayer).catch(console.error);
  }, []);
  return (
    <>
      <h1>INI EDIT FORM</h1>
      <button className="btn btn-secondary px-2" onClick={onBackClick}>
        Send ⬅️
      </button>
    </>
  );
}
