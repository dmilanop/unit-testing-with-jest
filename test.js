const {sum, fromDollarToYen, fromYenToPound} = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23)
});

test("One euro should be 1.206 dollars", function(){

    const {fromEuroToDollar}  = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
});

test("One euro should be 127.9 japan yen", () =>{
    let result = fromDollarToYen(4.2);

    expect(result).toBe(537.1800000000001)
});

test("One euro should be 0.8 british pound", () =>{
    let value = fromYenToPound(537.18)

    expect(value).toBe(429.74399999999997)
})
