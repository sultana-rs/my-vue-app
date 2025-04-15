<script setup lang="ts">
    defineProps<{ data: import('../types').TextModule }>();
</script>

<template>
    <div class="grid-container">
        <div class="text-column">
            <h2>{{ data.headline }}</h2>
            <h3>{{ data.subline }}</h3>
            <p>{{ data.intro }}</p>
            <div v-for="(para, i) in data.text" :key="i">
                <p>{{ para }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .grid-container {
        display: grid;
        place-items: center;
        min-height: 30vh;
        padding: 5rem 1rem;
        text-align: center;
    }

    .text-column {
        max-width: 600px;
    }
</style>
