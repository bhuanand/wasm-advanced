#include <emscripten.h>
#include <stdint.h>

void EMSCRIPTEN_KEEPALIVE reverse(int32_t* arr, int32_t size) {
    for (int32_t at = 0; at < size/2; ++at) {
        int32_t temp = arr[at];
        arr[at] = arr[size - 1 - at];
        arr[size - 1 - at] = temp;
    }
} 