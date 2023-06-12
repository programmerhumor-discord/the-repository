import functools

class H:
    def __str__(self):
        return "H"

class e:
    def __str__(self):
        return "e"

class l:
    def __str__(self):
        return "l"

class o:
    def __str__(self):
        return "o"

class space:
    def __str__(self):
        return " "

class w:
    def __str__(self):
        return "w"

class r:
    def __str__(self):
        return "r"

class d:
    def __str__(self):
        return "d"

class exclamation:
    def __str__(self):
        return "!"

class Program:
    def __init__(self):
        self.H = H()
        self.e = e()
        self.l1 = l()
        self.l2 = l()
        self.o = o()
        self.space = space()
        self.w = w()
        self.r = r()
        self.d = d()
        self.exclamation = exclamation()

    def __str__(self):
        return str(self.H) + str(self.e) + str(self.l1) + str(self.l2) + str(self.o) + \
               str(self.space) + str(self.w) + str(self.o) + str(self.r) + str(self.l1) + \
               str(self.d) + str(self.exclamation)

p = Program()
print(p)
