## 1 ¿Qué es el testing?
El testing es una técnica de verificación y validación de software que consiste en la ejecución de un programa con el objetivo de encontrar errores. 

## 2. Tipos de testing
- Pruebas unitarias: Se prueba cada unidad de código por separado, Son pruebas para funciones específicas. Consisten en probar métodos y funciones individuales de las clases, componentes o módulos que usa tu software. Son pequeños tests que validan el comportamiento de un objeto y la lógica. Se utiliza mucho jest.
- Pruebas de integración: Verifican que los distintos módulos o servicios utilizados por tu aplicación funcionan bien en conjunto21. Por ejemplo, se puede probar la interacción con la base de datos o asegurarse de que los microservicios funcionan bien en conjunto y según lo esperado2.. Se utiliza mucho jest.
- End to End (E2E): Se prueba la aplicación completa, desde el inicio hasta el final, como si fuera un usuario real. Se utiliza mucho cypress.
- Estático: Se prueba el código sin ejecutarlo. Se utiliza mucho eslint.

## 3. Herramientas de testing
- Jest: Framework de testing para JavaScript. Se utiliza para testing unitario e integración.
- react testing library: Librería para testing de componentes de React.
- Cypress: Framework de testing para JavaScript. Se utiliza para testing end to end.
- Eslint: Herramienta de testing estático para JavaScript.

## 4. ¿Por qué testear?
- Para asegurarnos de que el código funciona como esperamos.
- Para asegurarnos de que el código sigue funcionando como esperamos cuando lo modificamos.

## 5. ¿Cuándo testear?
- Antes de subir el código a producción.
- Antes de hacer un merge a la rama master.
- Antes de hacer un pull request.

## 7. Definiciones adicionales
- Caja negra: Se prueba el código sin conocer su implementación.
- Caja blanca: Se prueba el código conociendo su implementación.
- Prueba funcional: Se prueba el código desde el punto de vista del usuario.
- Prueba no funcional: Se prueba el código desde el punto de vista del desarrollador.
- Test driven development (TDD): Es una técnica de desarrollo de software que consiste en escribir primero los tests y luego el código.
- Test: Es un código que verifica que otro código funciona como esperamos.
- Test suite: Conjunto de tests.
- Test runner: Herramienta que ejecuta los tests.
- Test case: Conjunto de tests que verifican el comportamiento de una funcionalidad.
- Test fixture: Conjunto de datos de prueba.
- Test coverage: Porcentaje de código que es testeado.
- Test double: Objeto que se utiliza en lugar de otro objeto real para facilitar el testing.
- Mock: Objeto que se utiliza en lugar de otro objeto real para facilitar el testing.
- Stub: Objeto que se utiliza en lugar de otro objeto real para facilitar el testing.
- Spy: Objeto que se utiliza en lugar de otro objeto real para facilitar el testing.

## 8. Metodologías de testing
- Test driven development (TDD): Es una técnica de desarrollo de software que consiste en escribir primero los tests y luego el código.
- Behavior driven development (BDD): Es una técnica de desarrollo de software que consiste en escribir primero los tests y luego el código. Es similar a TDD pero se enfoca en el comportamiento del software.
- Test pyramid: Es una técnica de testing que consiste en tener más tests unitarios que tests de integración y más tests de integración que tests end to end.

## 9. Ejemplo de test
```js
// src/utils.js
export const sum = (a, b) => a + b;

// src/utils.test.js
import { sum } from './utils';

describe('utils', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      const result = sum(1, 2);
      expect(result).toBe(3);
    });
  });
});
```
