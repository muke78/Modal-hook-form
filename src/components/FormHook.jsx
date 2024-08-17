import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const FormHook = ({ username, email, password, date, onInputChange, resetForm, counter, decrement, increment, resetForNumber }) => {

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <input
            type="text"
            className='form-control mb-2'
            placeholder="Nombre"
            required={true}
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </Col>
        <Col xs={12} md={6}>
          <input
            type="email"
            className='form-control mb-2'
            required={true}
            placeholder="alguienexample@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </Col>
        <Col xs={12} md={6}>
          <input
            type="password"
            className='form-control mb-2'
            required={true}
            placeholder="Contrasena"
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Col>
        <Col xs={12} md={6}>
          <input
            type="date"
            className='form-control mb-2'
            required={true}
            placeholder="Nombre"
            name="date"
            value={date}
            onChange={onInputChange}
          />
        </Col>
        <Col xs={12} md={6}>
          <input
            type="number"
            className='form-control mb-2'
            placeholder="Number"
            name="counterForm"
            value={counter}
            onChange={onInputChange}
          />
        </Col>
      </Row>



      <Button className="m-1" variant="success" onClick={() => increment()}>Aumentar</Button>
      <Button className="m-1" variant="secondary" onClick={() => resetForNumber()}>Reset</Button>
      <Button className="m-1" variant="warning" onClick={() => decrement()}>Restar</Button>
      <Button className="m-1" variant="danger" onClick={resetForm}>Borrar campos</Button>
    </Container>

  )
}
