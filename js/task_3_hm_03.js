const findBestEmployee = function (employees) {
  let result = '';
  let maxValue = 0;
  const keys = Object.keys(employees);

  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      result = key;
    }
  }
  return result;
};

const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));

// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};

console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};

console.log(findBestEmployee(sellers));
// 'lux'

// const findBestEmployee = function (employees) {
//   let result;
//   const value = Object.values(employees);

//   console.log('value: ', value);
//   console.log(' ');

//   const niceWorker = Math.max(...value);
//   console.log('maxValue: ', niceWorker);
//   console.log(' ');

//   for (let i = 0; i < value.length; i += 1) {
//     if (value[i] === niceWorker) {
//       result = Object.keys(employees)[i];
//     }
//   }

//   return `lastValue: ${result}`;
//   console.log(' ');
// };

// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));

// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };

// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };

// console.log(findBestEmployee(sellers));
// // 'lux'
