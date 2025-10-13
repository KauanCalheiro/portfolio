<script setup lang="ts">
import type { ToasterProps } from '@nuxt/ui';
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()

const toaster = ref<ToasterProps>({
    position: 'bottom-center',
    expand: false,
})
</script>

<template>
  <ClientOnly>
    <UApp
      :toaster="toaster"
      :locale="locales[locale]"
    >
      <div class="bg-default" data-vaul-drawer-wrapper>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </UApp>
  </ClientOnly>
</template>