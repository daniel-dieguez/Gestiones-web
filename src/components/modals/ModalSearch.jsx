import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button, Modal, Card } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import ModalUpdate from './ModalUpdate';
import Swal from 'sweetalert2'

export default function ModalSearch({ getApi }) {


    const [palabraClave, setPalabraClave] = useState("");
    const [resultado, setResultado] = useState([]);

    const [show, setShow] = useState(false);


    const handleClose = () => {
        setShow(false);
        getApi();
    }
    const handleShow = () => setShow(true);



    const urlGetSeach = `http://localhost:8080/gestiones/${palabraClave}`;



    const getSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(urlGetSeach);
            const data = await response.json();
            setResultado(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeletee = async (solicitud) => {
        const urlDelete = `http://localhost:8080/gestion/delete/${solicitud}`
        try {
            const response = await fetch(urlDelete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                Swal.fire(`se a eliminado ${solicitud}`);
                //Eliminar de forma inmediata
                setResultado((prev) => prev.filter((item) => item.solicitud !== solicitud));

            }

        } catch (error) {
            console.log('Error al eliminar:', error);
        }
    }

    
    return (
        <div>

            <Button variant="success" onClick={handleShow} className="mb-4">
                Buscar
            </Button>


            <Modal show={show} onHide={handleClose} animation={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Busqueda de tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Container className='mt-5'>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={10} md={8} lg={6} xl={5} className="mb-4">
                                <Card body className="p-4 shadow-sm rounded">
                                    <Form onSubmit={getSearch}>
                                        <h1 className="text-center text-primary mb-4">Búsqueda de solicitud</h1>
                                        <Form.Group className="mb-3" controlId="formTipoSolicitud">
                                            <Form.Label className="font-weight-bold">Ingrese la solicitud:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Ingresa la solicitud"
                                                value={palabraClave}
                                                onChange={(e) => setPalabraClave(e.target.value)}
                                                required
                                                className="border rounded p-3"
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="w-100 py-2 rounded">
                                            Buscar
                                        </Button>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>


                    <Container className='mt-5'>
                        <Row className="justify-content-center">
                            {resultado.map((item, index) => (
                                <Col xs={12} sm={10} md={8} lg={6} xl={5} className="mb-4" key={index}>
                                    <Card border="info" bg={'light'} text="black" className="shadow-sm rounded">
                                        <Card.Body>
                                            <h3 className="text-primary">Tarea:</h3>
                                            <Card.Title className="font-weight-bold">{item.tipo_solicitud}</Card.Title>
                                            <Card.Text><strong>ID Solicitud:</strong> {item.solicitud}</Card.Text>
                                            <ModalUpdate solicitud={item.solicitud} getApi={getSearch}  />
                                            <Button variant="danger" onClick={() => handleDeletee(item.solicitud)} className="w-100">
                                                Eliminar
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
}
