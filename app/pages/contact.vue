<template>
    <div class="py-16 flex flex-col gap-6 md:gap-12">
        <AppTitle class="md:pt-2 mx-auto max-w-2xl text-center">
            {{ $t('contact.title') }}
        </AppTitle>

        <AppSubtitle class="mx-auto max-w-4xl text-center">
            {{ $t('contact.subtitle') }}
        </AppSubtitle>

        <div class="mx-auto w-grid grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6">
            <ContactButtonWhatsapp />
            <ContactButtonLinkedin />
            <ContactButtonMail />
            <ContactButtonInstagram />
        </div>
    </div>
</template>