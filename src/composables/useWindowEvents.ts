import { ref, onMounted, onUnmounted } from 'vue'

function debounce(fn: Function, delay = 250) {
    let timer: number
    return (...args: any[]) => {
        clearTimeout(timer)
        timer = window.setTimeout(() => fn(...args), delay)
    }
}

export const useWindowEvents = () => {
    const scrollY = ref(window.scrollY)
    const windowWidth = ref(window.innerWidth)
    const windowHeight = ref(window.innerHeight)
    const resized = ref(0) 

    const handleScroll = debounce(() => {
        scrollY.value = window.scrollY
    }, 250)

    const handleResize = debounce(() => {
        resized.value = Date.now()
        windowWidth.value = window.innerWidth
        windowHeight.value = window.innerHeight
    }, 250)

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
    })

    return {
        scrollY,
        windowWidth,
        windowHeight,
        resized,
    }
}
