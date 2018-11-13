/**
 * @author Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
 * @description Objeto con la cadena de conexion de la configuracion de los parametros web que usa la aplicacion
 * @return {Obj} configuracionBD
 */
exports.configuracionWeb = {
  CONTEXTO: "/cargar-xlsx-web",
  DIRECTORIO_VIRTUAL: "/recursos/",
  DIRECTORIO_SCREENSHOTS: "screenshots/",
  DIRECTORIO_UPLOADS: "/assets/uploads",
  PUERTO: process.env.PORT || 911
}

/**
 * @author Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
 * @description Objeto con la cadena de conexion de la BD
 * @return {Obj} configuracionBD
 */
exports.configuracionBD = {
  HOST: "your_mysql_host",
  BD_USER: "your_mysql_user",
  BD_NAME: "your_mysql_db_name",
  BD_PASSWORD: "your_mysql_pwd",
  BD_PORT: 3306
}