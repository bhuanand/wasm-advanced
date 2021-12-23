#include <cstdlib>
#include <ctime>
#include <ctime>
#include <cstdint>

#include <algorithm>
#include <chrono>
#include <vector>
#include <iostream>

using namespace std;

static const int32_t MAX_ELEMENTS = 1000000;
static const int32_t MAX_VALUE = 10000000;

int main() {
  srand(time(NULL));

  auto startTime = chrono::high_resolution_clock::now();
  vector<int32_t> array(MAX_ELEMENTS);
  for (int32_t at = 0; at < MAX_ELEMENTS; ++at) {
    array[at] = rand() % MAX_VALUE;
  }
  auto endTime = chrono::high_resolution_clock::now();
  auto duration = chrono::duration_cast<chrono::milliseconds>(endTime - startTime).count();
  cout << "Array generated in " << duration << " ms" << endl;

  startTime = chrono::high_resolution_clock::now();
  sort(array.begin(), array.end());
  endTime = chrono::high_resolution_clock::now();
  duration = chrono::duration_cast<chrono::milliseconds>(endTime - startTime).count();
  cout << "Array sorted in " << duration << " ms" << endl;

  return 0;
}