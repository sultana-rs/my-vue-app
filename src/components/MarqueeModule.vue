<template>
    <section class="marquee-module">
        <img :src="image" alt="Marquee Background" class="background-image" />
        <div class="overlay">
            <div class="top-bar">
                <span class="tagline">Freshbite</span>
                <div class="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="headline-wrapper">
                <h1 class="headline" :style="{ transform: `translateX(${offset}px)` }">
                    A Taste of Nature, Delivered.
                </h1>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'

    defineProps<{
        uuid: string
        type: string
        image: string
    }>()

    const offset = ref(0)

    onMounted(() => {
        let pos = 0
        setInterval(() => {
            pos -= 1
            if (pos < -2000) pos = window.innerWidth
            offset.value = pos
        }, 20)
    })
</script>

<style scoped>
    .marquee-module {
        position: relative;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        overflow: hidden;
    }

    /* ✅ Background image full height */
    .background-image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        display: block;
    }

    /* ✅ Overlay layer */
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* ✅ Top bar layout */
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }

    /* ✅ Tagline (top-left) */
    .tagline {
        font-size: 2rem;
        font-weight: 600;
        color: #f26c4f;
        font-family: 'Poppins', sans-serif;
    }

    /* ✅ Menu icon (top-right) */
    .menu-icon {
        display: flex;
        flex-direction: column;
        gap: 6px;
        cursor: pointer;
    }

        .menu-icon span {
            width: 28px;
            height: 3px;
            background-color: #f26c4f;
        }

    /* ✅ Headline marquee animation (bottom) */
    .headline-wrapper {
        position: absolute;
        bottom: 2rem;
        left: 0;
        right: 0;
        overflow: hidden;
        white-space: nowrap;
        padding: 0 2rem;
    }

    .headline {
        font-size: 3.5rem;
        font-weight: 700;
        color: #f26c4f;
        font-family: 'Poppins', sans-serif;
        display: inline-block;
        animation: marquee 15s linear infinite;
        will-change: transform;
    }

    /* ✅ Marquee keyframes */
    @keyframes marquee {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    /* ✅ Mobile styles (768px and below) */
    @media (max-width: 768px) {
        .marquee-module {
            max-width: 320px;
            margin: 0 auto;
        }

        .tagline {
            font-size: 1rem;
        }

        .menu-icon span {
            width: 20px;
            height: 2px;
        }

        .headline {
            font-size: 1.25rem;
        }

        .headline-wrapper {
            bottom: 1rem;
            padding: 0 1rem;
        }
    }
</style>
