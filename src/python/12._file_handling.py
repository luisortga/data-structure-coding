# correction

try:
    with open('polimorfismo/archivo.txt', 'r+') as file:
        file.seek(0)
        print(file.read())

except FileNotFoundError as e:
    print(f"The file was not found. Error: {e}")


try:
    with open('polimorfismo/skills.js', 'w+') as file:
        file.write('console.log("Hello, World!");\n')
        file.write('let edad = 25;\n')
        file.write('edad = 27;\n')
        file.write('console.log(`Mi edad es: ${edad}`);\n')

        file.seek(0)
        print(file.read())

except FileNotFoundError as e:
    print(f"The file was not found. Error: {e}")