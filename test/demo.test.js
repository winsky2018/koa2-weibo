/**
 * @description test demo
 * @author winSky
 */

const sum = (a, b) => a + b


test('10 + 20 should be equals 30', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
})