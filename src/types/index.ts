// Reusable base interface for text blocks
export interface TextBlockContent {
    headline: string;
    subline: string;
    intro: string;
}

// TextModule uses the base + its own fields
export interface TextModule extends TextBlockContent {
    type: 'text';
    text: string[];
}

// PictureModule also uses the same base
export interface PictureModule extends TextBlockContent {
    type: 'picture';
    picture: string;
    alt: string;
}
