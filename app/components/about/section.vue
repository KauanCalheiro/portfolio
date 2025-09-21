<script setup lang="ts">
import type { GalleryPhoto } from '../image/gallery.vue';

interface AboutSectionProps {
    title: string;
    content: string;
    photos?: GalleryPhoto[];
    left?: boolean;
}

const {
    title,
    content,
    photos = [],
    left = false,
} = defineProps<AboutSectionProps>()
</script>

<template>
    <div 
        class="flex flex-col gap-6 lg:gap-8 lg:items-center"
        :class="left ? 'lg:flex-row-reverse' : 'lg:flex-row'"
    >
        <div class="space-y-4">
            <AppSubtitle>
                {{ title }}
            </AppSubtitle>
            <AppDescription class="text-justify">
                {{ content }}
            </AppDescription>
        </div>
        <div>
            <ImageGallery 
                v-if="photos.length"
                :photos="photos" 
            />
        </div>
    </div>
</template>