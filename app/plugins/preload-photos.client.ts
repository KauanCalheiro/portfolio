export default defineNuxtPlugin(() => {
    let alreadyPreloaded = false

    if (alreadyPreloaded) return

    alreadyPreloaded = true

    const assetPaths = [
        'photos/1.jpeg',
        'photos/2.jpeg',
        'photos/3.jpeg',
        'photos/4.jpeg',
        'photos/5.jpeg',
        'photos/6.jpeg',
        'photos/7.jpeg',
        'photos/8.jpeg',
        'photos/9.jpeg',
        'photos/10.jpeg',
        'photos/11.jpeg',
        'photos/12.jpeg',
        'photos/13.jpeg',
        'photos/14.jpeg',
        'photos/15.jpg',
        'photos/16.jpeg',
    ]

    assetPaths.forEach(path => {
        const img = new Image()
        img.src = path
    })
})
