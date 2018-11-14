const libs = require('../../src/libs')
const db = require('../../src/db')
test('This test is gonna work', () => {

})
// test('absolute = should return a positive number if input is positive', () => {
//     // Arrange
//     const input = 1
//     // Action
//     const result = libs.absolute(input)
//     //Assert
//     expect(result).toBe(input)
// })

// Group Test -describe, it 
// describe('absolute', () => {
//     it('should return a positive number if input is positive', () => {

//         const input = 1 //Arrange
//         const result = libs.absolute(input) //Action
//         expect(result).toBe(input) //Assert
//     })
//     it('should return a positive number if input is negative', () => {

//         const input = -1
//         const result = libs.absolute(input)
//         expect(result).toBe(1)
//     })
//     it('should return zero number if input is zero', () => {

//         const input = 0
//         const result = libs.absolute(input)
//         expect(result).toBe(input)
//     })
// })

// Group test String
// describe('greet', () => {
//     it('Should return the greeting message', () => {
//         const name = 'Gof'
//         const result = libs.greet(name)
//         expect(result).toMatch(/Gof/)
//         expect(result).toContain('Gof')
//     })
// })

//Array
// describe('getGender', () => {
//     it('Should return all genders', () => {
//         const result = libs.getGender()
//         expect(result).toBeDefined()
//         expect(result).not.toBeNull()
//         expect(result).toContain('Male')
//         expect(result).toEqual(expect.arrayContaining(['Female', 'Male', 'N/A']))
//     })
// })

//Object
// describe('getPet', () => {
//     it('Should return pet with the given ID', () => {
//         const petId = 1
//         const result = libs.getPet(petId)
//         expect(result).toMatchObject({
//             id: petId,
//             name: 'Oxy'
//         })
//         expect(result).toHaveProperty('id')
//     })
// })

describe('registerUser', () => {
    it('Should throw if username is falsy', () => {
        const args = [null, undefined, NaN, '', 0, false]
        args.forEach(a => {
            expect(() => {
                libs.registerUser(a)
            }).toThrow()
        })
    })

    it('Should return a use object if valid username is passed', () => {
        const username = 'Gof'
        const result = libs.registerUser(username)
        expect(result).toMatchObject({
            username: username
        })
        expect(result.id).toBeGreaterThan(0)
    })
})

//Mock Fn
describe('applyDiscount', () => {
    it('Should apply 10% discount if customer has more than 10 points', async () => {
        db.getCustomer = jest.fn()
        db.getCustomer.mockResolvedValue({
            id: 1,
            points: 20
        })
        const order = {
            customerId: 1,
            totalPrice: 10
        }
        await libs.applyDiscount(order)
        expect(order.totalPrice).toBe(9)


    })
})