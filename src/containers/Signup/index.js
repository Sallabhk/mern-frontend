import React from 'react';
import {Button, Col, Container, Row ,Form} from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

const Signup = (props) => {
    return(
        <Layout>
        <Container>
        <Row style={{marginTop: '50px'}}>
            <Col md={{span: 6, offset: 3}}>
                <Form>
                    <Row>
                        <Col md={6}>
                             <Input 
                                label="First Name" 
                                type="text" 
                                placeholder="First Name"
                                value=""
                                onChange ={() => {}}
                             />
                        </Col>
                        <Col md={6}>
                             <Input 
                                label="Last Name" 
                                type="text" 
                                placeholder="Last Name"
                                value=""
                                onChange ={() => {}}
                             />
                        </Col>
                    </Row>
                        <Input 
                            label="Email address" 
                            type="email" 
                            placeholder="Enter email" 
                            errorMessage="We'll never share your email with anyone else." 
                            value=""
                            onChange ={() => {}}
                        />
                        <Input 
                            label="New Password" 
                            type="password" 
                            placeholder="New Password" 
                            value=""
                            onChange ={() => {}}
                        />
                          <Input 
                            label="Confirm Password" 
                            type="password" 
                            placeholder="Confirm Password" 
                            value=""
                            onChange ={() => {}}
                        />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        </Container>
    </Layout>
    )
}

export default Signup;