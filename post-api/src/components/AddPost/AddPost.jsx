import React, { memo, useState } from "react";
import { apiBaseUrl } from "../../App";


function AddPost(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const { getPosts } = props;

    const createPostFormSubmitHandler = async (event) => {
        event.preventDefault();
        if (!title || !body) {
            alert("Please fill out all the fields");
            return;
        }
        const payload = {
            title: title,
            body: body
        }
        setLoading(true);
        await fetch(`${apiBaseUrl}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload),
        })
            .then(() => {
                setTitle("");
                setBody("");
                let $ = window.$;
                $("#create-todo").modal("hide");
                getPosts();
            });
            setLoading(false);
    }
    return (
        <div className="modal fade" id="create-todo">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Create Post</h4>
                    </div>
                    <div className="modal-body">
                        <form action="" method="POST" role="form" id="create-post-form" onSubmit={createPostFormSubmitHandler}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="post_title" placeholder="Title" />
                            </div>

                            <div className="form-group">
                                <label>Body</label>
                                <textarea name="" value={body} onChange={(event) => setBody(event.target.value)} id="post_body" cols="30" rows="10" placeholder="Body"
                                    className="form-control"></textarea>
                            </div>

                            <button type="submit" disabled={loading} className="btn btn-primary" id="post-create-btn" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(AddPost);