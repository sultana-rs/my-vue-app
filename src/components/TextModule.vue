<script setup lang="ts">
    // Accept individual props (not wrapped in a `data` object)
    defineProps<{
        headline: string;
        subline: string;
        intro: string;
        text: string[];
    }>();
</script>

<template>
    <div class="text-module">
        <div class="text-wrapper">
            <h2>{{ headline }}</h2>
            <h3>{{ subline }}</h3>
            <p>{{ intro }}</p>
            <div v-for="(para, i) in text" :key="i">
                <p>{{ para }}</p>
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

    }
    }
</style>


