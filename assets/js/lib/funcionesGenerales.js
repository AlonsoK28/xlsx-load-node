module.exports = {
  /**
  * @author Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  * @description Ingresa las tuplas de un archivo XLSX dado a una BD mySQL
  * @param  {File} archivo
  * @param  {Obj} constantes
  */
  cargarArchivoXLSX: function (archivo, constantes){
    const XLSXtoMYSQL = require('xlsx-mysql');

    var optionsZ = {
      mysql: {
        host: constantes.configuracionBD.HOST,
        user: constantes.configuracionBD.BD_USER,
        database: constantes.configuracionBD.BD_NAME,
        password: constantes.configuracionBD.BD_PASSWORD,
        port: constantes.configuracionBD.BD_PORT
      },
      csv: {
        delimiter: '+'
      }
    }
    // var locationZ = __dirname + `${constantes.configuracionWeb.DIRECTORIO_UPLOADS}/${archivo}`;
    var locationZ = path.join(__dirname, '../../uploads/', archivo);
    var waitT = 1000;


    XLSXtoMYSQL(locationZ, optionsZ, waitT);
  }
};