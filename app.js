// Load environment variables

import express from "express";
import cors from "cors";
import artistsRouter from "./Routes/artists.js";
import tracksRouter from "./Routes/tracks.js";
import albumsRouter from "./Routes/albums.js";

const app = express();
const port = process.env.PORT || 3336;

app.use(express.json());
app.use(cors());

app.use("/artists", artistsRouter);
app.use("/tracks", tracksRouter);
app.use("/albums", albumsRouter);

app.get("/", (req, res) => {
  res.send("Node.js Users REST API 🎉");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

/*
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import connection from "./database.js";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json()); // To parse JSON bodiesæææææææææææææææææ
app.use(cors()); // Enable CORS for all routes

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.get("/", (request, response) => {
  response.send("Node.js Users REST API 🎉");
});

// GET all artists
app.get("/artists", (req, res) => {
  const queryString = /*sql*`
    SELECT * FROM artists ORDER BY name;`;

  connection.query(queryString, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.json(results);
    }
  });
});

// GET one artist by ID
app.get("/artists/:id", (req, res) => {
  const id = req.params.id;
  const queryString = /*sql*`
    SELECT * 
    FROM artists
    WHERE id=?;`;
  const values = [id];

  connection.query(queryString, values, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.json(results[0]);
    }
  });
});

app.get("/artists/:id/albums", (request, response) => {
  const id = request.params.id;

  const queryString = /*sql `
    SELECT * FROM artists, albums 
    WHERE artist_id=? AND
    albums.artist_id = artists.id
    ORDER BY albums.title;`; // sql query

  const values = [id];

  connection.query(queryString, values, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      response.json(results);
    }
  });
});


app.get("/albums", async (request, response) => {
  const queryString = /*sql *`
    SELECT * FROM artists
    JOIN album_artists ON artists.id = album_artists.artistId
    JOIN albums ON album_artists.albumId = albums.AlbumID
    ORDER BY albums.AlbumTitle;`;

  connection.query(queryString, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      response.json(results);
    }
  });
});

app.get("/albums/:id", (request, response) => {
  const id = request.params.id;
  const queryString = /*sql *`
        SELECT
            albums.AlbumTitle AS albumTitle,
            tracks.TrackID AS trackId,
            tracks.TrackName AS trackTitle,
            tracks.ReleaseDate AS releaseDate,
            album_tracks.position
        FROM albums
        JOIN album_tracks
            ON albums.AlbumID = album_tracks.AlbumID
        JOIN tracks
            ON tracks.TrackID = album_tracks.TrackID
        WHERE albums.AlbumID = ?
        ORDER BY albums.AlbumTitle, album_tracks.position;`;
  const values = [id];

  connection.query(queryString, values, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      if (results.length > 0) {
        const album = {
          title: results[0].albumTitle,
          tracks: results.map((track) => {
            return {
              id: track.trackId,
              title: track.trackTitle,
              releaseDate: track.releaseDate,
              position:
                track.position !== null ? track.position : "Not specified", // Provide a default value,
            };
          }),
        };
        response.json(album);
      }
    }
  });
});

*/
