function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null or undefined values
  }

  return a + b; // Perform addition
}
//or
function foo(a, b) {
  a = a ?? 0; //Nullish coalescing operator
  b = b ?? 0; //Nullish coalescing operator
  return a + b;
}