<script setup lang="ts">
import { type EmailSchema, emailSchema } from '~/schemas/email';

const schema = emailSchema;
const state = reactive<EmailSchema>({
    to: useEmailAddress(),
    subject: $t('email.form.subject.default'),
    message: $t('email.form.message.default')
} as EmailSchema);

const { isMobile } = useDevice();

const qrCode = ref<string | null>(null);

const onSend = () => {
    const emailLink = useEmailMessage(
        state.to,
        state.subject,
        state.message,
    );

    useRedirect(emailLink, true);
}

const onQrCode = () => {
    qrCode.value = useEmailMessage(
        state.to,
        state.subject,
        state.message,
    );
}
</script>

<template>
    <TransitionFade>
        <UForm
            v-if="!qrCode"
            class="flex flex-col gap-8"
            :schema="schema"
            :state="state"
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
            <div class="w-full flex gap-4">
                <UButton
                    class="w-full flex justify-center"
                    size="lg"
                    icon="mdi:email-fast"
                    trailing
                    color="warning"
                    :label="$t('email.form.submit')"
                    type="button"
                    @click="onSend"
                />

                <UButton
                    v-if="!isMobile"
                    class="w-full flex justify-center"
                    size="lg"
                    icon="mdi:qrcode-scan"
                    trailing
                    color="primary"
                    :label="$t('email.form.qrCode')"
                    type="button"
                    @click="onQrCode"
                />
            </div>
        </UForm>
        <Qrcode
            v-else
            :value="qrCode"
            class="mx-auto"
        />
    </TransitionFade>
</template>