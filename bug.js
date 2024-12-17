function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect handling of 0
  }
  return a / b; 
}