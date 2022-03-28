// 1. Создать массив А размерностью n. Заполнить случайными числами любом диапазоне
console.log('------#1------');

let n = +prompt('Set number for size');

let A = new Array(n);

for(i = 0; i < A.length; i++) {
  A[i] = Math.floor(Math.random()* 500);
}

console.log(A)

// 1.a. проверить все числа на простоту, и найденные простые числа сохранить в массив B

let B = new Array();

for(i = 0; i < A.length; i++) {
  number = A[i];

  if(number < 2) {
    continue;
  }

  isPrime = true;
  for(j = 2; j < number; j++) {
    if(number % j == 0) {
      isPrime = false;
      break;
    }
  }

  if(isPrime) {
    B.push(number);
  }
}

console.log(`${B} - prime number(s)`);

// 1.b. найти максимальное число и минимальное число

let max = A[0];
let min = A[0];

for(i = 0; i < A.length; i++) {
  if(A[i] > max) {
    max = A[i];
  }

  if(A[i] < min) {
    min = A[i];
  }
}

console.log(`${max} - max, ${min} - min`);

// 2. Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться)

console.log('------#2------');

for(i = A.length - 1; i >= 0; i--) {
  A.push(A[i]);
}
A.splice([0], (A.length / 2))

console.log(A, '<- reverse')

// 3. Создать массивы А и В. Заполнить случайными числами. Найди все элементы которые повторяются в массивах А и B

console.log('------#3------');

A = new Array(n);
B = new Array(n);

for(i = 0; i < A.length; i++) {
  A[i] = Math.floor(Math.random()* 500);
  B[i] = Math.floor(Math.random()* 500);
}

for(i = 0; i < A.length; i++) {
  for(j = 0; j < B.length; j++) {
    if(A[i] == B[j]) {
      console.log(`${A[i]} = ${B[j]}`);
    }
  }
}

// 4. В одномерном массиве произвести такую замену: 1 элемент поменять с 2, 3 элемент поменять с 4, 5 элемент поменять с 6 и тд. Если длинна массива непарная - последний элемент не трогать

console.log('------#4------');

console.log(`${A}`);

let cache; // 0


for(i = 0; i < A.length; i += 2) {
  if(A[i + 1] == undefined) {
    break;
  }
  //[a1 , a2]
  cache = A[i]; // [a1]
  A[i] = A[i + 1]; // [a2, a2]
  A[i + 1] = cache; // [a2, a1]
}
console.log(`${A}`);