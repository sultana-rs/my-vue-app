<script setup lang="ts">
    import { useWindowEvents } from '@/composables/useWindowEvents'
    import { watch } from 'vue'

    defineProps<{
        image: {
            src: string
            alt: string
        },
        textBlock: {
            headline: string
            subline: string
            intro: string
        }
    }>()

    const { scrollY, windowWidth, windowHeight, resized } = useWindowEvents()
    watch(() => resized.value, () => console.log(5));
</script>

<template>
    <div class="picture-module">
        <img :src="image.src" :alt="image.alt" />
        <TextBlock :data="textBlock" />

        <!-- Optional debug display (remove in production) -->
        <div class="debug-info">
            <p>🖼️ Window: {{ windowWidth }} x {{ windowHeight }}</p>
            <p>📌 Scroll Y: {{ scrollY }}</p>
        </div>
    </div>
</template>

<style scoped lang="less">
    .picture-module {
        .flex-column-center();
        padding: @padding-md;

    
    img
    {
        .responsive-img();
        width: 800px;
        height: 400px;
        max-width: @img-max-width;
        margin-bottom: 1rem;
    }

    .text-block {
        text-align: center;
        h2, h3, p

    {
        color: @text-color;
    }

    }

    .debug-info {
        font-size: 0.85rem;
        color: #888;
        margin-top: 1rem;
    }

    }

    @media (min-width: 768px) {
        .picture-module {
            .flex-row-center();
            text-align: left;
            img

    {
        margin-bottom: 10rem;
    }

    .text-block {
        max-width: @text-max-width-desktop;
    }

    }
    }
</style>

