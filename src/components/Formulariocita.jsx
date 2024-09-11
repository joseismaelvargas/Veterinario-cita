
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import{ v4 as uuidv4}from'uuid'
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import { useEffect, useState } from 'react';
import Tarjeta from './Tarjeta';

function Formulariocita() {
    
    const { register, handleSubmit ,formState:{errors}} = useForm();
    let leer=JSON.parse(localStorage.getItem("veterinaria"))||[]
    const [array,setArray]=useState(leer)
 

    useEffect(()=>{

    localStorage.setItem("veterinaria",JSON.stringify(array))
    },[array])
    
       
    
    
 


      
   
    const agregar=(data,e)=>{
          e.preventDefault()
            e.target.reset()

        let citas={
            nombre:data.nombre,
            dueño:data.dueño,
            sintoma:data.sintoma,
            fecha:data.fecha,
            hora:data.hora,
            id:uuidv4()
        }
        setArray([citas,...array])
        

        
    }
    const borrardesde=(valor)=>{
      let filtrar=array.filter((element)=>element.id!==valor)
      setArray(filtrar)
    }

    
  return (
    <>
    <Form onSubmit={handleSubmit(agregar)}>
      <FloatingLabel
        controlId="floatingInput"
        label="Nombre de mascota"
        className="container mb-3 my-3 "
      >
        <Form.Control type="text" placeholder="Nombre de mascota" name='nombre' {...register("nombre",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"Nose puede Especificar Nombre Mascota"},
           
        })} />
         <span className='text-danger' >{errors.nombre&&errors.nombre.message}</span> 
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingPassword" label="Nombre de dueño" className='container'>
        <Form.Control type="text" placeholder="Nombre de dueño"  name='dueño' {...register("dueño",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:3,message:"No se puede espesificar Nombre Dueño"}
        })}/>
        <span className='text-danger' >{errors.dueño&&errors.dueño.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="Fecha" className='container my-3' >
        <Form.Control type='date' placeholder='Fecha' name='fecha' {...register("fecha",{
            required:{value:true,message:"Ponga Fecha por favor"}
        })}/>
        <span className='text-danger' >{errors.fecha&&errors.fecha.message}</span> 
      </FloatingLabel>

      <FloatingLabel label="Hora de cita" className='container my-3'>
        <Form.Control type='time' placeholder='Hora de cita' name='hora' {...register("hora",{
            required:{value:true,message:"Ponga Hora por favor"}
        })}></Form.Control>
        <span className='text-danger' >{errors.hora&&errors.hora.message}</span> 
      </FloatingLabel>
      
      <FloatingLabel label="Sintoma" className='container my-3'>
        <Form.Control type='text' placeholder='Sintoma' name='sintoma'{...register("sintoma",{
            required:{value:true,message:"Este campo debe estar lleno"},
            minLength:{value:5,message:"Sea mas especifico"}
        })}></Form.Control>
        <span className='text-danger' >{errors.sintoma&&errors.sintoma.message}</span> 
      </FloatingLabel>
      <div className='d-flex justify-content-center '>
        <button className='buttonenviar btn btn-primary my-3' type='Submit'>Agregar Cita</button>
      </div>
     
      </Form>
      { array.map((element)=>(
      
        <Tarjeta key={element.id} borrar= {borrardesde} nombre={element.nombre} dueño={element.dueño} id={element.id} hora={element.hora} fecha={element.fecha}  sintoma={element.sintoma} ></Tarjeta> 
    ))

      }
       
      
    </>
  );
}

export default Formulariocita;