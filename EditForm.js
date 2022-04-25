import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, {Component} from "react";

function EditForm(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        id: props.book.id,
        name: props.book.name,
        category: props.book.category,
        author: props.book.author.id,
        availableCopies: props.book.availableCopies,
    });
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        props.onEdit(data.id, data);
        navigate("/");
    };
    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input
                            id="name"
                            name="name"
                            required
                            value={data.name}
                            type="text"
                            className="formControl"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Book category</label>
                        <select
                            id="category"
                            name="category"
                            className="formControl"
                            onChange={handleChange}
                            defaultValue={data.category}
                        >
                            {props.categories.map((cat) => {
                                return (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Book author</label>
                        <select
                            id="author"
                            name="authorId"
                            className="formControl"
                            onChange={handleChange}
                            defaultValue={data.author}
                        >
                            {props.authors.map((auth) => {
                                return (
                                    <option key={auth.id} value={auth.id}>
                                        {auth.name} {auth.surname}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input
                            id="availableCopies"
                            name="availableCopies"
                            value={data.availableCopies}
                            required
                            type="number"
                            className="formControl"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <button id="submit" type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
export default EditForm;
