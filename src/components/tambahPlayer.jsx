import { useState } from "react";
import { tambahPlayer, uploadPhoto } from "../services/service";

export default function InsertPlayer({ onBackClick, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    position: "",
    teams: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ok = confirm("Yakin mau menambahkan player?");
    if (!ok) return;

    try {
      let photoUrl = null;

      if (photo && photo.size > 2_000_000) {
        alert("Foto maksimal 2MB");
        return;
      }

      if (photo) {
        photoUrl = await uploadPhoto(photo);
      }

      await tambahPlayer({
        ...form,
        photo: photoUrl,
      });

      onSuccess();
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="card p-4 mt-5">
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
                  Insert Player
                </h2>
              </div>
            </div>

            {/* input name */}
            <div className="input-group mb-3">
              <input
                name="name"
                value={form.name}
                type="text"
                className="form-control"
                placeholder="Insert name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                required
              />
            </div>

            {/* input photo */}
            <div className="input-group mb-3">
              <input
                name="photo"
                type="file"
                className="form-control"
                id="inputGroupFile02"
                onChange={handleFileChange}
                required
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                Photos
              </label>
            </div>

            {/* input position */}
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect02"
                defaultValue=""
                name="position"
                value={form.position}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Your Position
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

            {/* input teams */}
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect02"
                name="teams"
                value={form.teams}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Your Team
                </option>

                {/* Eastern Conference */}
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
                Teams
              </label>
            </div>

            {/* button send & back */}
            <div className="row">
              <div className="col d-flex justify-content-center">
                <button type="submit" className="btn btn-secondary mx-3 px-5 ">
                  Send🚹
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
