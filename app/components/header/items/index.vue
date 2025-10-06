<script setup lang="ts">
import { HeaderItemsDesktop, HeaderItemsMobile } from '#components';

const { isLargeDesktop } = useDevice()

const items = ref([
    {
        label: computed(() => $t('header.home')),
        icon: 'mdi:home',
        to: '/'
    },
    {
        label: computed(() => $t('header.about')),
        icon: 'mdi:information',
        to: '/about'
    },
    {
        label: computed(() => $t('header.timeline')),
        icon: 'mdi:timeline',
        to: '/timeline'
    },
    {
        label: computed(() => $t('header.skills')),
        icon: 'mdi:school',
        to: '/skills'
    },
    {
        label: computed(() => $t('header.certificates')),
        icon: 'mdi:certificate',
        to: '/certificates'
    },
    {
        label: computed(() => $t('header.projects')),
        icon: 'mdi:briefcase',
        to: '/projects'
    },
    {
        label: computed(() => $t('header.contact')),
        icon: 'mdi:contacts',
        to: '/contact'
    },
])

const HeaderItemsFacade = computed(() => {
    return isLargeDesktop.value
        ? HeaderItemsDesktop
        : HeaderItemsMobile
})
</script>

<template>
    <HeaderItemsFacade :items="items" />
</template>