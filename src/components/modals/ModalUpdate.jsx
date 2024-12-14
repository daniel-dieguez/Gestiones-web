import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'


export default function ModalUpdate({ solicitud, getApi }) {
    const [gestion, setGestion] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = async (e) => {
        e.preventDefault();

        if (!gestion) {
            console.log("El campo tipo_solicitud está vacío.");
            return; 
        }

        const urlPut = `http://localhost:35211/gestiones/updateGestion/${solicitud}`;

        const dataToUpdate = {
            tipo_solicitud: gestion,  
        };

        try {
            const response = await fetch(urlPut, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToUpdate),  //cuerpo del json
        });
            if (response.ok) {
                Swal.fire(`se a actualizado con exito`);
                
                handleClose();
                getApi();
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="mb-4">
                Actualizar
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Cambio de datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Actualizar solicitud</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Actualiza los datos de la solicitud"
                                value={gestion}
                                onChange={(e) => setGestion(e.target.value)} 
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}