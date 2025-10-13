<script setup lang="ts">
interface ShareQrCodeProps {
    link: string
}

const { link } = defineProps<ShareQrCodeProps>()
</script>

<template>
    <Qrcode
        :value="link"
        class="mx-auto"
    />
</template>