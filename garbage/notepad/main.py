import pygame
from write_string import write_string

pygame.init()
pygame.font.init()

screen = pygame.display.set_mode((1000, 500))
consolas = pygame.font.SysFont("consolas", 25)

KILOBYTE = 1024

string_to_write = ''

t = 0
running = True
while running:
	for event in pygame.event.get():
		match event.type:
			case pygame.QUIT:
				running = False
			case pygame.MOUSEWHEEL:
				t += event.y * 30
				if -t > 30*len(string_to_write.split('\n')): t = -30*len(string_to_write.split('\n'))
				if -t < 0: t = 0
				print(t)
			case pygame.TEXTINPUT:
				string_to_write += event.text
			case pygame.KEYDOWN:
				if event.key == pygame.K_BACKSPACE:
					string_to_write = string_to_write[:-1]
				elif event.key == pygame.K_RETURN:
					string_to_write += '\n'
				elif event.key == pygame.K_KP_ENTER:
					string_to_write += '\n'


	screen.fill((0, 0, 0))
	write_string(screen, (0, t), string_to_write, consolas, line_height=30, wrap=True, wrapping_width=screen.get_size()[0], antialias=True, color=(255, 255, 255), spaces_per_tab=4)
	pygame.display.update()