import { useReducer, useEffect } from 'react';
import axios from 'axios';

const DEFAULT_STATE = {
  isLoading: false,
  images: [],
  error: null,
};

const ACTION_TYPE = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOADING:
      return { ...DEFAULT_STATE, isLoading: true };
    case ACTION_TYPE.ERROR:
      return { ...DEFAULT_STATE, error: action.payload };
    case ACTION_TYPE.SUCCESS:
      return { ...DEFAULT_STATE, images: action.payload };
    default:
      return state;
  }
};

export const useUnsplashPhoto = (secret, query) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  useEffect(() => {
    const fetchQuery = async () => {
      try {
        dispatch({ type: ACTION_TYPE.LOADING });
        const { data: images } = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            headers: {
              Authorization: `Client-ID ${secret}`,
            },
            params: {
              query,
            },
          }
        );
        dispatch({ type: ACTION_TYPE.SUCCESS, payload: images });
      } catch (e) {
        dispatch({ type: ACTION_TYPE.ERROR, payload: e });
      }
    };
    fetchQuery();
  }, [secret, query]);
  return state;
};
