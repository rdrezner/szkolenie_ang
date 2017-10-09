export interface Playlist {
    id: number;
    name: string;
    favourite: boolean;
    color: string;
    tracks?: Track[];
}

interface Track {}
