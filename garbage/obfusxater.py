from clipboard import copy
from random	import randint
while True:
	while True:
		try:
			density	= int(input("density:\n> "))
			if density > 5: print("Density must not be greater than 5.")
			elif density < 0: print("Density must not be less than 0.")
			else: break
		except ValueError:
			print("Please enter	a number")
	string = input("text to obfuscate:\n> ")




	hiders = "̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ҃҄҅҆҇͘͜͟͢͝͞͠͡҈҉᷂᷊᷿᷀᷁᷃᷄᷅᷆᷇᷈᷉᷾⃰︠︡︢︣︣"


	index =	0
	nost = 0
	output = ""
	while index	< len(string):
		if density < nost:
			output += string[index]
			index += 1
			nost = 0
		else:
			output += hiders[randint(0,	len(hiders)	- 1)]
			nost += 1

	print(output)
	copy(output)
	print("Copied to clipboard.")

	while True:
		again = input("[ENTER] to exit, [SPACE] to obfuscate again")
		if again == '' or again == ' ':
			break
	if again =='':
		break