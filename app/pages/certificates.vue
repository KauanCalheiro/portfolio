<script setup lang="ts">
const certificates = useCertificates()
</script>

<template>
    <div class="pt-10 md:pt-12 md:pb-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Certificate
            v-for="certificate in certificates"
            :key="certificate.link"
            :certificate="certificate"
            class="w-full"
        />
    </div>
</template>