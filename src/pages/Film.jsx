/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import CardFilm from "../components/CardFilm";
import Button from "../components/Button";
const initialData = [
  {
    id: 1,
    judul: "The Dark Knight",
    gambar: "https://upload.wikimedia.org/wikipedia/id/8/8a/Dark_Knight.jpg",
    genre: "Action, Crime, Drama",
    durasi: "152 minutes",
    sinopsis:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    tahunRilis: 2008,
  },
  {
    id: 2,
    judul: "Interstellar",
    gambar:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: "Adventure, Drama, Sci-Fi",
    durasi: "169 minutes",
    sinopsis:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    tahunRilis: 2014,
  },
  {
    id: 3,
    judul: "Avatar",
    gambar:
      "https://upload.wikimedia.org/wikipedia/id/5/54/Avatar_The_Way_of_Water_poster.jpg",
    genre: "Action, Adventure, Fantasy",
    durasi: "162 minutes",
    sinopsis:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    tahunRilis: 2009,
  },
  {
    id: 4,
    judul: "The Lord of the Rings: The Fellowship of the Ring",
    gambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s",
    genre: "Action, Adventure, Drama",
    durasi: "178 minutes",
    sinopsis:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    tahunRilis: 2001,
  },
];

const savedFilm = localStorage.getItem("films");
const Film = () => {
  const [films, setFilms] = useState(
    savedFilm ? JSON.parse(savedFilm) : initialData
  );
  const [addFilm, setAddFilm] = useState();
  const [editFilm, setEditFilm] = useState(false);
  function onEdit(film) {
    setEditFilm(true);
    setAddFilm(film);
  }
  function onAdd() {
    setAddFilm({});
  }
  function onDelete(film) {
    if (confirm("Apakah Anda yakin ingin menghapus film ini?")) {
      setFilms(films.filter((t) => t.id !== film.id));
    }
  }
  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  });
  return (
    <main>
      <div className="mt-5 flex p-5 gap-5 justify-center items-center">
        <div className="flex gap-2 items-center">
          <label htmlFor="">Tahun Rilis</label>
          <select
            name="tahun"
            id=""
            onChange={(e) => {
              if (e.target.value == "asc") {
                setFilms(films.toSorted((a, b) => a.tahunRilis - b.tahunRilis));
              } else {
                setFilms(films.toSorted((a, b) => b.tahunRilis - a.tahunRilis));
              }
            }}
          >
            <option value="asc">asc</option>
            <option value="dsc">dsc</option>
          </select>
          <Button onClick={() => onAdd()}>Tambah</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-5 w-4/5 m-auto">
        {films.slice().map((film) => (
          <CardFilm
            key={film.id}
            film={film}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
      {addFilm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form className="bg-white p-8 rounded flex flex-col gap-4">
            <h1 className="text-xl text-center">
              {editFilm ? "Edit Film" : "Tambah Film"}
            </h1>
            <div className="flex flex-col">
              <label htmlFor="judul">Judul</label>
              <input
                id="judul"
                type="text"
                value={addFilm.judul}
                onChange={(e) => {
                  setAddFilm({ ...addFilm, judul: e.target.value });
                }}
                placeholder="judul"
                autoFocus
                required
                className="border border-black rounded p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ser">Gambar</label>
              <input
                type="text"
                id="gambar"
                name="gambar"
                value={addFilm.gambar}
                required
                onChange={(e) => {
                  setAddFilm({ ...addFilm, gambar: e.target.value });
                }}
                placeholder="Gambar"
                autoFocus
                className="border border-black rounded p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={addFilm.genre}
                required
                onChange={(e) => {
                  setAddFilm({ ...addFilm, genre: e.target.value });
                }}
                placeholder="genre"
                autoFocus
                className="border border-black rounded p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="durasi">Durasi</label>
              <input
                type="text"
                id="durasi"
                name="durasi"
                value={addFilm.durasi}
                required
                onChange={(e) => {
                  setAddFilm({ ...addFilm, durasi: e.target.value });
                }}
                placeholder="Durasi"
                autoFocus
                className="border border-black rounded p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sinopsis">Sinopsis</label>
              <input
                type="text"
                id="sinopsis"
                name="sinopsis"
                value={addFilm.sinopsis}
                required
                onChange={(e) => {
                  setAddFilm({ ...addFilm, sinopsis: e.target.value });
                }}
                placeholder="Sinopsis"
                autoFocus
                className="border border-black rounded p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="tahunRilis">Tahun Rilis</label>
              <input
                type="text"
                id="tahunRilis"
                name="tahunRilis"
                value={addFilm.tahunRilis}
                required
                onChange={(e) => {
                  setAddFilm({ ...addFilm, tahunRilis: e.target.value });
                }}
                placeholder="Tahun Rilis"
                autoFocus
                className="border border-black rounded p-1"
              />
            </div>
            <div className="flex justify-between">
              <Button onClick={() => setAddFilm()}>Batal</Button>
              <Button
                onClick={() => {
                  if (addFilm.id) {
                    setFilms(
                      films.map((t) => (t.id === addFilm.id ? addFilm : t))
                    );
                  } else {
                    setFilms([...films, { id: films.length + 1, ...addFilm }]);
                  }
                  setAddFilm();
                  setEditFilm(false);
                }}
              >
                Simpan
              </Button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default Film;
