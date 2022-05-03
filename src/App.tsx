import React, { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./disco-style.css";
import { v4 as uuid } from "uuid";
import SpotifyExample from "./initdata/andrew-bayer-spotify.json";
import INITARTISTS from "./initdata/init-artists";
import AppHeader from "./rebuild/components/app-header";
import ArtistProfile, { ArtistProfileProps } from "./rebuild/components/artist-profile";
import ArtistDisco from "./rebuild/components/artist-disco";
import ArtistDiscoDisplay from "./rebuild/components/artist-disco";

console.log(`${INITARTISTS[0]}`);
console.log(SpotifyExample);

function App() {
  const [initArtists, setInitArtists] = useState(INITARTISTS);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AppHeader />
              {initArtists.map((artist) => {
                return <ArtistProfile {...artist} />;
              })}
            </>
          }
        />
        {initArtists.map((artist) => {
          return <Route path={artist.path} element={<ArtistDiscoDisplay artist={{
            name: artist.name,
            path: artist.path,
            associations: artist.associations
          }} {...artist}/>} />;
        })}
      </Routes>
    </>
  );
}

export default App;
