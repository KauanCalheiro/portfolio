<script setup lang="ts">
import type Country from '~/types/Country';

const modelValue = defineModel<Country>()

const countries = useCountries()
</script>

<template>
    <USelectMenu
        v-model:model-value="modelValue"
        :items="countries"
        label-key="icon"
        color="neutral"
        variant="soft"
        :search-input="false"
        :ui="{
            content: 'w-fit'
        }"
    >
        <template #item="{ item }">
            <span class="w-42 flex items-center gap-2 px-2">
                <UIcon :name="item.icon" />
                {{ item.name }}
            </span>
        </template>

        <template #default>
            <UIcon :name="modelValue!.icon" />
        </template>
    </USelectMenu>
</template>

