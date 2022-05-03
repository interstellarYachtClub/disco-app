import React, {FC} from 'react';
import { ArtistDiscoRelease, SpotifyImage, ArtistDiscoCatalog } from './artist-disco';

const ArtistDiscoBody: FC<ArtistDiscoCatalog>  = (props)=> {
    return(
        <>
        <div className="artist-disco-body">
        {props.total}
        </div>
        </>
    )
}

export default ArtistDiscoBody;