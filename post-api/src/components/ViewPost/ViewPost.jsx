import React, { memo } from "react";

function ViewPost(){
    return(
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
           <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    );
}
export default memo(ViewPost);