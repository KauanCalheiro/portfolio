<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import { usePhoneNumber } from '~/composables/usePhoneNumber';
import { type WhatsappSchema, whatsappSchema } from '~/schemas/whatsapp';

const schema = whatsappSchema;
const state = reactive<WhatsappSchema>({} as WhatsappSchema);

state.phone = usePhoneNumber();
state.message = $t('whatsapp.form.message.default');

const redirectToWhatsapp = (link: string) => {
    window.open(link, '_blank');
};

const onSubmit = (event: FormSubmitEvent<WhatsappSchema>) => {
    console.log('Form submitted:', event.data);

    const whatsappLink = useWhatsappMessage(
        event.data.phone,
        event.data.message,
    );

    redirectToWhatsapp(whatsappLink);
}
</script>

<template>
    <UForm
        class="flex flex-col gap-8"
        :schema="schema"
        :state="state"
        @submit="onSubmit"
    >
        <div class="w-full">
            <UInput
                v-model="state.phone"
                class="hidden"
            />

            <UFormField
                :label="$t('whatsapp.form.message.label')"
                name="message"
            >
                <UTextarea
                    v-model="state.message"
                    class="w-full"
                    :placeholder="$t('whatsapp.form.message.placeholder')"
                    variant="soft"
                    autoresize
                />
            </UFormField>
        </div>
        <UButton
            class="w-full flex justify-center"
            size="lg"
            icon="mdi:send"
            trailing
            color="success"
            :label="$t('whatsapp.form.submit')"
            type="submit"
        />
    </UForm>
</template>