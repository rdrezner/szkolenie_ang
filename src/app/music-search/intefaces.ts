interface Entity {
    id: string;
}

interface Named {
    name: string;
}

export interface Album extends Entity, Named {
    artists: Artist[];
    images: AlbumImage[];
}

export interface AlbumImage {
    height: number;
    width: number;
    url: string;
}

export interface Artist extends Entity, Named {}
