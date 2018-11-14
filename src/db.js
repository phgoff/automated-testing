getCustomer = id => {
    return new Promise((resolve, respone) => {
        console.log('Reading a customer from db');
        setTimeout(() => {
            resolve({
                id: id,
                point: 10
            })
        }, 1000)
    })
}

module.exports = {
    getCustomer
}