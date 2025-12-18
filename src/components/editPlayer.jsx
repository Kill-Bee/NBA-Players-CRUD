import { useEffect } from "react";
import { useState } from "react";
import { tampilPlayer } from "../services/service";

export default function EditPlayer({ onBackClick, onEditClick }) {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    tampilPlayer()
      .then(setPlayer)
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container">
        <div className="card p-4 mt-5">
          <div className="px-3">
          <div className="row">
              <div className="col">
                <h2 className="mb-3">
                  {" "}
                  <button type="button" className="btn" onClick={onBackClick}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      ></path>
                    </svg>
                  </button>{" "}
                  From edit
                </h2>
              </div>
            </div>

          <div className="input-group mb-3">
            <input
              disabled
              type="text"
              className="form-control"
              placeholder="Player Name"
              aria-label="Player Name"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect02"
              defaultValue=""
            >
              <option value="" disabled>
                Player Position
              </option>
              <option value="1">Point Guard (PG)</option>
              <option value="2">Shooting Guard (SG)</option>
              <option value="3">Small Forward (SF)</option>
              <option value="4">Power Forward (PF)</option>
              <option value="5">Center (C)</option>
            </select>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Options
            </label>
          </div>

          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect02"
              defaultValue=""
            >
              <option value="" disabled>
                Player Teams
              </option>
              <option
                value="1"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "20px",
                  paddingLeft: "25px",
                }}
              >
                Boston Celtics
              </option>
              <option value="2">Los Angeles Lakers</option>
              <option value="3">Chicago Bulls</option>
              <option value="4">Golden State Warriors</option>
              <option value="5">San Antonio Spurs</option>
              <option value="5">Miami Heat</option>
              <option value="5">New York Knicks</option>
            </select>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Options
            </label>
          </div>

          <button className="btn btn-secondary px-2" onClick={onEditClick}>
            Update ⬅️
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
