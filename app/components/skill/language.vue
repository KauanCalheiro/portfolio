<script setup lang="ts">
export interface Language {
    name: string;
    level: string;
    icon_flag: string;
}

interface SkillLanguageProps {
    language: Language;
}

const { language } = defineProps<SkillLanguageProps>();
</script>

<template>
    <UButton
        variant="soft"
        class="h-full p-4 flex flex-col justify-between gap-2 cursor-default"
    >
        <UIcon
            :name="language.icon_flag"
            size="40"
        />
        <span class="text-sm text-center text-highlighted font-semibold">
            {{ $t(language.name) }}
        </span>
        <span class="text-xs text-center text-muted">
            {{ $t(language.level) }}
        </span>
    </UButton>
</template>
