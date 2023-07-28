defmodule Hello_World do
  def hello_world() do
    spawn(fn -> fun() end)
  end
  def fun() do
    receive do
      {:hello, sender} ->
        send(sender, "Hello, World!")
    end
  end
end
pid = Hello_World.hello_world()
send(pid, {:hello, self()})
receive do
  message ->
    IO.puts message
  end
