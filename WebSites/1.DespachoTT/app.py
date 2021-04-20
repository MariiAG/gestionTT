# Instalar Flask - pip3 install flask(es un “micro” Framework escrito en Python y concebido para facilitar el desarrollo de Aplicaciones Web)
# Defino un objeto "APP" para la clase "flask" con un parametro por defecto "__name__" que me permite utilizar todos los atributos y metodos de Flask 
from flask import Flask, render_template, url_for, request, redirect, jsonify, json
import mysql.connector
from flask_cors import CORS, cross_origin

# instalar libreria para conectar con la base de datos pip3 install mysql-connector-python
# instalar pip3 install -U flask-cors para acceder a los datos de la API 
# instalar nodejs
myDB = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "",
    database = "cargue"  
)

app = Flask(__name__)
cors = CORS(app) 
app.config['CORS_HEADERS']=['Content-Type']

def toJson(data):
    despachos = []
    for i in data:
        despacho = {'id': i[0], 'tecnologia': i[1], 'categoria': i[2], 'subcategoria': i[3]}
        despachos.append(despacho)
    return despachos

# Flask maneja 1. Direccion del servidor 2. Rutas de las paginas en las cuales estoy trabajando(tambien llamado como endpoints)
@app.route("/", methods=['GET']) # localhost
@cross_origin()
def index(): # definir funcion
    query = "SELECT * FROM categoria"
    cur = myDB.cursor()
    cur.execute(query)
    result = cur.fetchall()
    print(result)
    return json.dumps({"data": toJson(result)})
    #return render_template('index.html') # Renderiza por ruta el HTML

if __name__ == "__main__": 
# Permite ejecutar el servidor que trae por defecto flask, adicional permite reiniciar el servidor automaticamente cuando se guarda algun cambio sobre el codigo
    app.run(debug=True)

# Dejar chift presionado y seleccionar refrescar pagina para quitar el cache de la pagina y cambien los estilos