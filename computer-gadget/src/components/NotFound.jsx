import React from 'react';

function NotFound() {
  return (
    <div className="pb-4">
      <h1>404 - Page Not Found</h1>
      <p className="text-secondary fs-5">Oops! The page you're looking for doesn't exist.</p>
      <a className="btn btn-dark" to="/">Go Home</a> add link to line 8
      
    </div>
  )
}

export default NotFound
