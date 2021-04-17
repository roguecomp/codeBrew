import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
 
export default function Signup() {
    return (
        <div>
            <Card>
                <Card.Body className="text-center">
                    <h2>Sign Up</h2>
                </Card.Body>
            </Card>
            <div className="w-100">
                Already have an account? Log In
            </div>
        </div>
    )
}