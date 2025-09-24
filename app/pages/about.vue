<script setup lang="ts">
import type { GalleryPhoto } from '~/components/image/gallery.vue';

const userPhotos = ref<GalleryPhoto[]>([
    { src: '/portfolio/photos/2.jpeg', tilt: null },
    { src: '/portfolio/photos/1.jpeg', tilt: 'right' },
])

const { isMobile } = useDevice()

const imgSize = computed(() => isMobile.value ? 20 : 40)
</script>

<template>
    <div class="pt-10 md:pt-12 md:pb-6 md:px-12 flex flex-col gap-6">
        <div class="w-full flex flex-wrap-reverse lg:flex-nowrap gap-6 lg:gap-0 items-center">
            <AppTitle class="mx-auto w-fit text-center lg:text-left">
                {{ $t("about.presentation") }}
            </AppTitle>
            <ImageGallery 
                class="px-8 lg:px-2 w-full lg:w-auto"
                :photos="userPhotos" 
                :size="imgSize" 
            />
        </div>
        <USeparator class="my-6" />
        <div class="space-y-8">
            <AboutSection
                :title="$t('about.start.title')"
                :content="$t('about.start.content')"
                :photos="[
                    { src: '/portfolio/photos/6.jpeg', tilt: 'right' },
                    { src: '/portfolio/photos/7.jpeg', tilt: 'left' },
                ]"
                left
            />
            <USeparator/>
            <AboutSection
                :title="$t('about.education.title')"
                :content="$t('about.education.content')"
                :photos="[
                    { src: '/portfolio/photos/8.jpeg', tilt: 'right' },
                    { src: '/portfolio/photos/10.jpeg', tilt: null },
                    { src: '/portfolio/photos/9.jpeg', tilt: 'left' },
                ]"
            />
            <USeparator/>
            <AboutSection
                :title="$t('about.career.title')"
                :content="$t('about.career.content')"
                :photos="[
                    { src: '/portfolio/photos/11.jpeg', tilt: null },
                    { src: '/portfolio/photos/16.jpeg', tilt: 'right' },
                ]"
                left
            />
            <USeparator/>
            <AboutSection
                :title="$t('about.clients.title')"
                :content="$t('about.clients.content')"
                :photos="[
                    { src: '/portfolio/photos/14.jpeg', tilt: 'right' },
                    { src: '/portfolio/photos/15.jpg', tilt: 'left' },
                ]"
            />
            <USeparator/>
            <AboutSection
                :title="$t('about.beyond.title')"
                :content="$t('about.beyond.content')"
                :photos="[
                    { src: '/portfolio/photos/13.jpeg', tilt: 'right' },
                    { src: '/portfolio/photos/12.jpeg', tilt: null },
                ]"
                left
            />
            <USeparator/>
            <AboutSection
                :title="$t('about.current.title')"
                :content="$t('about.current.content')"
                :photos="[
                    { src: '/portfolio/photos/5.jpeg', tilt: 'left' },
                ]"
            />
        </div>
    </div>
</template>