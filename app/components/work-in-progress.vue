<script setup lang="ts">
interface WorkInProgressProps {
    title: string;
}

const { title } = defineProps<WorkInProgressProps>();
</script>

<template>
    <div class="h-dvh md:h-full flex flex-col justify-center items-center px-4 gap-4">
        <AppTitle>{{ title }}</AppTitle>
        <UIcon name="i-lucide-construction" class="text-6xl mb-6" />
        <AppSubtitle>
            {{ $t('workInProgress.title') }}
        </AppSubtitle>
        <AppDescription class="text-center">
            {{ $t('workInProgress.description') }}
        </AppDescription>
    </div>
</template>