export interface Track {
    num: number;
    title: string;
    artist: string;
}

export interface ArtistStats {
    total: number;
    unreleased: number;
    singles: number;
    albums: number;
}

export interface Album {
    id: number;
    album: string;
    artist: string;
    albumartist: string;
    year: number;
    label: string;
    tracks: Track[];
    cover: string;
    releasetype: number;
}

export interface Artist {
    id: string;
    name: string;
    stats: ArtistStats;
    image: string;
}

export interface DiscoObject {
    album: string;
    artist: string;
    albumartist: string;
    year: number;
    label: string;
    tracks: Track[];
    cover: string;
    releasetype: number;
}

/*
{
        artist: 'Andrew Bayer',
        albumartist: 'Andrew Bayer',
        album: 'The Taxi Driver',
        year: 2010,
        tracks: [
            {
                num: 1,
                title: 'The Taxi Driver (Original Mix)',
                artist: 'Andrew Bayer'
            },
            {
                num: 2,
                title: 'The Taxi Driver (Jaytech Remix)',
                artist: 'Andrew Bayer'
            }
        ],
        label: 'Anjunadeep',
        img: '80968',
        release: true,
        single: true

    },
*/