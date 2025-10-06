<script setup lang="ts">
interface SkillTechnologyProps {
    icon: string;
}

const { icon } = defineProps<SkillTechnologyProps>();
</script>

<template>
    <UButton
        class="flex justify-center items-center p-4 cursor-default"
        variant="soft"
    >
        <UIcon
            :name="icon"
            size="50"
        />
    </UButton>
</template>