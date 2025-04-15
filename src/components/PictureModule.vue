<script setup lang="ts">
    import { computed } from 'vue'

    // Accept typed props from the JSON module
    const props = defineProps<{ data: import('../types').PictureModule }>()

    // Dynamically import all images from the assets/Images folder
    const images = import.meta.glob('../assets/Images/*', {
        eager: true,
        import: 'default',
    })

    // Resolve the actual image path based on the file name in JSON
    const resolvedImage = computed(() => {
        const fileName = props.data.picture
        const path = `../assets/Images/${fileName}`
        return images[path] || ''
    })
</script>

<template>
    <div class="grid-container">
        <!-- Text Column -->
        <div class="text-column">
            <h2>{{ data.headline }}</h2>
            <h3>{{ data.subline }}</h3>
            <p>{{ data.intro }}</p>
        </div>

        <!-- Image Column -->
        <div class="image-column">
            <img :src="resolvedImage" :alt="data.alt" />
        </div>
    </div>
</template>

<style lang="less" scoped>
    .grid-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        align-items: center;

        @media (min-width: 768px) {
            & {
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    .image-column img {
        width: 100%;
        max-width: 300px;
        height: auto;
        border-radius: 8px;
        display: block;
        margin: 0 auto;
    }
</style>
