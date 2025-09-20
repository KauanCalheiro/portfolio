<script setup lang="ts">
import type { GalleryPhoto } from '../image/gallery.vue';

interface AboutSectionProps {
    title: string;
    content: string;
    photos?: GalleryPhoto[];
}

const {
    title,
    content,
    photos = []
} = defineProps<AboutSectionProps>()
</script>

<template>
    <div class="space-y-4">
        <AppSubtitle>
            {{ title }}
        </AppSubtitle>
        <AppDescription class="text-justify">
            {{ content }}
        </AppDescription>
    </div>
</template>