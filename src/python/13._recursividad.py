#
import re

text = "Los frenos se cristalizaron, corres la final mañana de la cademia GT, Gran Turismo, Sony"

pattern: str = r'cristalizaron'
find = re.search(pattern, text)

print(find.group())
