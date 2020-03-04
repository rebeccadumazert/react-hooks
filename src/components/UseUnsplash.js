import React from 'react';
import { useUnsplashPhoto } from '../hooks/useUnsplashPhoto';
import { auth } from '../services/auth';

export const UseUnsplash = () => {
  const {
    error,
    isLoading,
    images: { results = [] },
  } = useUnsplashPhoto(auth, 'cat');
  const loader = isLoading && <div>LOADING DARLING...</div>;
  const errorElt = error && <div>ERROR HAPPENED</div>;
  return (
    loader ||
    errorElt || (
      <div>
        {results.map(({ urls: { small }, id }) => (
          <div key={id}>
            <img src={small} alt="cat" />
          </div>
        ))}
      </div>
    )
  );
};
