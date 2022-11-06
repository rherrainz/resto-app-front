import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
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
                <tr>
                {/* <th>Ticket id</th> */}
                <th>Nombre</th>
                <th>E-Mail</th>
                <th>Comentario</th>
                </tr>
            </thead>
            <tbody>
                {comments.map((comment) => (
                <tr>
                    {/* <td>{comment._id}</td> */}
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.comment}</td>
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
    );
}

export default AllComments;