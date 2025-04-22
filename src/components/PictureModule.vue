<script setup lang="ts">
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
        <div class="text-content">
            <h2>{{ headline }}</h2>
            <h3>{{ subline }}</h3>
            <p>{{ intro }}</p>
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
        max-width: @img-max-width;
        margin-bottom: 1rem;
    }

    .text-content {
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

        img{

          margin-bottom: 0;

        }

    .text-content {
        max-width: @text-max-width-desktop;
    }

    }
  }
</style>



