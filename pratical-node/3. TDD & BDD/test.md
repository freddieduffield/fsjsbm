# TDD & BDD for Node.js with Mocha & Chai

Node has a core `assert` module, but probably better to use a testing framework in most cases. 

## chai assert

* assert(expressions, message): Throws an error if the expression is false

* assert.fail(actual, expected, [message], [operator]):

Throws an error with values of actual, expected, and operator

* assert.ok(object, [message]): Throws an error when the object is not double equal (==) to true—a.k.a., truthy (0, and an empty string is false in JavaScript/Node.js)

* assert.notOk(object, [message]): Throws an error when the object is falsy, i.e., false, 0 (zero), “ ” (empty string), null, undefined, or NaN

* assert.equal(actual, expected, [message]): Throws an error when actual is not double equal (==) to expected

* assert.notEqual(actual, expected, [message]): Throws an error when actual is double equal (==)—in other words, not unequal (!=)—to expected

.strictEqual(actual, expected, [message]): Throws an error when objects are not triple equal (===)