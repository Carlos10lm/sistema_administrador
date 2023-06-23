import mongoose, {Schema} from "mongoose";

const personaSchema = new Schema({
    tipo_persona: {type: String, maxlenght: 20, required: true},
    nombre: {type: String, maxlenght: 50, unique: true, required: true},
    tipo_documento: {type: String, maxlenght: 20},
    num_documento: {type: String, maxlenght: 20},
    direccion: {type: String, maxlenght: 70},
    telefono: {type: String, maxlenght: 20},
    email: {type: String, maxlenght: 50, uunique: true},
    estado: {type: Number, default: 1},
    createdAt: {type: Date, default: Date.now}
});

const Persona = mongoose.model('persona', personaSchema);
export default Persona;