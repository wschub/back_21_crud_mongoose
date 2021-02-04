const { Router } = require('express');
const router = Router();

const Alumno = require('../models/Alumno');



router.get('/', async(req,res)=>{

    const alumnos = await Alumno.find().sort('-_id');
    res.json(alumnos);
});

router.post('/', async(req,res)=>{

    const { nombres, apellidos, edad} = req.body;
    const newAlumno = new Alumno({nombres, apellidos, edad});
    newAlumno.save();
    res.json({'message':'Alumno guardado!'})
});

router.put('/:id', async(req,res)=>{
    const { nombre, apellidos, edad } = req.body;
    const id = req.params.id;
      
    Alumno.findByIdAndUpdate(id,{$set:req.body},(err,resultado)=>{
       if(err){
           console.log(err)
       }
       res.json({'message':resultado});
    })

});

router.delete('/:id', async(req,res)=>{

    const id = req.params.id;
    const alumno = await Alumno.findByIdAndDelete(id);
    res.json({message:'Alumno eliminado'})

});

module.exports = router;