import type { App } from 'vue'
import TextBlock from '@/components/TextBlock.vue'
// Import all components you want globally available
import TextModule from '@/components/TextModule.vue'
import PictureModule from '@/components/PictureModule.vue'
import GalleryModule from '@/components/GalleryModule.vue'
import NewGalleryModule from '@/components/NewGalleryModule.vue';
// Add others like PictureTextModule.vue as needed

export default {
    install(app: App) {
        app.component('TextBlock', TextBlock)
        app.component('TextModule', TextModule)
        app.component('PictureModule', PictureModule)
        app.component('GalleryModule', GalleryModule)
        app.component('NewGalleryModule', NewGalleryModule);
        // Register more here
    },
};
