import React from 'react';

const PostLoader: React.FC = () => (
  <div className="max-w-sm w-full mx-auto">
    <div className="animate-pulse flex">
      <div className="flex-1 space-y-20 py-10">
        <div className="h-35 bg-lightgrey rounded w-3/4 mb-30" />
        <div className="space-y-10">
          <div className="h-20 bg-lightgrey rounded" />
          <div className="h-20 bg-lightgrey rounded w-5/6" />
        </div>
        <div className="space-y-10">
          <div className="h-20 bg-lightgrey rounded w-3/6" />
          <div className="h-20 bg-lightgrey rounded w-6/6" />
          <div className="h-20 bg-lightgrey rounded w-4/6" />
          <div className="h-20 bg-lightgrey rounded w-5/6" />
        </div>
        <div className="space-y-10">
          <div className="h-20 bg-lightgrey rounded w-4/6" />
          <div className="h-20 bg-lightgrey rounded w-3/6" />
        </div>
      </div>
    </div>
  </div>
);

export default PostLoader;
