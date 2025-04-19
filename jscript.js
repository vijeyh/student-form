var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("even");
for (count = 0; count < 10; count++) {
  if (a[count] % 2 == 0) {
    console.log(a[count]);
  }
}
console.log("odd");
for (count = 0; count < 10; count++) {
  if (a[count] % 2 == 1) {
    console.log(a[count]);
  }
}
