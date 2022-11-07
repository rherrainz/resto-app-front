import axios from 'axios';
import { useState, useEffect } from 'react';
import {Table,Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function AllComments() {

    const [comments, setComments] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8080/comments').then((response) => {
         setComments(response.data.comments);
       });
     }, []);

    return (
        <div className='container m-3 p-5'>
        <Helmet>
            <title>Restó App - Todos los Comentarios</title>
        </Helmet>
        <Table striped bordered hover size="" variant="">
            <thead>
                <tr className='text-center'>
                {/* <th>Ticket id</th> */}
                <th>Nombre</th>
                <th>E-Mail</th>
                <th>Comentario</th>
                <th className='col-1'>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comment) => (
                <tr>
                    {/* <td>{comment._id}</td> */}
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.comment}</td>
                    <td className='d-grid gap-2 d-md-flex justify-content-md-center'>
                        <Button className='btn btn-success btn-sm'>Editar</Button>
                        <Button className='btn btn-danger btn-sm'>Borrar</Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
    );
}

export default AllComments;