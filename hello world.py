import functools #imports functools

# Define classes for each letter
class H:
    def __str__(self):
        return "H"  # Return the string representation of the letter 'H'

class e:
    def __str__(self):
        return "e"  # Return the string representation of the letter 'e'

class l:
    def __str__(self):
        return "l"  # Return the string representation of the letter 'l'

class o:
    def __str__(self):
        return "o"  # Return the string representation of the letter 'o'

class space:
    def __str__(self):
        return " "  # Return the string representation of a space

class w:
    def __str__(self):
        return "w"  # Return the string representation of the letter 'w'

class r:
    def __str__(self):
        return "r"  # Return the string representation of the letter 'r'

class d:
    def __str__(self):
        return "d"  # Return the string representation of the letter 'd'

class exclamation:
    def __str__(self):
        return "!"  # Return the string representation of an exclamation mark

class Program:
    def __init__(self):
        # Initialize instances of each letter class
                                            self.H = H()  # Create an instance of the letter 'H'
                                        self.e = e()  # Create an instance of the letter 'e'
                                    self.l1 = l()  # Create an instance of the letter 'l'
                            self.l2 = l()  # Create another instance of the letter 'l'
                            self.o = o()  # Create an instance of the letter 'o'
                                self.space = space()  # Create an instance of a space
                                    self.w = w()  # Create an instance of the letter 'w'
                                        self.r = r()  # Create an instance of the letter 'r'
                                            self.d = d()  # Create an instance of the letter 'd'
                                                self.exclamation = exclamation()  # Create an instance of an exclamation mark

    def __str__(self):
        # Concatenate the letters to form the desired output
        return (
                    str(self.H)  # Convert H to a string
                        + str(self.e)  # Convert e to a string
                            + str(self.l1)  # Convert the first l to a string
                                + str(self.l2)  # Convert the second l to a string
                                    + str(self.o)  # Convert o to a string
                                        + str(self.space)  # Convert space to a string
                                            + str(self.w)  # Convert w to a string
                                                + str(self.o)  # Convert o to a string
                                                    + str(self.r)  # Convert r to a string
                                                        + str(self.l1)  # Convert the first l to a string
                                                            + str(self.d)  # Convert d to a string
                                                                + str(self.exclamation)  # Convert exclamation to a string
        )

# Create an instance of the Program class
p = Program()
# Print the output
print(p)
# do nothing:
