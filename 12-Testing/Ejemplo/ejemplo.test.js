describe('Iniciando pruebas con jest', () => {
    test('should first', () => {  })
    test('should second', () => {  })
});

// Probando strings
describe('Probando strings', () => {
    const mensaje = 'Hola mundo';
    test('should contain a text', () => {
        expect(mensaje).toMatch(/mundo/);
    })
});

// Probando arrays
describe('Probando arrays', () => {
    const carros = ['Ford', 'Nissan', 'Toyota', 'Mazda', 'Honda'];
    test('should contain a car', () => {
        expect(carros).toContain('Mazda');
    })
});

// Probando números
describe('Probando números', () => {
    const value = 10;
    test('should be greater than', () => {
        expect(value).toBeGreaterThan(9);
    })
    test('should be greater than or equal', () => {
        expect(value).toBeGreaterThanOrEqual(10);
    })
    test('should be less than', () => {
        expect(value).toBeLessThan(11);
    })
    test('should be less than or equal', () => {
        expect(value).toBeLessThanOrEqual(10);
    })
});

// Probando booleanos
describe('Probando booleanos', () => {
    const value = true;
    test('should be true', () => {
        expect(value).toBeTruthy();
    })
});