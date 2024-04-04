import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '6a569436-617d-490f-b53a-087e156effe6',
            title: 'United Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})