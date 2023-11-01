import { Button, Col, Image, Row, Table } from 'antd'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { PostServices } from '../../../services/post.services'
import { useNavigate } from 'react-router-dom'
import { AuthenticatedRoutesNames } from '../../../utilities/util.constant'

function AdminPosts() {
    const navigate = useNavigate();
    const { data: postsData, isLoading: postsDataLoader } = useQuery(
        "posts",
        () => PostServices.getPosts()
    );

    const postsDataMemo = useMemo(() =>
        postsData?.data?.results,
        [postsData?.data?.results]
    );

    const columns = [
        {
            title: "Id",
            key: "id",
            render: (singlePost) => {
                return singlePost.id
            }
        },
        {
            title: "Title",
            key: "post_title",
            render: (singlePost) => {
                return singlePost.post_title
            }
        },
        {
            title: "Author",
            key: "post_author",
            render: (singlePost) => {
                return singlePost.post_author
            }
        },
        {
            title: "Image",
            key: "image",
            height: 10,
            render: (singlePost) => {
                return <Image src={singlePost.image} alt={singlePost?.image} />
            }
        },
        {
            title: "Description",
            key: "post_content",
            render: (singlePost) => {
                return singlePost.post_content
            }
        },
        {
            title: "Posted On",
            key: "post_date",
            render: (singlePost) => {
                return singlePost.post_date
            }
        },
        {
            title: "Edit",
            key: "edit",
            render: (singleData) => {
                return (
                    <Button type='primary'>Edit</Button>
                )
            }
        },
        {
            title: "Delete",
            key: "delete",
            render: (singleCategory) => {
                return (
                    <Button type='primary' danger>Delete</Button>
                )
            }
        }
    ]
    return (
        <div>
            <Row
                type="flex"
                justify="space-between"
                align="middle"
                style={{ marginBottom: "20px" }}
            >
                <Col>
                    <h3
                        style={{
                            marginBottom: "0",
                            marginTop: "100",
                        }}
                    >
                        Posts
                    </h3>
                </Col>
                <Col>
                    <Button
                        type="primary"
                        onClick={() => {
                            navigate(AuthenticatedRoutesNames.POST_ADD)
                        }}
                    >
                        + Add Posts
                    </Button>
                </Col>
            </Row>
            <Table
                loading={postsDataLoader}
                columns={columns}
                dataSource={postsDataMemo}
            />
            ;
        </div>
    )
}

export default AdminPosts