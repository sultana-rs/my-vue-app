<template>
    <div class="gallery-module">
        <div class="gallery-wrapper" :class="{ 'fullscreen-mode': isFullscreen }">
            <Swiper ref="swiperRef"
                    :modules="[Navigation, Pagination, EffectFade]"
                    navigation
                    :pagination="paginationOptions"
                    effect="fade"
                    :fadeEffect="{ crossFade: true }"
                    class="gallery-swiper">
                <SwiperSlide v-for="(img, i) in images" :key="i">
                    <div class="swiper-zoom-container">
                        <img :src="img.src"
                             :alt="img.alt || `Image ${i + 1}`"
                             :class="{ 'full-image': isFullscreen }" />
                    </div>
                </SwiperSlide>
            </Swiper>

            <!-- Controls inside wrapper, bottom-right -->
            <div class="gallery-controls">
                <div class="zoom-control" @click="toggleFullscreen">
                    <font-awesome-icon :icon="
              isFullscreen
                ? 'fa-solid fa-magnifying-glass-minus'
                : 'fa-solid fa-magnifying-glass-plus'
            " />
                </div>
                <div class="gallery-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation, Pagination, EffectFade } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import 'swiper/css/effect-fade'

    interface GalleryImage {
        src: string
        alt?: string
    }

    defineProps<{
        uuid: string
        type: 'GalleryModule'
        images: GalleryImage[]
    }>()

    const swiperRef = ref<any>(null)
    const isFullscreen = ref(false)

    function toggleFullscreen() {
        isFullscreen.value = !isFullscreen.value
    }

    const paginationOptions = {
        type: 'fraction',
        el: '.gallery-pagination',
        formatFractionCurrent: (num: number) => (num < 10 ? `0${num}` : `${num}`),
        formatFractionTotal: (num: number) => (num < 10 ? `0${num}` : `${num}`),
        renderFraction: (currentClass: string, totalClass: string) =>
            `<span class="${currentClass}"></span> | <span class="${totalClass}"></span>`,
    }
</script>

<style scoped>
    .gallery-module {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1rem;
        padding-bottom: 15rem;
        transition: all 0.5s ease;
    }

    .gallery-wrapper {
        position: relative;
    }

    .gallery-swiper {
        width: 100%;
        height: auto;
    }

    img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        margin: 0 auto;
        display: block;
        transition: all 0.5s ease;
        cursor: pointer;
    }

    /* When fullscreen toggle is active, show image fully */
    .fullscreen-mode img.full-image {
        object-fit: contain;
        height: auto;
        max-height: 80vh;
    }

    /* Bottom-right aligned controls INSIDE image */
    .gallery-controls {
        position: absolute;
        bottom: -8rem; /* few rem below image */
        right: -15rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.75rem;
        padding-right: 1rem;
        z-index: 5;
    }

    .zoom-control {
        font-size: 1.4rem;
        color: #007aff;
        cursor: pointer;
        background: none;
        padding: 0;
        border: none;
        transition: transform 0.3s ease;
    }

        .zoom-control:hover {
            transform: scale(1.1);
        }

    .gallery-pagination {
        font-size: 14px;
        color: #555;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

        .gallery-pagination span {
            font-variant-numeric: tabular-nums;
        }

    /* Swiper arrows */
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
        background-color: #007aff;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    :deep(.swiper-button-next::after),
    :deep(.swiper-button-prev::after) {
        font-size: 1.2rem;
        color: white;
        content: '';
    }

    :deep(.swiper-button-next)::before,
    :deep(.swiper-button-prev)::before {
        font-family: Arial, sans-serif;
        font-weight: bold;
        font-size: 1.4rem;
        color: white;
        display: block;
    }

    :deep(.swiper-button-next)::before {
        content: '›';
    }

    :deep(.swiper-button-prev)::before {
        content: '‹';
    }

    :deep(.swiper-button-next:hover),
    :deep(.swiper-button-prev:hover) {
        background-color: #005bb5;
        transform: scale(1.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    }
   
</style>
