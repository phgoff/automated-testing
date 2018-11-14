const db = require('./db')

absolute = n => {
    if (n > 0) return n
    if (n < 0) return -n
    return 0;
}

greet = name => {
    return `Hello There ${name}!`
}

getGender = () => {
    return ['Male', 'Female', 'N/A']
}

//Object
getPet = (petId) => {
    return {
        id: petId,
        name: 'Oxy',
        age: 2
    }
}

//Exception
registerUser = (username) => {
    if (!username) throw new Error('Username is required')
    return {
        id: new Date().getTime(),
        username: username
    }
}
//Mock Function
applyDiscount = async (order) => {
    const customer = await db.getCustomer(order.customer)

    if (customer.points > 10) {
        order.totalPrice *= 0.9
    }
}

module.exports = {
    absolute,
    greet,
    getGender,
    getPet,
    registerUser,
    applyDiscount
}