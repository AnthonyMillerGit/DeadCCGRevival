import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPosts } from '../../services/api';
import { PostDetailContainer, PostTitle, PostContent } from './PostDetail.styles';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const data = await fetchPosts();
      if (data && data.data) {
        const foundPost = data.data.find((p) => p.id === parseInt(id));
        setPost(foundPost);
      }
    };
    loadPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <PostDetailContainer>
      <PostTitle>{post.Title}</PostTitle>
      <PostContent>
        {post.Content.map((block, index) => (
          <p key={index}>{block.children?.[0]?.text}</p>
        ))}
      </PostContent>
    </PostDetailContainer>
  );
};

export default PostDetail;