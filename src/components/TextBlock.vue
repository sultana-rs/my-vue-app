<template>
    <div class="text-block">
        <h2>{{ headline }}</h2>
        <h3>{{ subline }}</h3>
        <p>{{ intro }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  headline: string
  subline: string
  intro: string
}>()
</script>

<style scoped>
    .text-block {
        margin-top: 1rem;
    }
</style>
