<script setup lang="ts">
    import { useWindowEvents } from '@/composables/useWindowEvents'

    defineProps<{
        textBlock: {
            headline: string
            subline: string
            intro: string
        }
        text: string[]
    }>()

    const { scrollY, windowWidth, windowHeight } = useWindowEvents()
</script>

<template>
    <div class="text-module">
        <div class="text-wrapper">
            <!-- ✅ Reusable TextBlock with grouped prop -->
            <TextBlock :data="textBlock" />

            <!-- ✅ Render each paragraph -->
            <div v-for="(para, i) in text" :key="i">
                <p>{{ para }}</p>
            </div>

            <!-- ✅ Debug: Show scroll/resize values (optional) -->
            <div class="debug-info">
                <p>📏 Window: {{ windowWidth }} x {{ windowHeight }}</p>
                <p>📌 Scroll Y: {{ scrollY }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .text-module {
        .grid-center();
        min-height: 30vh;
        padding: @padding-lg;
        text-align: center;
        .text-wrapper

    {
        max-width: @text-max-width;
        h2, h3, p

    {
        color: @text-color;
    }

    .debug-info {
        margin-top: 2rem;
        font-size: 0.875rem;
        color: #999;
    }

    }
    }
</style>

