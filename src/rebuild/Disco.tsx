// // import React, { FC, useState } from "react";
// // import "./disco-style.css";
// // import { DiscoObject } from "./interfaces";
// // import DISCOGRAPHYDATA from "./initdata/discography";
// // import { v4 as uuid } from "uuid";
// // import ArtistRow from "./components/artistrow";
// // import example from './andrew-bayer-spotify.json';

// const discographydata = DISCOGRAPHYDATA;
// const TestData = (json: JSON) => {
//   const fetchoptions = {
//     //method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
//     fetch(
//       `${json}`,
//       fetchoptions
//     )
//       .then((response) => {
//         //console.log(response);
//         //console.log(response.ok);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
// }

// const CreateArtistStats = (data: DiscoObject[], artists: string[]) => {
//   let artistdata: Object[] = [];
//   artists.forEach((artist) => {
//     let releasetotal: number = 0;
//     let unreleased: number = 0;
//     let singles: number = 0;
//     let albums: number = 0;
//     data.map((release) => {
//       if (release.artist === artist && Number(release.releasetype) === 0) {
//         ++singles;
//       } else if (release.artist === artist && release.releasetype === 1) {
//         ++albums;
//       } else {
//         //console.log('error in release type loop')
//       }
//       releasetotal = unreleased + singles + albums;
//     });
//     artistdata.push({
//       id: uuid(),
//       name: artist,
//       image: `covers/${artist.replace(" ", "%20")}/${artist.replace(
//         " ",
//         "%20"
//       )}-artist.jpg`,
//       stats: {
//         total: releasetotal,
//         unreleased: unreleased,
//         singles: singles,
//         albums: albums,
//       },
//     });
//   });
//   return artistdata;
// };

// export type ArtistRowProps = {
//   data: DiscoObject[];
// };

// export const ArtistRows: FC<ArtistRowProps> = (props) => {
//   console.log(example);
//   return (
//     <>
//       {CreateArtistStats(props.data, CreateArtists(props.data)).map((row) => {
//         //return <ArtistRow {...row} />;
//       })}
//     </>
//   );
// };

// const CreateArtists = (data: DiscoObject[]) => {
//   let artists: string[] = [];
//   data.forEach((release: DiscoObject) => {
//     if (artists.includes(release.albumartist)) {
//       //...do nothing
//     } else {
//       artists.push(release.artist);
//     }
//   });
//   return artists;
// };

// //TestData("./public/andrew-bayer-spotify.json")

// const Disco = () => {
//   return (
//     <div className="app-main">
//       <header className="app-header">
//         <div>
//           <span className="logo-icon">
//             <img
//               src="kvinyls-svgrepo-com.svg"
//               alt="discoglogo"
//               className="logo"
//             ></img>
//             react-disco-app
//           </span>
//           <h1 className="heading">
//             <span className="heading-primary">Discographies</span>
//             <span className="heading-secondary">marc fife favorites</span>
//           </h1>
//         </div>
//       </header>
//       <div className="disco-artist-list">
//         <ArtistRows data={discographydata}/>
//       </div>
//     </div>
//   );
// };

// export default Disco;

export const Disco = () => {
  return(
    <>
    </>
  )
}
