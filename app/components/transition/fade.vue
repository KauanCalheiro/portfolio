<script setup lang="ts">
interface TransitionFadeProps {
    mode?: 'in-out' | 'out-in' | 'default'
}

const { mode = 'out-in' } = defineProps<TransitionFadeProps>();
</script>

<template>
    <Transition name="fade" :mode="mode || 'out-in'">
        <slot />
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
