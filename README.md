# Description
> This project loads a file in XLSX format and inserts his content into a MySQL database

# How to use
- Start Node in the project directory with `node main.js`
- Go to [http://localhost:911/cargar-xlsx-web](http://localhost:911/carga-xlsx-web)
- Generate the DB and the user to use
- Load a file with XSLX extension
- Chek results

# Usage
### MySQL
Adds your MySQL Server credentials in this file
* constantes.js
```javascript 
exports.configuracionBD = {
  HOST: "your_mysql_host",
  BD_USER: "your_mysql_user",
  BD_NAME: "your_mysql_db_name",
  BD_PASSWORD: "your_mysql_pwd",
  BD_PORT: your_mysql_port
}
```

### XLSX file

# Frameworks / Lib used
* [ES6](http://es6-features.org/)
* [XLSX load lib](https://github.com/Rizwaan-Company/xlsx-mysql)
* MySQL
* Node 
* Express
* Boostrap 4
* [FontAwesome 5.1.1]([https://fontawesome.com/](https://fontawesome.com/))

* The project is 100% free to use for non-commercial purposes

## If you use this project please give the respective credits to the author

* Help me develop more projects like this https://www.buymeacoffee.com/alonsokyoyama

# To-do
* Catch XLSX library errors and display them in the view
* Improvements in Ajax calls on client-side
* Show load statistics to the database when file is succesfully loaded

# Licence
**Apache 2.0**
