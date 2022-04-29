import React from "react";
import { Artist } from "../interfaces";

const ArtistRow = (props: Artist) => {
  console.log(props.image);
  return (
    <tr
      className="disco-artist-row"
      style={{
        backgroundImage: `linear-gradient(to left top, rgba(0,0,0,.5), rgba(66,66,66, .5)), url(${props.image})`,
      }}
    >
      <td>
        <div className="disco-artist-header">
          <div className="disco-artist-name">{props.name}</div>
        </div>

        <div>
          <table className="disco-artist-stats">
            <tbody>
              <tr>
                <td>{props.stats.total}</td>
                <td>{props.stats.albums}</td>
              </tr>
              <tr>
                <td>{props.stats.unreleased}</td>
                <td>{props.stats.singles}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};

export default ArtistRow;
