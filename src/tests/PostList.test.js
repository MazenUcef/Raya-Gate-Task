// __tests__/PostList.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { GlobalContext } from '../context/GlobalState'; // Mock the GlobalContext
import PostList from '../components/PostList';

// Mock the GlobalContext data
const mockGlobalContextData = {
  handlePostClick: jest.fn(),
  closeModal: jest.fn(),
  showModal: false,
  comments: [],
  selectedPost: null,
  loadPost: jest.fn(),
  filteredPosts: [
    { id: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, title: 'Post 2', body: 'Body 2' },
    { id: 3, title: 'Post 3', body: 'Body 3' },
    { id: 4, title: 'Post 4', body: 'Body 4' },
    { id: 5, title: 'Post 5', body: 'Body 5' },
    { id: 6, title: 'Post 6', body: 'Body 6' },
    { id: 7, title: 'Post 7', body: 'Body 7' },
    { id: 8, title: 'Post 8', body: 'Body 8' },
    { id: 9, title: 'Post 9', body: 'Body 9' },
    { id: 10, title: 'Post 10', body: 'Body 10' },
  ],
};

describe('PostList Component', () => {
  it('renders correctly', () => {
    // Arrange: Render the PostList component with mockGlobalContextData
    const { getByText } = render(
      <GlobalContext.Provider value={mockGlobalContextData}>
        <PostList />
      </GlobalContext.Provider>
    );

    // Act: No specific action needed

    // Assert: Check if key elements are present in the rendered output
    expect(getByText('Post Lists')).toBeInTheDocument();
    expect(getByText('Post 1')).toBeInTheDocument();
    expect(getByText('Post 2')).toBeInTheDocument();
    // Add more expectations as needed
  });

  it('renders pagination buttons', () => {
    // Arrange: Render the PostList component with mockGlobalContextData
    const { getByText } = render(
      <GlobalContext.Provider value={mockGlobalContextData}>
        <PostList />
      </GlobalContext.Provider>
    );

    // Act: No specific action needed

    // Assert: Check if pagination buttons are rendered correctly
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    // Add more expectations for pagination buttons as needed
  });

  it('triggers handlePostClick when a post is clicked', () => {
    // Arrange: Render the PostList component with mockGlobalContextData
    const { getByText } = render(
      <GlobalContext.Provider value={mockGlobalContextData}>
        <PostList />
      </GlobalContext.Provider>
    );

    // Act: Simulate a click event on a post element
    const post1 = getByText('Post 1');
    fireEvent.click(post1);

    // Assert: Check if handlePostClick is called with the expected post object
    expect(mockGlobalContextData.handlePostClick).toHaveBeenCalledWith(mockGlobalContextData.filteredPosts[0]);
  });

  // Add more test cases as needed
});
