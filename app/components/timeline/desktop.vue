<script setup lang="ts">
import type { TimelineProps } from './index.vue';

const { items } = defineProps<TimelineProps>();
</script>

<template>
    <UTimeline
        :items="items"
        :default-value="items.length"
        :ui="{ item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] even:text-right' }"
        class="translate-x-[calc(50%-1rem)]"
    />
</template>