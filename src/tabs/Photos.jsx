import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button, Loader } from 'components';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');

  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hendleSearch = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };

  useEffect(() => {
    if (!query) return;
    const fetchPhotos = async () => {
      setIsLoading(true);
      try {
        const response = await getPhotos(query, page);
        setIsLoading();
        setPhotos(pre => [...pre, ...response.photos]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const hendleClick = () => {
    setPage(pre => pre + 1);
  };
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form addTodos={hendleSearch} />
      <PhotosGallery photos={photos} />
      <Button onClick={hendleClick}>Load more</Button>
      {isLoading && <Loader />}
    </>
  );
};
