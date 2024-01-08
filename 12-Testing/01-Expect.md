## 1 - Expect (value)
La función expect se utiliza cada vez que desea testear un valor. Rara vez se utiliza expect por sí mismo. En su lugar, utilizarás expect junto a una función de "comparación" (matcher) para afirmar algo sobre un valor.

Es más fácil entenderlo con este ejemplo. Digamos que tenemos un método mejorSabor() que se supone que devuelve el texto 'grapefruit'. Así es cómo sería el test:
  
  ```js 
  test('El mejor sabor es grapefruit', () => {
    expect(mejorSabor()).toBe('grapefruit');
  });
  ```

## 2 - .not
A veces, el resultado de una prueba es exactamente lo contrario de lo que esperamos. En lugar de escribir una prueba que diga expect(mejorSabor()).not.toBe('grapefruit'), puedes usar el método .not para probar el resultado opuesto.

```js
test('El mejor sabor no es grapefruit', () => {
  expect(mejorSabor()).not.toBe('grapefruit');
});
```

## 3 - .resolves
Cuando se trabaja con promesas, a veces es útil verificar que una promesa se resuelva. Para hacerlo, utiliza el método .resolves. Por ejemplo, si esperas que la promesa se resuelva con el valor 'grapefruit', puedes escribir:

```js
test('La promesa se resuelve con el valor grapefruit', () => {
  expect(mejorSaborPromise()).resolves.toBe('grapefruit');
});
```

## 4 - .rejects
Cuando se trabaja con promesas, a veces es útil verificar que una promesa se rechace. Para hacerlo, utiliza el método .rejects. Por ejemplo, si esperas que la promesa se rechace con el valor 'grapefruit', puedes escribir:

```js
test('La promesa se rechaza con el valor grapefruit', () => {
  expect(mejorSaborPromise()).rejects.toBe('grapefruit');
});
```

## 5 - Matchers
Los matchers son funciones que se utilizan para probar valores. En el ejemplo anterior, usamos el matcher .toBe() para probar que el valor devuelto por mejorSabor() es 'grapefruit'. Jest viene con muchos matchers integrados. Para ver la lista completa, consulta la documentación de expect.

- .toBe(value) compara los valores con ===. Es el matcher más simple y se utiliza para probar valores primitivos como números, cadenas y booleanos.
- .toEqual(value) verifica el valor de un objeto. Utiliza la comparación profunda.
- .toMatch(regexpOrString) verifica si una cadena coincide con una expresión regular o una subcadena.



## Referencias:
- [Jest](https://jestjs.io/docs/en/expect)
