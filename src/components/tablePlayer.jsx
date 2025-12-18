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
            {players.map((p, index) => (
              <tr key={p.id}>
                <td className="px-4">{index + 1}</td>
                <td>
                  <img
                    src={p.photo}
                    alt={p.name}
                    width="50"
                    height="50"
                    className="rounded-circle"
                  />
                </td>
                <td>{p.name}</td>
                <td>{p.position}</td>
                <td>{p.teams}</td>
                <td>
                  <button
                    className="btn btn-success mx-3"
                    onClick={() => onEditClick(p)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn"
                    style={{ backgroundColor: "#992820", color: "white" }}
                    onClick={() => onDeleteClick(p.id)}
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
