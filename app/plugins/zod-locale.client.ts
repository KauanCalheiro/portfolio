import { z } from 'zod'

export default defineNuxtPlugin(() => {
    const locales = {
        en: 'en',
        pt: 'pt',
        pt_br: 'pt',
    } as const

    const currentLocale = useCookie<keyof typeof locales>('i18n_redirected', {
        default: () => 'en',
    })

    watchEffect(() => {
        const key = locales[currentLocale.value]
        z.config(z.locales[key]())
    })
})
