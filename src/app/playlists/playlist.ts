export interface Playlist {
    id: number;
    name: string;
    favourite: boolean;
    color:string;
    // tracks: Array<Track>
    tracks?: Track[]
}

interface Track{}
