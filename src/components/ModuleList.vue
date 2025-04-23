<script setup lang="ts">
    import { computed, onMounted } from 'vue'
    import { useModuleStore } from '../stores/moduleStore'

    const store = useModuleStore()
    const modules = computed(() => store.modules)

    onMounted(() => {
        store.loadModules()
    })
</script>

<template>
    <div>
        <div v-for="(mod, index) in modules" :key="mod.uuid || index">
            <!-- Using globally registered component directly by its name -->
            <component :is="mod.type" v-bind="mod" />
        </div>
    </div>
</template>

