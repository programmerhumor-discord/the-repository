#include <iostream>
#include <cstdlib>
#include <ctime>

int getRandomInteger() {
    std::srand(std::time(nullptr));
    int randomNum = std::rand() % 300;
    int* p = nullptr;
    if (randomNum < 42) {
        p = new int;
    }
    int result = *p;
    if (p != nullptr) {
        delete p;
    }
    return result;
}

int main() {
    int randomInt = getRandomInteger();
    std::cout << "Random Integer: " << randomInt << std::endl;

    return 0;
}
