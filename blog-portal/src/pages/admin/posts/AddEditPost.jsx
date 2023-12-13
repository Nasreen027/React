import { Button, Form, Input, Typography, message } from 'antd'
import React from 'react'
import { useMutation } from 'react-query';
import { PostServices } from '../../../services/post.services';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant';

function AddEditPost() {
    const {Title} = Typography;
    const navigate = useNavigate();
    const {mutateAsync: addPostRequest, isLoading: addPostLoader} = useMutation(PostServices.addPost);
    const [messageApi, contextHolder] = message.useMessage();
    
    const onFinish = (values)=>{
        console.log(values,'values');
        addPostRequest(values,{
            onSuccess:()=>{
                messageApi.success("Post added successfully!");
                setTimeout(()=>{
                    navigate(AuthenticatedRoutesNames.POSTS);
                },1000)
            }
        })   
    }
  return (
    <div>
        {contextHolder}
        <Title level={3}>Create Post</Title>
        <Form name="basic" autoComplete="off" onFinish={onFinish}>
                <Form.Item
                    name="post_title"
                    rules={[
                        {
                            required: true,
                            message: "Please input your post title!",
                        },
                    ]}
                >
                    <Input placeholder="Post Title" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Create Post
                    </Button>
                </Form.Item>
            </Form>
    </div>
  )
}

export default AddEditPost