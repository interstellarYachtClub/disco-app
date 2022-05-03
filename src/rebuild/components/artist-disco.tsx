import React, {FC} from 'react';
import ArtistDiscoHeader from './artist-disco-header';
import ArtistDiscoBody from './artist-disco-body';
import SpotifyExample from "../../initdata/andrew-bayer-spotify.json";

export type ArtistAssociation = {
    alias: string;
    spotifyid: string;
  }
  
  export type ArtistDiscoHeaderProps = {
    name: string;
    path: string;
    associations: ArtistAssociation[];
  }

export type SpotifyImage = {
    height: number;
    url: string;
    width: number;
}

export type SpotifyReleaseArtist = {
    external_urls: object;
    href: string;
    id: string;
    name: string;
    uri: string;

}

export type ArtistDiscoRelease = {
    album_group: string;
    album_type: string;
    artists: SpotifyReleaseArtist[];
    available_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: SpotifyImage[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export type ArtistDiscoCatalog = {
    href: string;
    items: ArtistDiscoRelease[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export type ArtistDiscoDisplayProps = {
    artist: ArtistDiscoHeaderProps;
    //discography: ArtistDiscoCatalog;
}

const ArtistDiscoDisplay: FC<ArtistDiscoDisplayProps> = (props) => {
    return(
        <>
        <ArtistDiscoHeader {...props.artist}/>
        <ArtistDiscoBody {...SpotifyExample}/>
        </>
    )
}

export default ArtistDiscoDisplay;