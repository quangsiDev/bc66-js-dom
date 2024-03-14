var a, b, c;

a = 10;
a += a; // a= a+a
console.log("😀 - a", a); // 20

b = ++a + 5; // 21 + 5 => b=26
// a=  21
c = a++ + 5; //21 + 5 = 26 => c=26
// a= 22

console.log("😀 - a", a);

a = 0;
console.log("😀 - b", b);
console.log("😀 - c", c);

// 20 22 26 26
