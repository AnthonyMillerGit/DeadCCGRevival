// src/components/LandingPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../services/api';
import { LandingPageContainer, PostCard, PostTitle, PostContent, ReadMoreButton } from './Landingpage.styles';

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
              {post.Content[0]?.children?.[0]?.text.slice(0, 200) || 'No content available.'}...
            </PostContent>
            <Link to={`/posts/${post.id}`}>
              <ReadMoreButton>Read Full Article</ReadMoreButton>
            </Link>
          </PostCard>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </LandingPageContainer>
  );
};

export default LandingPage;