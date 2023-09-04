const { Circle, Triangle, Square } = require('./shapes');

describe("Circle", () => {
    test("Test for a circle logo with blue background", () => {
        const shape = new Circle("blue");
        expect(shape.render()).toEqual(`<circle cx="150" cy="150" r="50" fill="blue"/>`);
    });
});

describe("Square ", () => {
    test("Test for a square logo with orange background", () => {
        const shape = new Square("orange");
        expect(shape.render()).toEqual(`<rect width="50" height="50" fill="orange"/>`);
    });
});

describe("Triangle", () => {
    test("Test for a triangle logo with purple background", () => {
        const shape = new Triangle("purple");
        expect(shape.render()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill="purple"/>`);
    });
});

