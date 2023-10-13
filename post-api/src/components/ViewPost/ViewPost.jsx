import React, { memo } from "react";

function ViewPost(props) {
    const { posts, deletePostBtnHandler, editPostBtnHandler } = props;

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Post Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="todos-listing">
                {posts?.map((singlePost) => {
                    const { id, userId, title } = singlePost;
                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{userId}</td>
                            <td>{title}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={(event)=> editPostBtnHandler(event,id)}
                                >
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={(event) => deletePostBtnHandler(event, id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })};
            </tbody>
        </table>
    );
}
export default memo(ViewPost);