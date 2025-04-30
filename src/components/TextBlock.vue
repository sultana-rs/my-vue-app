<template>
    <div class="text-block">
        <h2>{{ data.headline }}</h2>
        <h3>{{ data.subline }}</h3>
        <p>{{ data.intro }}</p>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        data: {
            headline: string;
            subline: string;
            intro: string;
        };
    }>();
</script>

<style scoped>
    .text-block {
        margin-top: 1rem;
    }
</style>
