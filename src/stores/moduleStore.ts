import { defineStore } from 'pinia'
import type { TextModule, PictureModule } from '../types'

type ModuleType = TextModule | PictureModule

export const useModuleStore = defineStore('moduleStore', {
    state: () => ({
        modules: [] as ModuleType[],
    }),

    actions: {
        async loadModules() {
            try {
                const response = await fetch('/data/modules.json') // ✅ Correct path
                this.modules = await response.json()
            } catch (error) {
                console.error('Failed to load modules.json:', error)
            }
        },
    },
})
