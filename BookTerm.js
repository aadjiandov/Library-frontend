import React from "react";
import {Link} from 'react-router-dom';


const bookTerm = (props) => {
    return (
        <tr key={props.term.id}>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>
                {props.term.author.name} {props.term.author.surname}
            </td>
            <td>{props.term.availableCopies}</td>
            <td className="text-right ">
                <Link
                    className="btn btn-primary"
                    onClick={() => props.onEdit(props.term)}
                    to={`/edit/${props.term.id}`}
                >
                    Edit
                </Link>
            </td>
            <td className="text-right ">
                <span
                    title="Rent"
                    className="btn btn-success"
                    onClick={() => {
                        props.onRent(props.term.id);
                    }}
                >
                    Rent
                </span>
            </td>
            <td className="text-right ">
                <span
                    title="Delete"
                    className="btn btn-danger"
                    onClick={() => {
                        props.onDelete(props.term.id);
                    }}
                >
                    Delete
                </span>
            </td>
        </tr>
    )
}
export default bookTerm;