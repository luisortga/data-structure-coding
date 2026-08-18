import mysql.connector
from dotenv import load_dotenv

config = {
        "host": "127.0.0.1",
        "port": PORT,
        "database": DB_NAME,
        "user": USER,
        "password": KEY
    }

connection = mysql.connector.connect(**config)
cursor = connection.cursor()

query = "SELECT p.name, p.surname, t.name, t.chassis FROM pilots p JOIN teams t ON p.team_id = t.id;"
cursor.execute(query)
result = cursor.fetchall()

for row in result:
    print(row)
    
cursor.close()
connection.close()