import React from 'react';
import { SingleArticle } from './Screens/SingleArticle/SingleArticle';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      {/* Main Content */}
      <div className="w-full">
        <SingleArticle />
      </div>
    </div>
  );
};

export default BlogPage; 