/**
 * @author Carlos Alonso Casales Ortega <carlos.casales@ine.mx>
 * @description Objeto con la cadena de conexion de la configuracion de los parametros web que usa la aplicacion
 * @return {Obj} configuracionBD
 */
exports.configuracionWeb = {
  CONTEXTO: "/cargar-xlsx-web",
  DIRECTORIO_VIRTUAL: "/recursos/",
  DIRECTORIO_SCREENSHOTS: "screenshots/",
  DIRECTORIO_UPLOADS: "/assets/uploads",
  PUERTO: 911
}

/**
 * @author Carlos Alonso Casales Ortega <carlos.casales@ine.mx>
 * @description Objeto con la cadena de conexion de la BD
 * @return {Obj} configuracionBD
 */
exports.configuracionBD = {
  HOST: "127.0.0.1",
  BD_USER: "xadanico_stxadan",
  BD_NAME: "carga-xlsx",
  BD_PASSWORD: "*CbV54mK9-6S",
  BD_PORT: 3306
}