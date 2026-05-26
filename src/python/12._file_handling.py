# File Handling en Python

# Open a file for reading and writing
try:
    with open('polimorfismo/archivo.txt', 'r+') as file:
    # file.write('Invincible\n')
        file.seek(0)  # Move the file pointer to the beginning
        print(file.read())
except FileNotFoundError as e:
    print(f"The file was not found. Error: {e}")

    
try:
    with open('polimorfismo/skills.js', 'r+') as file:
        file.write('console.log("Hello, World!")\n')
        file.write('let edad = 25;// Esto es correcto\nedad = 27\n')
        file.write('console.log(`mi edad es: ${edad}`)\n')
        file.seek(0)
        print(file.read())
except FileNotFoundError as e:
    print(f"The file was not found. Error: {e}")