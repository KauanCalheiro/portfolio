<script setup lang="ts">
import type { TimelineProps } from './index.vue';

const { items } = defineProps<TimelineProps>();
</script>

<template>
    <UTimeline
        :items="items"
        :default-value="items.length"
    />
</template>