"use strict";

window.addEventListener("load", start);

function start() {
  GetArtists();
  GetAlbums();
  GetTracks();
}

async function GetArtists() {
  const response = await fetch(`http://localhost:3337/artists`);
  const artists = await response.json();
  displayArtists(artists);
}

async function displayArtists(artists) {
  const tbody = document.querySelector("#artists-container");
  tbody.innerHTML = "";

  for (const artist of artists) {
    const html = /*html*/ `
      <div class="grid-item">
        <img class="image" src=${artist.image} alt="${artist.name}"/>
        <div>${artist.name}</div>
        <div>${artist.birthdate}</div>
        <div>${artist.gender}</div>
          <div class="btns-container">
        <button id="btn-delete">Delete</button>
        <button id="btn-edit">Edit</button>
    </div>
      </div>
     
    `;

    tbody.insertAdjacentHTML("beforeend", html);
  }
}

async function GetTracks() {
  const response = await fetch(`http://localhost:3337/tracks`);
  const tracks = await response.json();
  displayTracks(tracks);
}

async function displayTracks(tracks) {
  const tbody = document.querySelector("#tracks-container");
  tbody.innerHTML = "";

  for (const track of tracks) {
    const html = /*html*/ `
      <div class="grid-item">
        <img class="image" src=${track.image} alt="${track.name}"/>
        <div>${track.name}</div>
        <div>${track.birthdate}</div>
        <div>${track.gender}</div>
      </div>
    `;

    tbody.insertAdjacentHTML("beforeend", html);
  }
}

async function GetAlbums() {
  const response = await fetch(`http://localhost:3337/albums`);
  const albums = await response.json();
  displayAlbums(albums);
}

async function displayAlbums(albums) {
  const tbody = document.querySelector("#albums-container");
  tbody.innerHTML = "";

  for (const album of albums) {
    const html = /*html*/ `
      <div class="grid-item">
        <img class="image" src=${album.image} alt="${album.name}"/>
        <div>${album.name}</div>
        <div>${album.birthdate}</div>
        <div>${album.gender}</div>
      </div>
    `;

    tbody.insertAdjacentHTML("beforeend", html);
  }
}
