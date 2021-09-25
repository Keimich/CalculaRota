const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const saveData = async (data) => {

    if (data !== undefined) {

        await prisma.cities.create({
            data: data
        });
    }
}

saveData()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

module.exports = saveData