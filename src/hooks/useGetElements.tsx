import {useEffect, useState} from 'react';
import getElements from '../services/getElements';
import {ElementProp} from '../interfaces';

function useGetElements() {
  const [elements, setElements] = useState<ElementProp[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getElements();
        setElements(response);
      } catch (error: any) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    elements,
    isLoading,
    isError,
  };
}

export default useGetElements;
