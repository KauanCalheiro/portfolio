<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

interface ContactButtonProps {
    icon: string;
    color: ButtonProps['color'];
    link?: string;
}

const {
    icon,
    color,
    link = undefined
} = defineProps<ContactButtonProps>();

const modalOpen = ref(false);

const actButton = () => {
    if (link) {
        window.open(link, '_blank');
        return;
    }

    return toggleModal();
};

const toggleModal = () => {
    modalOpen.value = !modalOpen.value;
};
</script>

<template>
    <UButton
        :color="color"
        class="size-20 flex items-center justify-center"
        @click="actButton"
    >
        <UIcon
            :name="icon"
            class="text-4xl"
        />
    </UButton>

    <Modal
        v-if="!link"
        v-model:open="modalOpen"
        closable
        dismissible
    >
        <slot />
    </Modal>
</template>