# Description
> This is a project NodeJS / ES6 based that loads a file in XLSX format and inserts his content into a MySQL database

# See working on Heroku
- [https://node-load-xlsx.herokuapp.com/cargar-xlsx-web](https://node-load-xlsx.herokuapp.com/cargar-xlsx-web)

# How to use
- Create XLSX file [See how to create XLSX file](https://github.com/AlonsoK28/xlsx-load-node#xlsx-file-called-xlsx)
- Create MySQL database [See how to create MySQL database](https://github.com/AlonsoK28/xlsx-load-node#mysql)
- Install with `npm i xlsx-load-node` or download the project in `ZIP file`
- Start `NodeJS` in the project directory with `node main.js`
- Go to [http://localhost:911/cargar-xlsx-web](http://localhost:911/carga-xlsx-web)
- Load `XLSX file`
- See results
# Usage

## XLSX file (called 'XLSX')  

> There are an example XLSX file in `./files/BD_SAMPLE.xlsx`

### Filename  
Name of the XLSX file (case-incensitive)

### Worksheet
Name of the XLSX worksheet where is data (case-incensitive)

### Columns  
Name of the columns that contain the data (case-incensitive) [See data types](https://github.com/AlonsoK28/xlsx-load-node#data-type)

## MySQL

> There are an example MySQL script file in `./files/bd_sample.sql`

### Database
Should be equals that XLSX file name (case-incensitive)

### Table
Should be equals that XLSX worksheet (case-incensitive)

### Columns
Should exists and be equals that XLSX columns (case-incensitive)

## MySQL user credentials
Adds your MySQL Server credentials in this file

**constantes.js**
```javascript 
exports.configuracionBD = {
  HOST: "your_mysql_host",
  BD_USER: "your_mysql_user",
  BD_NAME: "your_mysql_db_name",
  BD_PASSWORD: "your_mysql_pwd",
  BD_PORT: your_mysql_port
}
```

## Data Type
### XLSX
In XLSX file is enought with store your data with `General format`

### MySQL
In MySQL you could stote your data in a `varchar field` for all your data

# Dependences
* [xlsx-mysql load lib](https://github.com/Rizwaan-Company/xlsx-mysql)
* MySQL
* NodeJS 
* Express
* Boostrap 4
* [FontAwesome 5.1.1]([https://fontawesome.com/](https://fontawesome.com/))

## The project is 100% free to use for non-commercial purposes, If you use this project please give the respective credits to the author

* Help me to develop more projects like this https://www.buymeacoffee.com/alonsokyoyama

# To-do
* Catch XLSX library errors and display them in the view
* Improvements in Ajax calls on client-side
* Show load statistics to the database when file is succesfully loaded

# Licence
**Apache 2.0**
