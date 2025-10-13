<script setup lang="ts">
interface ShareCopyProps {
    link: string
}

const { link } = defineProps<ShareCopyProps>()
</script>

<template>
    <ButtonCopy
        :text="link"
        class="w-full"
    />
</template>