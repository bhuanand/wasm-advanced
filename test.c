#include <stdio.h>

int main() {
  return 0;
}

int add(int a, int b) {
  return a + b;
}

int fibonacci(int n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}