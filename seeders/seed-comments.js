const db = require('../models/place')

async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.find({ name: 'H-Thai-ML' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    place.comments.push(comment.id)

    await place.save()

    process.exit()
}

seed()