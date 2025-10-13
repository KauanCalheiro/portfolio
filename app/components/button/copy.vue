<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useToaster } from '~/composables/useToaster';

interface ButtonCopyProps {
    text: string
}

const props = defineProps<ButtonCopyProps>()

const { text } = toRefs(props)

const { copy, copied } = useClipboard()

const icon = computed(() => copied.value ? 'mdi:clipboard-check-multiple-outline': 'mdi:clipboard-multiple-outline')
const color = computed(() => copied.value ? 'success' : 'neutral')

const handleCopy = () => {
    copy(text.value)
    useToaster().success({
        title: '',
        description: $t('common.copied-to-clipboard') as string,
    })
}
</script>

<template>
    <UButton
        :id="copied ? 'copied' : 'not-copied'"
        variant="soft"
        class="py-2 px-4 cursor-copy flex gap-2 justify-between items-center"
        @click="handleCopy"
    >
        <p>
            {{ text }}
        </p>
        <UIcon
            :name="icon"
            :class="`text-${color} p-2 m-1`"
        />
    </UButton>
</template>

