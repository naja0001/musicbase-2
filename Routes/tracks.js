import { Router } from "express";
import connection from "../database.js";
import mysql from "mysql2";

const tracksRouter = Router();

// READ all tracks
tracksRouter.get("/", async (request, response) => {
  const queryString = /*sql*/ `
  SELECT * FROM tracks
JOIN artist_tracks ON tracks.TrackID = artist_tracks.trackId
JOIN artists ON artist_tracks.artistId = artists.id
ORDER BY artists.name;`;

  connection.query(queryString, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      response.json(results);
    }
  });
});

// GET Endpoint "/tracks/:id" - get one track
tracksRouter.get("/:id", (request, response) => {
  const id = request.params.id;
  const queryString = /*sql */ `
   SELECT * FROM tracks
    JOIN artist_tracks ON tracks.TrackID = artist_tracks.trackId
    JOIN artists ON artist_tracks.artistId = artists.id
    WHERE tracks.TrackID = ?;
  `;

  const values = [id];
  connection.query(queryString, values, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      response.json(results[0]);
    }
  });
});

export default tracksRouter;
