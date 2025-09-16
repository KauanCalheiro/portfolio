<template>
    <div class="py-4 flex flex-col gap-6 md:gap-12">
        <AppTitle class="md:pt-2 mx-auto max-w-2xl text-center">
            {{ $t('contact.title') }}
        </AppTitle>

        <AppSubtitle class="mx-auto max-w-4xl text-center">
            {{ $t('contact.subtitle') }}
        </AppSubtitle>

        <div class="w-full flex flex-wrap justify-center gap-6">
            <ContactButtonWhatsapp />
            <ContactButtonLinkedin />
            <ContactButtonMail />
            <ContactButtonInstagram />
            <!-- <UButton class="w-30" label="E-mail" size="xl" />
            <UButton class="w-30" label="Whatsapp" size="xl" />
            <UButton class="w-30" label="Whatsapp" size="xl" />
            <UButton class="w-30" label="Whatsapp" size="xl" /> -->
        </div>
    </div>
</template>