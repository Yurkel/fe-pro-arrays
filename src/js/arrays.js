/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 Это используется для удобного быстрого перебора массива, она ничего не возвращает, просто обрабатывает коллбеком каждый элемент массива,
  фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
}

// function forEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     callback(array[index], index, array);
//   }
// }

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который получается в результате вычисления callback для каждого элемента.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function map(array, callback) {
  const mapedArray = [];
  for (let index = 0; index < array.length; index++) {
    mapedArray.push(callback(array[index], index, array));
  }
  return mapedArray;
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ НОВЫЙ массив, который включает в себя элементы только те, для которых callback вернул true.
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function filter(array, callback) {
  const filtredArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = callback(array[index], index, array);
    if (element) {
      filtredArray.push(array[index]);
    }
  }
  return filtredArray;
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива, 3 аргумент изначальный вариант
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 Это используется для удобного быстрого перебора массива. Функция должна результат.
 Функция возвращает результат вычислений. В callback передаем 4 аргумента.
 Первый это предыдущий элемент(для первой итерации как раз используется initialValue), второй это текущий элемент перебора, 3 индекс и 4 сам массив.
 Смотрите на пример в example.js
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function reduce(array, callback, initialValue) {
  let acc = initialValue;

  for (let index = 0; index < array.length; index++) {
    acc = callback(acc, array[index], index, array);
  }
  return acc;
}

// for (let index = 0; index < array.length; index++) {
//   const result = callback(acc, array[index], index, array);
//   acc = result;
// }
// return acc;

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет true, то вся функция возвращает true/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function some(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = callback(array[index], index, array);
    if (element) {
      return true;
    }
  }
  return false;
}

/* Функция принимает в себе первым аргументом массив, вторым функцию которая будет вызываться для каждого элемента массива
 вот документация https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 Это используется для удобного быстрого перебора массива. Функция должна ВЕРНУТЬ true или false. Если хотя бы для одного элемента callback вернет false, то вся функция возвращает false/
 Фишка задания сделать свою реализацию, чтобы понять, как он работает под капотом. Для перебора советую использовать for цикл
 Помните, что вы передаете функцию, которая ожидает 3 аргумента, текущий элемент, индекс и сам массив. Автоматическая проверка будет это учитывать.
*/
function every(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const element = callback(array[index], index, array);
    if (!element) {
      return false;
    }
  }
  return true;
}

// Эту часть не удаляем, она важна для проверки результата
module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
};
