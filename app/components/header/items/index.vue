<script setup lang="ts">
import { HeaderItemsDesktop, HeaderItemsMobile } from '#components';

const { isMobile } = useDevice()

const items = ref([
    {
        label: computed( () => $t('header.home')),
        icon: 'mdi:home',
        to: '/'
    },
    {
        label: computed( () => $t('header.about')),
        icon: 'mdi:information',
        to: '/about'
    },
    {
        label: computed( () => $t('header.projects')),
        icon: 'mdi:briefcase',
        to: '/projects'
    },
    {
        label: computed( () => $t('header.contact')),
        icon: 'mdi:contacts',
        to: '/contact'
    },
    {
        label: computed( () => $t('header.certificates')),
        icon: 'mdi:certificate',
        to: '/certificates'
    }
])

const HeaderItemsFacade = computed(() => {
    return isMobile.value
        ? HeaderItemsMobile
        : HeaderItemsDesktop
})
</script>

<template>
    <HeaderItemsFacade :items="items" />
</template>