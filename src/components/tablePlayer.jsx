export default function TablePlayer({ players, onAddClick, onEditClick, onDeleteClick, }) {

  return (
    <div className="container">
      <div className="table-responsive text-nowrap">
        <table className="table mt-3 align-middle">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Position</th>
              <th>Teams</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className="table-border-bottom-0">
            {players.map((player, index) => (
              <tr key={player.id}>
                <td className="px-4">{index + 1}</td>
                <td>
                  <img
                    src={player.photo}
                    alt={player.name}
                    width="50"
                    height="50"
                    className="rounded-circle"
                  />
                </td>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.teams}</td>
                <td>
                  <button
                    className="btn btn-success mx-3"
                    onClick={() => onEditClick(player)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn"
                    style={{ backgroundColor: "#992820", color: "white" }}
                    onClick={() => onDeleteClick(player.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-secondary mt-3" onClick={onAddClick}>
          Add More
        </button>
      </div>
    </div>
  );
}
