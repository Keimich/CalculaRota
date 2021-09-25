const {
    PrismaClient
} = require('@prisma/client');
const {
    all
} = require('../router/mainRoute');

const prisma = new PrismaClient()


const saveData = async (data) => {

    if (data !== undefined) {

        await prisma.cities.create({
            data: data
        });
    }
}

const getData = async () => {

    return await prisma.cities.findMany()
}

const removeAllCities = async () => {
    return await prisma.cities.deleteMany()
}

const queries = {
    saveData,
    getData,
    removeAllCities
}

module.exports = queries