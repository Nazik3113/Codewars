window.addEventListener('DOMContentLoaded', () => {
  // function solution(A) {
  //   const arr = A.sort((a, b) => a - b);
  //   if (arr.length > 1) {
  //     for (let i = 1; i < arr.length; i++) {
  //       if (arr[i] !== arr[i - 1] + 1) {
  //         return 0;
  //       }
  //     }
  //     return 1;
  //   }
  //   return 1;
  // }
  // console.log(solution([9.1, 8.1]));

  // function sum(a) {
  //   return function (b) {
  //     if (b) {
  //       return sum(a+b); // it takes an argument and return a function which again can take an argument.
  //     }
  //     return a; // it will keep on adding 1+2+3+4..
  //   }
  // };
  // console.log(sum(3)(3)(3)(231)());

 navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
   enableHighAccuracy: true,
 })

 function successLocation(position) {
   console.log(position);
 }

 function errorLocation() {
   
 }
});

