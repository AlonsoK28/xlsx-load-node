## How to use
- Start Node in the project directory with node main.js
- Go to [http://localhost:911/cargar-xlsx-web](http://localhost:911/carga-xlsx-web)
- Generate the DB and the user to use
- Load a file with XSLX extension
- Observe the results

### Usage
Adds your MySQL DB credentials in this file
* constantes.js
`exports.configuracionBD = {
  HOST: "your_host",
  BD_USER: "your_user",
  BD_NAME: "your_db_name",
  BD_PASSWORD: "your_pwd",
  BD_PORT: your_port
}`

## Frameworks / Libs used
* [XLSX load lib](https://github.com/Rizwaan-Company/xlsx-mysql)
* MySQL
* Node 
* Express
* Boostrap 4
* FontAwesome 5.1.1

The project is 100% free to use for non-commercial purposes, if you use this project please the respective credits to the author
Help me develop more projects like this
https://www.buymeacoffee.com/alonsokyoyama

## To-do
Cache XLSX library errors and display them in the view
Improvements in Ajax calls of sight
Show load statistics to the database
