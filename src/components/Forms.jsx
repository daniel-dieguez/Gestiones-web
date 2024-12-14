import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Form, Button } from "react-bootstrap";
import ModalSearch from './modals/ModalSearch';
import ModalUpdate from './modals/ModalUpdate';


export default function Forms() {

    const [solicitud, setSolicitud] = useState('');


    const [data, setData] = useState([]);


    //Se reinicie el DOM nuevamente
    useEffect(() => {
      getApi();
    }, [500])




    const urlGet = `http://localhost:35211/gestiones/viewAll`;


    const getApi = async () => {

        try {
            const response = await fetch(urlGet);
            if (!response.ok) {
                console.log("error");
            }


            const data = await response.json();
            setData(data); // Actualiza los datos correctamente
           // Swal.fire(`Se agregó una tarea con éxito`);


        } catch (error) {
            console.log('Error en la petición de datos:', error);
        }
    };

    const urlPost = `http://localhost:35211/gestiones/newSolicitud`;

    const dataPost = { tipo_solicitud: solicitud };

    const createNew = async () => {
        try {
            const response = await fetch(urlPost, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPost),
            });
            if (response.ok) {
                console.log("goobro")
                //await getApi(); // Asegura que se ejecuta después del POST
                Swal.fire(`Se agregó una tarea con éxito`);
            } else {
                const errorData = await response.json();
                console.log("Error en la actualización:", errorData);
            }
        } catch (error) {
            console.log("Error al crear nueva solicitud:", error);
        }
    };

    /******************* */


    const handleDelete = async (solicitud) => {
        const urlDelete = `http://localhost:35211/gestion/delete/${solicitud}`
        try {
            const response = await fetch(urlDelete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                Swal.fire(`se a eliminado la solicitud con el Id: ${solicitud}`);
                getApi(); //refresca al momento de eliminar


            }

        } catch (error) {
            console.log('Error al eliminar:', error);
        }


    }



    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={6} lg={5} className="mb-4">
                        <Card border="danger" body>
                            <Form  onSubmit={createNew}>
                                <h1 className="text-center">Formulario</h1>
                                <Form.Group className="mb-3" controlId="formTipoSolicitud">
                                    <Form.Label>Agregue nueva solicitud:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresa la solicitud"
                                        value={solicitud}
                                        onChange={(e) => setSolicitud(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Enviar
                                </Button>
                            </Form>

                            <hr />
                            <h1 className="text-center">Búsqueda solicitud</h1>
                            <ModalSearch getApi={getApi} />
                        </Card>
                    </Col>
                </Row>
            </Container>


            <div>
                <Container className="mb-4">
                    <Row className="g-4">
                        {data.map((item, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                <Card border="info" bg="light" text="black" className="h-100">
                                    <Card.Body>
                                        <h1 className="fs-3">Solicitud:</h1>
                                        <Card.Title className="fs-5">{item.tipo_solicitud}</Card.Title>
                                        <Card.Text className="fs-6">Solicitud ID: {item.solicitud}</Card.Text>
                                        <ModalUpdate solicitud={item.solicitud} getApi={getApi} />
                                        <Button variant="danger"  onClick={() => handleDelete(item.solicitud)}>
                                            Eliminar
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>


            </div>
        </div>
    )
}


