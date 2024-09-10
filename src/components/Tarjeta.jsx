import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Tarjeta({nombre,id,dueño,fecha,hora,sintoma,borrar}) {
    
   
   
  
  return (

    <>
    < Card className='container my-3' key={id}>
      <Card.Header className='header'>Mascota:{nombre}</Card.Header>
      <Card.Header className='header'>Dueño:{dueño}</Card.Header>
      <Card.Body className='body-cart'>
        <Card.Title className='title'>Cita del Paciente {nombre}</Card.Title>
        <Card.Text >
         Fecha:{fecha}
        </Card.Text>
        <Card.Text>
            Hora: {hora}
        </Card.Text>
         <Card.Text>
            Sintoma: {sintoma}
         </Card.Text>
         <Button className='borrar btn btn-danger'onClick={()=>borrar(id)} >Borrar cita</Button>
      </Card.Body>
      
    </Card>
    </>
  );
}

export default Tarjeta;