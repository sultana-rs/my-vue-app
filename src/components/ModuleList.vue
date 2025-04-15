<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TextModule from './TextModule.vue';
import PictureModule from './PictureModule.vue';
import type { TextModule as TText, PictureModule as TPicture } from '../types';

const modules = ref<(TText | TPicture)[]>([]);

onMounted(async () => {
  const response = await fetch('/src/data/modules.json');
  modules.value = await response.json();
});
</script>

<template>
    <div>
        <div v-for="(mod, index) in modules" :key="index">
            <TextModule v-if="mod.type === 'text'" :data="mod" />
            <PictureModule v-else-if="mod.type === 'picture'" :data="mod" />
        </div>
    </div>
</template>
