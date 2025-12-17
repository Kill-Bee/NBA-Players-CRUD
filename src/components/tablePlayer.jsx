import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function TablePlayer({ onAddClick, onEditClick }) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    tampilPlayer()
      .then(setPlayer)
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container">
        <div className="table-responsive text-nowrap">
          <table className="table mt-3 align-middle">
            <thead>
              <tr>
                <th>NO</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Position</th>
                <th>Teams</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {player.map((a, index) => (
                <tr key={a.id}>
                  <td className="px-4">{index + 1}</td>
                  <td>
                    <img src={a.photo} alt={a.name} width="50" className="rounded-circle" />
                  </td>
                  <td>{a.name}</td>
                  <td>{a.position}</td>
                  <td>{a.teams}</td>
                  <td>
                    <button className="btn btn-success mx-3" onClick={onEditClick}>Edit</button>
                    <button className="btn" style={{ backgroundColor: "#992820", color: "white" }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-secondary" onClick={onAddClick}>Add More 🔄️</button>
        </div>
      </div>
    </>
  );
}
