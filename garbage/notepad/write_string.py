import pygame

def write_string(
		surface: pygame.Surface,
		destination: tuple[int, int],
		string: str,
		font: pygame.font.Font,
		line_height: float,
		wrap: bool = False,
		wrapping_width: float = 500,
		antialias: bool = False,
		color: tuple[int, int, int] = (0, 0, 0),
		background_color: tuple[int, int, int]|None = None,
		spaces_per_tab: int = 4,
		):
	if spaces_per_tab <= 0:
		raise ValueError("Tab width (spaces_per_tab) must not be less than 1.")
	if len(string) == 0:
		string = ' '*2

	while '\n\n' in string:
		string = string.replace('\n\n', '\n \n')
	stringing = ''
	line = ''
	for char in string:
		if char == '\n':
			stringing += line+'\n'
			line = ''
			continue
		if char == '\t':
			line += ' '* (spaces_per_tab - len(line) % spaces_per_tab)
			continue
		line += char
	string = stringing + line

	try:
		while string[-1] == '\n':
			string = string[:-1]
	except IndexError:
		pass

	current_width = 0
	lines = [pygame.Surface((0,0))]
	string_start_position = 0
	for i in range(len(string)):
		current_surface = font.render(string[string_start_position:i+1], antialias, color, background_color)
		if string[i] == '\n':
			string_start_position = i+1
			lines.append(pygame.Surface((0,0)))
		elif (current_surface.get_size()[0] > wrapping_width) and wrap:
			string_start_position = i
			lines.append(pygame.Surface((0,0)))
		lines[-1] = current_surface
	for i, line in enumerate(lines):
		surface.blit(line, (destination[0], i*line_height+destination[1]))