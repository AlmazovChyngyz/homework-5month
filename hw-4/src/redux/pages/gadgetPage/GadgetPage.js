import React, {useState} from 'react';
import {Row, Col, Button, Form, Container, Spinner } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addGadgetAction } from "../../action";

function GadgetPage () {
    const [object, setObject] = useState({
        name:'',
        price: '',
        color:'',
    })

    const dispatch = useDispatch()

    const {preloader} = useSelector(state => state.titleReducer)
    const formValue = (event) => {
        setObject({
            ...object,
            [event.target.name]: event.target.value
        })
    }


    const addGadget = (event) => {
        event.preventDefault()
        dispatch(addGadgetAction(object))
    }

    return (
        <Container>
        <h1>Add your favourite Gadget</h1>
    {
        preloader ?
            <Spinner animation="border" variant="primary" />
            :

            <Form onSubmit={addGadget}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Control
                                type="text"
                                placeholder="price"
                                name="price"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="color">
                            <Form.Control
                                type="text"
                                placeholder="color"
                                name="color"
                                onChange={formValue}
                            />
                        </Form.Group>

                    </Col>
                    <Col lg={3}>
                        <Button type="submit" variant="success" className="w-100">
                            ADD
                        </Button>
                    </Col>
                </Row>
            </Form>
    }
    </Container>
    )
}
export default GadgetPage;