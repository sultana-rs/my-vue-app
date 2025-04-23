import { defineStore } from 'pinia'
import type { TextModule, PictureModule } from '../types'

type ModuleType = TextModule | PictureModule

export const useModuleStore = defineStore('moduleStore', {
    state: () => ({
        modules: [] as ModuleType[],
    }),

    actions: {
        async loadModules() {
            const response = await fetch('/src/data/modules.json')
            this.modules = await response.json()
        },
    },
})
