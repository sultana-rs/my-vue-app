// ✅ Reusable base interface for text blocks
export interface TextBlockContent {
    headline: string;
    subline: string;
    intro: string;
}

// ✅ Reusable interface for images
export interface ImageContent {
    src: string;
    alt: string;
}

// ✅ TextModule: uses a nested textBlock + custom fields
export interface TextModule {
    type: 'TextModule';
    uuid: string;
    textBlock: TextBlockContent;
    text: string[];
}

// ✅ PictureModule: uses nested textBlock + image
export interface PictureModule {
    type: 'PictureModule';
    uuid: string;
    textBlock: TextBlockContent;
    image: ImageContent;
}

export interface GalleryImage {
    src: string;
    alt?: string;
}

export interface GalleryModule {
    type: 'GalleryModule';
    uuid: string;
    images: GalleryImage[];
}


export interface NewGalleryModule {
    type: 'NewGalleryModule';
    uuid: string;
    images: {
        src: string;
        alt?: string;
    }[];
}

// ✅ Union type (optional, for typing arrays)
export type ModuleType = TextModule | PictureModule | GalleryModule | NewGalleryModule;