class Encap:
	def __init__(self, ec_file: str, name: str) -> None:
		self._open_ec(ec_file)
		self.name = name
	def _open_ec(self, ec_file: str) -> None:
		with open(ec_file, 'r') as f:
			total_x = 0
			total_y = 0
			zoning_x = []
			zoning_y = []
			moveable = [[]]
			zy_pos = 0
			zy_within = -1
			current = {}
			for i, line in enumerate(f.readlines()):
				line = line.strip('\n')
				if i == 0: # zoning_x
					zoning_x = [int(x) for x in line.split(' ')]
					continue
				if i == 1: # zoning_y
					zoning_y = [int(x) for x in line.split(' ')]
					continue
				i -= 2
				if i == 0: # totals (in an if statement to run only once)
					total_x = sum(zoning_x)
					total_y = sum(zoning_y)

				zy_within += 1
				if zy_within >= zoning_y[zy_pos]:
					zy_pos += 1
					zy_within = 0

				x_pos = 0
				for zx_pos, x_zone in enumerate(zoning_x):
					if f"{sum(zoning_x[:zx_pos])},{sum(zoning_y[:zy_pos])}" not in current:
						current[f"{sum(zoning_x[:zx_pos])},{sum(zoning_y[:zy_pos])}"] = []
					current[f"{sum(zoning_x[:zx_pos])},{sum(zoning_y[:zy_pos])}"].append(
						line[x_pos:x_pos + x_zone]
					)
					x_pos += x_zone
		self.encap_data = [[0 for _ in range(len(zoning_y))] for _ in range(len(zoning_x))]

		for key in current.keys():
			x, y = [int(i) for i in key.split(',')]
			self.encap_data[x][y] = current[key]

	def encapsulate(self, things: list[list[str]]) -> list[str]:
		# 1) make the text matrix(self.encap_data) to fit the things
		# 2) put the things in the matrix
		# 3) return the matrix
en = Encap('./img/sert', 'plain')
en.encapsulate([['a']])
