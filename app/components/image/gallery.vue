<script setup lang="ts">

export interface GalleryPhoto {
    src: string;
    tilt: 'left' | 'right' | null;
}

interface ImageGalleryProps {
    photos: GalleryPhoto[];
    size?: number;
}

const { photos, size = 40 } = defineProps<ImageGalleryProps>()

const imageCardSize = ref(size);
</script>

<template>
    <div class="flex flex-nowrap -space-x-4 md:-space-x-8 justify-center">
        <ImageCard
            v-for="photo in photos"
            :key="photo.src"
            :size="imageCardSize"
            :src="photo.src"
            :left="photo.tilt === 'left'"
            :right="photo.tilt === 'right'"
        />
    </div>
</template>