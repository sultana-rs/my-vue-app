<template>
    <div class="gallery-module">
        <div class="gallery-wrapper" :class="{ fullscreen: isFullscreen }">
            <div class="gallery-slider"
                 ref="slider"
                 @mousedown="startDrag"
                 @mousemove="onDrag"
                 @mouseup="endDrag"
                 @mouseleave="endDrag"
                 @touchstart="startTouch"
                 @touchmove="onTouch"
                 @touchend="endDrag"
                 :style="{
          transform: `translateX(calc(-${currentIndex * 100}% + ${offset}px))`,
          transition: animating ? 'transform 0.4s ease' : 'none'
        }">
                <div class="gallery-slide"
                     v-for="(img, i) in images"
                     :key="i">
                    <img :src="img.src" :alt="img.alt || 'Gallery Image'" />
                </div>
            </div>

            <!-- Arrows -->
            <button class="nav-button prev" @click="prevImage">&#10094;</button>
            <button class="nav-button next" @click="nextImage">&#10095;</button>

            <!-- Zoom Toggle & Pagination -->
            <div class="gallery-controls">
                <button class="zoom-button" @click="toggleFullscreen">
                    {{ isFullscreen ? '-' : '+' }}
                </button>
                <div class="pagination">
                    {{ formatIndex(currentIndex + 1) }} | {{ formatIndex(images.length) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    interface GalleryImage {
        src: string
        alt?: string
    }

    const props = defineProps<{
        uuid: string
        type: 'GalleryModule'
        images: GalleryImage[]
    }>()

    const images = props.images
    const currentIndex = ref(0)
    const isFullscreen = ref(false)
    const offset = ref(0)
    const animating = ref(false)
    const startX = ref(0)
    const dragging = ref(false)

    function toggleFullscreen() {
        isFullscreen.value = !isFullscreen.value
    }

    function formatIndex(i: number) {
        return i < 10 ? `0${i}` : `${i}`
    }

    function nextImage() {
        if (currentIndex.value < images.length - 1) currentIndex.value++
        animating.value = true
    }

    function prevImage() {
        if (currentIndex.value > 0) currentIndex.value--
        animating.value = true
    }

    // Drag Events
    function startDrag(e: MouseEvent) {
        dragging.value = true
        startX.value = e.clientX
        animating.value = false
    }

    function onDrag(e: MouseEvent) {
        if (!dragging.value) return
        offset.value = e.clientX - startX.value
    }

    function endDrag() {
        if (!dragging.value) return
        dragging.value = false
        animating.value = true

        if (offset.value > 100 && currentIndex.value > 0) {
            currentIndex.value--
        } else if (offset.value < -100 && currentIndex.value < images.length - 1) {
            currentIndex.value++
        }

        offset.value = 0
    }

    function startTouch(e: TouchEvent) {
        dragging.value = true
        startX.value = e.touches[0].clientX
        animating.value = false
    }

    function onTouch(e: TouchEvent) {
        if (!dragging.value) return
        offset.value = e.touches[0].clientX - startX.value
    }
</script>

<style scoped>
    .gallery-module {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        overflow: hidden;
    }

    .gallery-wrapper {
        position: relative;
        user-select: none;
        overflow: hidden;
    }

    .gallery-slider {
        display: flex;
        height: 600px;
        cursor: grab;
    }

    .gallery-slide {
        flex-shrink: 0;
        width: 100%;
    }

        .gallery-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

    /* Fullscreen Mode */
    .gallery-wrapper.fullscreen .gallery-slider {
        height: auto;
    }

    .gallery-wrapper.fullscreen .gallery-slide img {
        max-height: 80vh;
        object-fit: contain;
    }

    /* Navigation Arrows */
    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #007aff;
        color: white;
        border: none;
        font-size: 2rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        z-index: 10;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    /* Controls */
    .gallery-controls {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 1rem;
    }

    .zoom-button {
        font-size: 1.5rem;
        background: none;
        border: none;
        color: #007aff;
        cursor: pointer;
    }

    .pagination {
        font-size: 14px;
        color: #444;
        font-weight: 500;
    }
</style>
