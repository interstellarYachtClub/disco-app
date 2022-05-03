import React, {FC} from 'react';
import {Link } from "react-router-dom";

export type ArtistAssociation = {
  alias: string;
  spotifyid: string;
}

export type ArtistDiscoHeaderProps = {
  name: string;
  path: string;
  associations: ArtistAssociation[];
}

const ArtistDiscoHeader: FC<ArtistDiscoHeaderProps> = (props) => {
    return(
        <header className="artist-disco-header">
      <div>
      <Link to="/">
        <span className="disco-logo-icon">
          <img
            src="vinyls-svgrepo-com.svg"
            alt="discoglogo"
            className="disco-logo"
          ></img>
          react-disco-app
        </span>
        </Link>
        <h1 className="artist-disco-heading">
          <span className="artist-heading-primary">{props.name} Discography</span>
        </h1>
      </div>
    </header>
    )
}

export default ArtistDiscoHeader;