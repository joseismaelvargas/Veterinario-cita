import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from 'react';

function Tarjeta() {
    const [getitem,setgetitem]=useState([])

    const consumirlocal=()=>{
        let valores=localStorage.getItem("veterinaria")
        if(valores){
            setgetitem(JSON.parse(valores))
        }
    }

    useEffect(() => {
     consumirlocal()
    }, [])
   console.log(getitem)
  return (

    <> {getitem.length>0?(getitem.map((element)=>
    < Card className='container my-3' key={element.id}>
      <Card.Header className='header'>Mascota:{element.nombre}</Card.Header>
      <Card.Header className='header'>Dueño:{element.dueño}</Card.Header>
      <Card.Body className='body-cart'>
        <Card.Title className='title'>Cita del Paciente {element.nombre}</Card.Title>
        <Card.Text >
         Fecha:{element.fecha}
        </Card.Text>
        <Card.Text>
            Hora: {element.hora}
        </Card.Text>
         <Card.Text>
            Sintoma: {element.sintoma}
         </Card.Text>
         <Button className='borrar btn btn-danger'>Borrar cita</Button>
      </Card.Body>
      
    </Card>)):(<h2 className='text-center' style={{
        fontWeight:"bold",
        fontFamily:"sans-serif"
    }} >No ahy Citas en Curso</h2>)}
    </>
  );
}

export default Tarjeta;