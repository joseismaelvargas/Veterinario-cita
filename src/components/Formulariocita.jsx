import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Formulariocita() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="container mb-3 my-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className='container'>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export default Formulariocita;