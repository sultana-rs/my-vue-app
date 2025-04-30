<script setup lang="ts">
    import { computed, onMounted } from 'vue'
    import { useModuleStore } from '@/stores/moduleStore'
    import type { ModuleType } from '@/types'

    const store = useModuleStore()
    const modules = computed<ModuleType[]>(() => store.modules)

    onMounted(() => {
        store.loadModules()
    })
</script>

<template>
    <div>
        <div v-for="(mod, index) in modules" :key="mod.uuid || index">
            <component v-if="mod?.type && typeof mod.type === 'string'"
                       :is="mod.type"
                       :key="mod.uuid || index"
                       v-bind="mod" />
        </div>
    </div>
</template>