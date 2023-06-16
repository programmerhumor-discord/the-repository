defmodule Hello_World do
  def hello_World(n) when n == 0 do
    "H" <> hello_World(1)
  end
  def hello_World(n) when n == 1 do
    "e" <> hello_World(2)
  end
  def hello_World(n) when n == 2 do
    "l" <> hello_World(3)
  end
  def hello_World(n) when n == 3 do
    "l" <> hello_World(4)
  end
  def hello_World(n) when n == 4 do
    "o" <> hello_World(5)
  end
  def hello_World(n) when n == 5 do
    "," <> hello_World(6)
  end
  def hello_World(n) when n == 6 do
    " " <> hello_World(7)
  end
  def hello_World(n) when n == 7 do
    "W" <> hello_World(8)
  end
  def hello_World(n) when n == 8 do
    "o" <> hello_World(9)
  end
  def hello_World(n) when n == 9 do
    "r" <> hello_World(10)
  end
  def hello_World(n) when n == 10 do
    "l" <> hello_World(11)
  end
  def hello_World(n) when n == 11 do
    "d" <> hello_World(12)
  end
  def hello_World(n) when n == 12 do
    "!"
  end
end
IO.puts Hello_World.hello_World(0)
