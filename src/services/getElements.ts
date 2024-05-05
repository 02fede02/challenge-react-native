import axios from 'axios';
import {ElementProp} from '../interfaces';

const getElements = async (): Promise<ElementProp[]> => {
  const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw error.message;
  }
};

export default getElements;
