<script setup lang="ts">
import { TimelineDesktop, TimelineMobile } from '#components';
import type { TimelineItem } from '@nuxt/ui';

export interface TimelineProps {
    items: TimelineItem[];
}

type SimpleTimelineProps = Pick<TimelineItem, 'title' | 'description' | 'date'>;

const items = ref<SimpleTimelineProps[]>(useTimeline());

const computedItems = computed<SimpleTimelineProps[]>(() =>
    items.value.map((item: SimpleTimelineProps) => ({
        ...item,
        title: $t(item.title!),
        description: $t(item.description!),
        date: $t(item.date!),
    }))
);

const { isMobile } = useDevice();

const TimelineFacade = computed(() =>
    isMobile.value
        ? TimelineMobile
        : TimelineDesktop
);
</script>

<template>
    <TimelineFacade :items="computedItems" />
</template>