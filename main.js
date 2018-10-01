var express     = require("express");
    path = require("path"),
    multer = require('multer'),
    mime = require("mime"),
    app = express(),
    constantes = require('./config/constantes.js'),
    funciones = require('./assets/js/lib/funcionesGenerales.js');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `.${constantes.configuracionWeb.DIRECTORIO_UPLOADS}`);
    },
    filename: function (req, file, callback) {
      // nombreArchivo  =  file.originalname  +  "-"  +  Date.now()  +  "."  +  mime.getExtension(file.mimetype);
      extensionArchivo = mime.getExtension(file.mimetype);
      nombreArchivo = file.originalname;
      nombreArchivo = nombreArchivo.split(".")[0]  +  "-"  +  Date.now()  +  "."  +  mime.getExtension(file.mimetype);
      callback(null, nombreArchivo);
    }
  });
var upload = multer(
  { 
    storage: storage 
  },
  {
    fileFilter: function (req, file, cb) {
      if (file.mimetype !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        return cb(null, false);
      }
      cb(null, true);
    }
  }).single('archivo');


app.use(constantes.configuracionWeb.DIRECTORIO_VIRTUAL, express.static("./assets/"));


/**
 * @author Carlos Alonso Casales Ortega <carlos.casales@ine.mx>
 * @description Router de Index
 */
app.get(constantes.configuracionWeb.CONTEXTO,function(req, res){
    //(__dirname) - Obtiene el path actual del script en ejecucion, (./modulos/views/) indica la direccion a moverse en el directorio, (inicio.html) archivo de vista a servir en el routing indicado
    res.sendFile(path.join(__dirname, './modulos/views/', 'inicio.html'));
});

/**
 * @author Carlos Alonso Casales Ortega <carlos.casales@ine.mx>
 * @description Router de carga de Archivo
 */
app.post('/carga-de-archivo', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end("Error " + err);
    }
    if(extensionArchivo != "xlsx"){
      return res.send(`<div class="alert alert-dismissible alert-danger">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        El archivo <strong>${nombreArchivo}</strong> no tiene el formato correcto
                      </div>`);
    }
    funciones.cargarArchivoXLSX(nombreArchivo, constantes);
    return res.send(`<div class="alert alert-dismissible alert-success">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        El archivo <strong>${nombreArchivo}</strong> fue cargado y procesado correctamente en la aplicación
                      </div>`);
  });

});

app.listen(constantes.configuracionWeb.PUERTO,function(){
    console.log(`Aplicación escuchando en el PUERTO: ${constantes.configuracionWeb.PUERTO}`);
});