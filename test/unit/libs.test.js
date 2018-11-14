const libs = require('../../src/libs')

// test('absolute = should return a positive number if input is positive', () => {
//     // Arrange
//     const input = 1
//     // Action
//     const result = libs.absolute(input)
//     //Assert
//     expect(result).toBe(input)
// })

// Group Test
describe('absolute', () => {
    it('should return a positive number if input is positive', () => {

        const input = 1 //Arrange
        const result = libs.absolute(input) //Action
        expect(result).toBe(input) //Assert
    })
    it('should return a positive number if input is negative', () => {

        const input = -1
        const result = libs.absolute(input)
        expect(result).toBe(1)
    })
    it('should return zero number if input is zero', () => {

        const input = 0
        const result = libs.absolute(input)
        expect(result).toBe(input)
    })
})