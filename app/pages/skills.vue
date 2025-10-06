<script setup lang="ts">
const technologies = ref<string[]>(useTechnologies())
const softSkills = ref(useSoftSkills())
const languages = ref(useLanguages())
</script>

<template>
    <div class="pt-10 md:pt-12 md:pb-6 md:px-12 flex flex-col gap-6">
        <AppTitle class="w-full text-center">
            {{ $t("skills.title") }}
        </AppTitle>

        <div class="flex flex-col gap-4">
            <AppSubtitle class="w-full text-center md:text-left">
                {{ $t("skills.items.technology.title") }}
            </AppSubtitle>
            <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
                <SkillTechnology
                    v-for="icon in technologies"
                    :key="icon"
                    :icon="icon"
                />
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <AppSubtitle class="w-full text-center md:text-left">
                {{ $t("skills.items.soft-skill.title") }}
            </AppSubtitle>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <SkillSoft
                    v-for="skill in softSkills"
                    :key="skill.title"
                    :soft-skill="skill"
                />
            </div>
        </div>

        <div class="flex flex-col gap-4">
            <AppSubtitle class="w-full text-center md:text-left">
                {{ $t("skills.items.language.title") }}
            </AppSubtitle>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <SkillLanguage
                    v-for="language in languages"
                    :key="language.name"
                    :language="language"
                />
            </div>
        </div>
    </div>
</template>