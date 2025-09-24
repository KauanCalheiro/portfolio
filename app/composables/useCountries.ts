import type Country from "~/types/Country"

export const useCountries = (): Country[] => {
    return [
        { name: 'English', code: 'en', icon: 'emojione-v1:flag-for-united-states' },
        { name: 'Português (Brasil)', code: 'pt_br', icon: 'emojione-v1:flag-for-brazil' },
        { name: 'Português', code: 'pt', icon: 'emojione-v1:flag-for-portugal' }
    ]
}
