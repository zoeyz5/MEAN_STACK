const arr1 = [1, 2, 3, 4, 5];

function myFilter(arr, cb) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

const filterRes = myFilter(arr1, (x) => x % 2 === 0);
console.log("filter: " + filterRes);

function myMap(arr, cb) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = cb(arr[i], i, arr);
    res.push(tmp);
  }
  return res;
}

const mapRes = myMap(arr1, (x) => x * 2);
console.log("map: " + mapRes);

function myIncludes(arr, value) {
  for (let a of arr) {
    if (a === value) return true;
  }
  return false;
}

const IncludesRes = myIncludes(arr1, 1);
console.log("includes: " + IncludesRes);

function myIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

const IndexRes = myIndexOf(arr1, 1);
console.log("indexOf: " + IndexRes);

function myReduce(arr, cb, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

const reduceRes = myReduce(arr1, (acc, x) => acc + x, 0);
console.log("myReduce: " + reduceRes);

function mySlice(arr, start, end) {
  let res = [];
  start = start || 0;
  end = end || arr.length;
  for (let i = start; i < end; i++) {
    res.push(arr[i]);
  }
  return res;
}

const sliceRes = mySlice(arr1, 2);
console.log("sliceRes: " + sliceRes);
console.log("arr1 : " + arr1);

function mySplice(arr, start, count, ...items) {
  if (start < 0) {
    start = arr.length + start;
    if (start < 0) {
      start = 0;
    }
  }

  if (count === undefined) {
    count = arr.length - start;
  } else {
    count = Math.min(count, arr.length - start);
  }

  const deleted = [];
  for (let i = 0; i < count; i++) {
    deleted.push(arr[i + start]);
  }

  const resArr = [
    ...arr.slice(0, start),
    ...items,
    ...arr.slice(start + count),
  ];

  arr.length = 0;
  for (let i = 0; i < resArr.length; i++) {
    arr.push(resArr[i]);
  }

  return deleted;
}

const spliceRes = mySplice(arr1, 1, 2, 6, 7, 8);
console.log("spliceRes: " + spliceRes);
console.log("arr1: " + arr1);
