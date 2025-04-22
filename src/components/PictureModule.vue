<script setup lang="ts">
    import TextBlock from './TextBlock.vue'
    // Accept flat props directly from the parent component
    defineProps<{
        picture: string;
        alt: string;
        headline: string;
        subline: string;
        intro: string;
    }>();
</script>

<template>
    <div class="picture-module">
        <img :src="picture" :alt="alt" />
        <!-- Replace static content with TextBlock partial -->
        <TextBlock :headline="headline" :subline="subline" :intro="intro" />
    </div>
</template>

<style scoped lang="less">
    .picture-module {
        .flex-column-center();
        padding: @padding-md;
        img

    {
        .responsive-img();
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
    }

    @media (min-width: 768px) {
        .picture-module {
            .flex-row-center();
            text-align: left;
            img

    {
        margin-bottom: 0;
    }

    .text-block {
        max-width: @text-max-width-desktop;
    }

    }
    }
</style>
