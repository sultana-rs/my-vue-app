export interface TextModule {
    type: 'text';
    headline: string;
    subline: string;
    intro: string;
    text: string[];
}

export interface PictureModule {
    type: 'picture';
    picture: string;
    alt: string;
    headline: string;
    subline: string;
    intro: string;
}
