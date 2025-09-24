export default defineNuxtPlugin(() => {
    let alreadyPreloaded = false

    if (alreadyPreloaded) return

    alreadyPreloaded = true

    const assetPaths = [
        'public/photos/1.jpeg',
        'public/photos/2.jpeg',
        'public/photos/3.jpeg',
        'public/photos/4.jpeg',
        'public/photos/5.jpeg',
        'public/photos/6.jpeg',
        'public/photos/7.jpeg',
        'public/photos/8.jpeg',
        'public/photos/9.jpeg',
        'public/photos/10.jpeg',
        'public/photos/11.jpeg',
        'public/photos/12.jpeg',
        'public/photos/13.jpeg',
        'public/photos/14.jpeg',
        'public/photos/15.jpg',
        'public/photos/16.jpeg',
    ]

    assetPaths.forEach(path => {
        const img = new Image()
        img.src = path
    })
})
