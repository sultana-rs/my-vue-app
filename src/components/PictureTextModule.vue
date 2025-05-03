<template>
    <section class="picture-text-module">
        <div class="image-container">
            <img :src="image" alt="PictureTextModule Image" />
        </div>
        <div class="text-container">
            <h2 class="headline" v-html="formattedHeadline"></h2>
            <p class="intro" v-html="intro"></p>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        uuid: string
        type: string
        image: string
        headline: string
        intro: string
    }>()

    const formattedHeadline = computed(() =>
        props.headline.replace(/\.\s*/g, '.<br />')
    )

    const intro = props.intro
</script>

<style scoped>
    .picture-text-module {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 3rem;
        padding: 3rem 4rem;
        background-color: #ffffff;
        max-width: 1200px;
        margin: 0 auto;
    }

    /* Desktop Image */
    .image-container img {
        width: 100%;
        height: auto;
        object-fit: cover;
        display: block;
    }

    .text-container {
        text-align: center;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 90%;
        margin: 0 auto;
    }

    .headline {
        font-size: 4rem;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        line-height: 1.1;
        color: #000;
        margin-bottom: 1.5rem;
    }

    .intro {
        font-size: 1.125rem;
        color: #444;
        line-height: 1.8;
        font-family: 'Poppins', sans-serif;
        margin: 0 auto;
    }

    /* ✅ Mobile (Figma match) */
    @media (max-width: 768px) {
        .picture-text-module {
            grid-template-columns: 1fr;
            padding: 0;
            max-width: 320px;
            margin: 0 auto;
        }

        .image-container img {
            width: 100%;
            height: 297px;
            object-fit: cover;
        }

        .text-container {
            background-color: #ffffff;
            padding: 2rem 1.25rem;
            max-width: 320px;
            margin: 0 auto;
            text-align: center;
        }

        .headline {
            font-size: 1.9rem;
            font-weight: 500;
            line-height: 2.4rem;
            margin-bottom: 1rem;
        }

        .intro {
            font-size: 0.95rem;
            line-height: 1.6;
        }
    }
</style>
