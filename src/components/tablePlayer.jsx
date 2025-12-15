import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function TablePlayer() {
  const [player, setPlayer] = useState([])

  useEffect(() => {
    tampilPlayer()
      .then(setPlayer)
      .catch(console.error)
  }, [])

  return (
    <>
      <div className="container">
        <table className="table table-dark table-striped mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Position</th>
              <th>Teams</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td {player.map(a => (
                <div key={a.id}>{a.teams}</div>
              ))}>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
