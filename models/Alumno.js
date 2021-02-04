const { Schema, model } = require('mongoose');
const AlumnoSchema = new Schema({
    nombres:{
        type: String, required:true,
    },
    apellidos:{
        type: String, required:true,
    },
    edad:{
        type: Number, required:true,
    },
    created_since: {
        type:Date, default:Date.now,
    }
});
module.exports = model('Alumno',AlumnoSchema);