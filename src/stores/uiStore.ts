import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        scrollY: 0,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    }),
    actions: {
        setScrollY(y: number) {
            this.scrollY = y
        },
        setWindowSize(width: number, height: number) {
            this.windowWidth = width
            this.windowHeight = height
        }
    }
})
