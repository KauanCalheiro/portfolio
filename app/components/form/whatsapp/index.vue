<script setup lang="ts">
import { type WhatsappSchema, whatsappSchema } from '~/schemas/whatsapp';

const schema = whatsappSchema;
const state = reactive<WhatsappSchema>({
    phone: usePhoneNumber(),
    message: $t('whatsapp.form.message.default')
} as WhatsappSchema);

const { isMobile } = useDevice();

const qrCode = ref<string | null>(null);

const onSend = () => {
    const whatsappLink = useWhatsappMessage(
        state.phone,
        state.message,
    );

    useRedirect(whatsappLink, true);
}

const onQrCode = () => {
    qrCode.value = useWhatsappMessage(
        state.phone,
        state.message,
    );
}
</script>

<template>
    <TransitionFade>
        <UForm
            v-if="!qrCode"
            ref="form"
            class="flex flex-col gap-8"
            :schema="schema"
            :state="state"
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
            <div class="w-full flex gap-4">
                <UButton
                    class="w-full flex justify-center"
                    size="lg"
                    icon="mdi:send"
                    trailing
                    color="success"
                    :label="$t('whatsapp.form.submit')"
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
                    :label="$t('whatsapp.form.qrCode')"
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