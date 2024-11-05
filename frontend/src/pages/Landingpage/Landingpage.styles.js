import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #EAEAEA; /* Light Gray for background */
  min-height: 100vh;
`;

export const PostCard = styled.div`
  background-color: #252A34; /* Dark Gray-Blue for card background */
  color: #EAEAEA; /* Light Gray for text */
  width: 80%;
  max-width: 800px;
  margin: 1rem 0;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostTitle = styled.h2`
  color: #08D9D6; /* Teal for title */
  margin-bottom: 0.5rem;
`;

export const PostContent = styled.p`
  color: #EAEAEA; /* Light Gray for content */
  line-height: 1.6;
`;

export const ReadMoreButton = styled.button`
  background-color: #08D9D6;
  color: #EAEAEA;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF2E63;
  }
`;