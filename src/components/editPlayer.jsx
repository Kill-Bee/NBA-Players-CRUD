import { useState } from "react";
import { editPlayer } from "../services/service";
import { useEffect } from "react";

export default function EditPlayer({ playerData, onBackClick, onSuccess }) {
  const [position, setPosition] = useState("");
  const [teams, setTeams] = useState("");

  useEffect(() => {
    if (playerData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPosition(playerData.position);
      setTeams(playerData.teams);
    }
  }, [playerData])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = confirm("Yakin mau mengubah data player?");
    if (!ok) return;

    await editPlayer(playerData.id, {
      position,
      teams
    })

    onSuccess();
  }

  if (!playerData) return null;

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
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
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
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
                  value={playerData.name}
                  className="form-control"
                  aria-label="Player Name"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value="" disabled>
                    Player Position
                  </option>
                  <option value="PG">Point Guard (PG)</option>
                  <option value="SG">Shooting Guard (SG)</option>
                  <option value="SF">Small Forward (SF)</option>
                  <option value="PF">Power Forward (PF)</option>
                  <option value="C">Center (C)</option>
                </select>
                <label className="input-group-text" htmlFor="inputGroupSelect02">
                  Options
                </label>
              </div>

              <div className="input-group mb-3">
                <select
                  className="form-select"
                  id="inputGroupSelect02"
                  value={teams}
                  onChange={(e) => setTeams(e.target.value)}
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
                  <option value="Boston Celtics">Boston Celtics</option>
                  <option value="Brooklyn Nets">Brooklyn Nets</option>
                  <option value="New York Knicks">New York Knicks</option>
                  <option value="Philadelphia 76ers">Philadelphia 76ers</option>
                  <option value="Toronto Raptors">Toronto Raptors</option>

                  <option value="Chicago Bulls">Chicago Bulls</option>
                  <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
                  <option value="Detroit Pistons">Detroit Pistons</option>
                  <option value="Indiana Pacers">Indiana Pacers</option>
                  <option value="Milwaukee Bucks">Milwaukee Bucks</option>

                  <option value="Atlanta Hawks">Atlanta Hawks</option>
                  <option value="Charlotte Hornets">Charlotte Hornets</option>
                  <option value="Miami Heat">Miami Heat</option>
                  <option value="Orlando Magic">Orlando Magic</option>
                  <option value="Washington Wizards">Washington Wizards</option>

                  {/* Western Conference */}
                  <option value="Denver Nuggets">Denver Nuggets</option>
                  <option value="Minnesota Timberwolves">
                    Minnesota Timberwolves
                  </option>
                  <option value="Oklahoma City Thunder">
                    Oklahoma City Thunder
                  </option>
                  <option value="Portland Trail Blazers">
                    Portland Trail Blazers
                  </option>
                  <option value="Utah Jazz">Utah Jazz</option>

                  <option value="Golden State Warriors">
                    Golden State Warriors
                  </option>
                  <option value="Los Angeles Clippers">
                    Los Angeles Clippers
                  </option>
                  <option value="Los Angeles Lakers">Los Angeles Lakers</option>
                  <option value="Phoenix Suns">Phoenix Suns</option>
                  <option value="Sacramento Kings">Sacramento Kings</option>

                  <option value="Dallas Mavericks">Dallas Mavericks</option>
                  <option value="Houston Rockets">Houston Rockets</option>
                  <option value="Memphis Grizzlies">Memphis Grizzlies</option>
                  <option value="New Orleans Pelicans">
                    New Orleans Pelicans
                  </option>
                  <option value="San Antonio Spurs">San Antonio Spurs</option>
                </select>
                <label className="input-group-text" htmlFor="inputGroupSelect02">
                  Options
                </label>
              </div>

              <button className="btn btn-secondary px-2" type="submit">
                Update ⬅️
              </button>

            </div>
          </div>
        </form>
      </div>
    </>
  );
}
