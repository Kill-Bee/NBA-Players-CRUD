import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/tampil";

export default function TablePlayer() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    tampilPlayer().then(setPlayer).catch(console.error);
  }, []);

  return (
    <>
      <div className="container">
       <div class="card">
  <div class="table-responsive text-nowrap">
    <table class="table">
     <thead>
        <tr>
          <th>NO</th>
          <th>NIS</th>
          <th>Nama</th>
          <th>Jenis</th>
          <th>Bulan</th>
          <th>Jumlah</th>
        </tr>
      </thead>
          <tbody>
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
                <button className="btn btn-success mx-3">Edit</button>
                <button className="btn" style={{backgroundColor: "#992820", color: "white"}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </>
  );
}
