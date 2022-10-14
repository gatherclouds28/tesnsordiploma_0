export interface Image {
  '#text': string;
  size: string;
}

export interface Artist {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
}

export interface Artists {
  artist: Artist[];
}

export interface ArtistsType {
  artists: Artists;
}