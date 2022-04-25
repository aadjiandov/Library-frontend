import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, {Component} from "react";
function BookForm(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        category: 1,
        authorId: 1,
        availableCopies: 0,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        props.addBook(data);
        navigate("/");
    };
    return (
        <div>
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group row mt-5 d-flex justify-content-center">
                    <label htmlFor="name" className="col-2 text-end">
                        Book name
                    </label>
                    <input
                        className="formControl col-4"
                        id="name"
                        name="name"
                        required
                        placeholder="Enter book name"
                        type="text"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="form-group row my-2 d-flex justify-content-center">
                    <label className="col-2 text-end" htmlFor="category">
                        Book category
                    </label>
                    <select
                        id="category"
                        name="category"
                        className="formControl col-4"
                        onChange={handleChange}
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
                <div className="form-group row my-2 d-flex justify-content-center">
                    <label className="col-2 text-end" htmlFor="author">
                        Book author
                    </label>
                    <select
                        id="author"
                        name="author"
                        className="formControl col-4"
                        onChange={handleChange}
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
                <div className="form-group row my-2 d-flex justify-content-center">
                    <label className="col-2  text-end" htmlFor="availableCopies">
                        Available copies
                    </label>
                    <input
                        id="availableCopies"
                        name="availableCopies"
                        required
                        type="number"
                        className="formControl col-4"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className=" row  d-flex justify-content-center">
                    <div className="col-2 "></div>
                    <button id="submit" type="submit" className="btn btn-success col-4">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default BookForm;