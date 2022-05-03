import React, { FC } from "react";
import {Link } from "react-router-dom";

export type ArtistProfileProps = {
  name: string,
  path: string
};
//<div className="disco-artist-stats">{props.releases} releases</div>
const ArtistProfile: FC<ArtistProfileProps> = (props) => {
  let artistlink: string = '/'+props.path;

  return (
    <>
    <Link to={artistlink}>
      <div
        className="disco-artist-profile"
        style={{
          backgroundImage: `linear-gradient(to left top, rgba(0,0,0,.5), rgba(66,66,66, .5)), url(/covers/${props.path}/${props.path}-artist.jpg)`,
        }}
      >
        <div className="disco-artist-name">{props.name}</div>

        <div></div>
      </div>
      </Link>
    </>
  );
};

export default ArtistProfile;
