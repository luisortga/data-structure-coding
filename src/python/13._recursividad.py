#
import re

text = "Los frenos se cristalizaron, corres la final mañana de la cademia GT, Gran Turismo, Sony"

pattern: str = r'cristalizaron'
find = re.search(pattern, text)

if find:
    print(find.group())
else:
    print('resultado None')