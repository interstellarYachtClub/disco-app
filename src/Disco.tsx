import React, { useState } from "react";
import "./disco-style.css";
import { DiscoObject } from "./interfaces";
import DISCOGRAPHYDATA from "./artistdata/discography";
import { v4 as uuid } from "uuid";
import ArtistRow from "./components/artistrow";
import { isTemplateExpression } from "typescript";

const discographydata = DISCOGRAPHYDATA;

const CreateArtistStats = (data: DiscoObject[], artists: string[]): any[] => {
  let artistdata: any[] = [];
  artists.forEach((artist) => {
    let releasetotal: number = 0;
    let unreleased: number = 0;
    let singles: number = 0;
    let albums: number = 0;
    data.map((release) => {
      if ((release.artist === artist) && (Number(release.releasetype) === 0)){
        ++singles;
      } else if ((release.artist === artist) && (release.releasetype === 1)){
        ++albums;
      } else {
        //console.log('error in release type loop')
      }
      releasetotal = unreleased + singles + albums;
    })
    artistdata.push(
      {
        id: uuid(),
        name: artist,
        image: `covers/${artist.replace(' ', '%20')}/${artist.replace(' ', '%20')}-artist.jpg`,
        stats: {
          total: releasetotal,
          unreleased: unreleased,
          singles: singles,
          albums: albums,
        }})
  })
  return artistdata;
};

const CreateArtists = (data: DiscoObject[]): any => {
  let artists: string[] = [];
  data.forEach((release: DiscoObject) => {
    if (artists.includes(release.albumartist)) {
      //...do nothing
    } else {
      artists.push(release.artist);
    }
  });
  return artists;
}

const CreateDisco = (data: DiscoObject[]): any => {
  return (
  CreateArtistStats(data, CreateArtists(data)).map(row => {
  return <ArtistRow {...row}/>
  })
  )
};

const Disco = () => {
  return (
    <div className="app-main">
      <header className="app-header">
        <div>
          <span className="logo-icon">
          <img src="kvinyls-svgrepo-com.svg" alt="discoglogo" className="logo"></img>
          react-disco-app
          </span>
          <h1 className="heading">
            <span className="heading-primary">Discographies</span>
            <span className="heading-secondary">marc fife favorites</span>
          </h1>
        </div>
      </header>
      <div className="disco-table-container">
      <table className="disco-table">
        <thead>
        </thead>
        <tbody>
          {CreateDisco(discographydata)}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Disco;
