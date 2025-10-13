<script setup lang="ts">
const open = ref(false);

const toggleModal = () => {
    open.value = !open.value
}
</script>

<template>
    <div>
        <UButton
            variant="soft"
            square
            icon="mdi:share-variant-outline"
            @click="toggleModal"
        />
        <Modal
            v-model:open="open"
            dismissible
        >
            <Share />
        </Modal>
    </div>
</template>