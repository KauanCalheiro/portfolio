<script setup lang="ts">
import type Certificate from '~/types/Certificate';

interface CertificateProps {
    certificate: Certificate;
}

const {
    certificate
} = defineProps<CertificateProps>();

const { locale } = useI18n();
</script>

<template>
    <UButton
        variant="soft"
        size="xl"
        :to="certificate.link"
        target="_blank"
        trailing-icon="mdi:open-in-new"
    >
        <div class="w-full flex items-center gap-2">
            <img
                class="w-10 h-10 rounded-md"
                :src="certificate.img"
                :alt="certificate.name[locale]"
            >
            <AppDescription>
                {{ certificate.name[locale] }}
            </AppDescription>
        </div>
    </UButton>
</template>