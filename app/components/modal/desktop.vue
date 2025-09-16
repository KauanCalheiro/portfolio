<script setup lang="ts">
import { createReusableTemplate } from "@vueuse/core";
import type { ModalProps } from "./index.vue";

const {
    dismissible,
    closable
} = defineProps<ModalProps>();

const isOpen = defineModel<boolean>("open");

const [DefineTemplate, ReuseTemplate] = createReusableTemplate();
</script>

<template>
    <DefineTemplate>
        <slot />
    </DefineTemplate>

    <UModal
        v-model:open="isOpen"
        :dismissible="dismissible"
        :ui="{
            content: 'min-w-[30dvw] max-w-[90dvw] h-fit md:max-w-[85dvw] lg:min-w-[60dvw] lg:max-w-[75dvw] xl:max-w-[65dvw] 2xl:w-fit',
        }"
    >
        <template
            v-if="closable"
            #body
        >
            <ReuseTemplate />
        </template>

        <template
            v-else
            #content
        >
            <div class="m-8">
                <ReuseTemplate />
            </div>
        </template>
    </UModal>
</template>