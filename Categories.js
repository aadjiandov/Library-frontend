import React, {Component} from "react";

function Categories(props) {
    return (
        <div className="container mm-4 mt-5">
            <div className="row">
                <div className="row">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope={"col"}> Category</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((cat) => {
                            return (
                                <tr key={cat}>
                                    <td>{cat}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Categories;
