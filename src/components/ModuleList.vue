<script setup lang="ts">
    import { ref, onMounted, defineAsyncComponent } from 'vue'
    import type { TextModule as TText, PictureModule as TPicture } from '../types'

    import TextModule from './TextModule.vue'
    import PictureModule from './PictureModule.vue'

    const modules = ref<(TText | TPicture)[]>([])

    // Component map for dynamic usage
    const componentMap = {
        TextModule,
        PictureModule,
    }

    onMounted(async () => {
        const response = await fetch('/src/data/modules.json')
        modules.value = await response.json()
    })
</script>

<template>
    <div>
        <div v-for="(mod, index) in modules" :key="mod.uuid || index">
            <component :is="componentMap[mod.type]"
                       v-bind="mod" />
        </div>
    </div>
</template>
