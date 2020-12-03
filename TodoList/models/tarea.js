const mongoose = require('mongoose')
const {Schema} = mongoose


const tareaSchema = new Schema ({
    tituloDeLaTarea: { type: String, required: true },
    description: { type: String, required: true  },

    // para relacionar el modelo de usuario
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
},{
    // con la fecha que se ingreso la tarea 
    timestamps: true
})

const modelo = mongoose.model('Tarea', tareaSchema)
module.exports = modelo