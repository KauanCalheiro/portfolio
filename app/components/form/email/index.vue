<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui';
import { type EmailSchema, emailSchema } from '~/schemas/email';

const schema = emailSchema;
const state = reactive<EmailSchema>({} as EmailSchema);

state.to = useEmailAddress();
state.subject = $t('email.form.subject.default');
state.message = $t('email.form.message.default');

const redirectToMailable = (link: string) => {
    window.open(link, '_blank');
};

const onSubmit = (event: FormSubmitEvent<EmailSchema>) => {
    const emailLink = useEmailMessage(
        event.data.to,
        event.data.subject,
        event.data.message,
    );

    redirectToMailable(emailLink);
}
</script>

<template>
    <UForm
        class="flex flex-col gap-8"
        :schema="schema"
        :state="state"
        @submit="onSubmit"
    >
        <div class="w-full space-y-4">
            <UInput
                v-model="state.to"
                class="hidden"
            />

            <UFormField
                :label="$t('email.form.subject.label')"
                name="subject"
            >
                <UInput
                    v-model="state.subject"
                    class="w-full"
                    :placeholder="$t('email.form.subject.placeholder')"
                    variant="soft"
                />
            </UFormField>

            <UFormField
                :label="$t('email.form.message.label')"
                name="message"
            >
                <UTextarea
                    v-model="state.message"
                    class="w-full"
                    :placeholder="$t('email.form.message.placeholder')"
                    variant="soft"
                    autoresize
                />
            </UFormField>
        </div>
        <UButton
            class="w-full flex justify-center"
            size="lg"
            icon="mdi:email-fast"
            trailing
            color="warning"
            :label="$t('email.form.submit')"
            type="submit"
        />
    </UForm>
</template>