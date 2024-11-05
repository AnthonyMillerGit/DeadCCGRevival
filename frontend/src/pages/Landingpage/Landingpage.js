import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../services/api';
import { LandingPageContainer, PostCard, PostTitle, PostContent } from './Landingpage.styles';

const LandingPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      if (data && data.data) {
        setPosts(data.data);
      }
    };
    loadPosts();
  }, []);

  return (
    <LandingPageContainer>
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post.id}>
            <PostTitle>{post.Title || 'Untitled'}</PostTitle>
            <PostContent>
              {post.Content[0]?.children?.[0]?.text || 'No content available.'}
            </PostContent>
          </PostCard>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </LandingPageContainer>
  );
};

export default LandingPage;