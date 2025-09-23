export default defineNuxtPlugin(() => {
    let alreadyPreloaded = false

    if (alreadyPreloaded) return

    alreadyPreloaded = true

    const certificates = useCertificates()

    certificates.forEach(cert => {
        const img = new Image()
        img.src = cert.img
    })
})
