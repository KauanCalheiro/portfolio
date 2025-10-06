<script setup lang="ts">
export interface SoftSkill {
    title: string;
    icon: string;
    color?: string;
}

interface SkillSoftProps {
    softSkill: SoftSkill;
}

const { softSkill } = defineProps<SkillSoftProps>();
</script>

<template>
    <UButton
        variant="soft"
        class="h-full p-4 flex flex-col justify-between gap-3 cursor-default"
    >
        <UIcon :name="softSkill.icon" size="40" :class="softSkill.color" />
        <span class="text-sm text-center font-medium">{{ $t(softSkill.title) }}</span>
    </UButton>
</template>
