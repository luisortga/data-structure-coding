#
import re

text = "Los frenos se cristalizaron, corres la final mañana de la cademia GT, Gran Turismo, Sony"

pattern = r'cristalizaron'
find = re.search(pattern, text)
