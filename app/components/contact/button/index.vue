<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

interface ContactButtonProps {
    icon: string;
    color: ButtonProps['color'];
    link?: boolean;
}

const {
    icon,
    color,
    link = false
} = defineProps<ContactButtonProps>();

const modalOpen = ref(false);

const toggleModal = () => {
    modalOpen.value = !modalOpen.value;
};
</script>

<template>
    <UButton
        :color="color"
        class="size-20 flex items-center justify-center"
        @click="toggleModal"
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
    >
        <slot />
    </Modal>
</template>