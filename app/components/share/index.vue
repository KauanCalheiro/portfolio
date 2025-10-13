<script setup lang="ts">
const config = useRuntimeConfig()
const link = ref<string>(`${window.location.origin}${config.app.baseURL}`)
</script>

<template>
    <div class="space-y-2">
        <ShareQrCode :link="link" />
        <ShareCopy :link="link" />
    </div>
</template>