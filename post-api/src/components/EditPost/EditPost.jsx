import React, { memo, useEffect, useState } from "react";
import { apiBaseUrl } from "../../App";
function EditPost(props) {
    const { isEditData, getPosts } = props;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (isEditData) {
            setTitle(isEditData.title);
            setBody(isEditData.body);
        }
    }, [isEditData]);

    const editFormSumbitHandler = async (event) => {
        event.preventDefault();
        if (!title || !body) {
            alert("Please fill out the fields");
            return;
        }
        else {
            setLoader(true);
            const payload = {
                title,
                body
            };
            await fetch(`${apiBaseUrl}/posts/${isEditData.id}`,{
                method : "PUT",
                headers : {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(payload)
            })
            .then(()=>{
                setTitle("");
                setBody("");
                let $ = window.$;
                $("#edit-post").modal("hide");
                getPosts();
            })
            .catch(()=>console.error);
            setLoader(false);
        };
    };

    return (
        <div className="modal fade" id="edit-post">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Edit Post</h4>
                    </div>
                    <div className="modal-body">
                        <form action="" method="POST" role="form" id="edit-post-form" onSubmit={editFormSumbitHandler}>
                            <input type="hidden" name="post_id" id="edit_post_id" />
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" id="edit_post_title" placeholder="Title" />
                            </div>

                            <div className="form-group">
                                <label>Body</label>
                                <textarea name="" value={body} onChange={(event) => setBody(event.target.value)} id="edit_post_body" cols="30" rows="10" placeholder="Body"
                                    className="form-control"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(EditPost);