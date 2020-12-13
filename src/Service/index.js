import axios from 'axios';

export const fetchCountry = async (id) => {
  try {
    const { data } = await axios.get(
      `https://countries-api.herokuapp.com/countries/${id}`
    );

    return data;
  } catch (error) {
    console.log('Error trying to fetch the data', error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(
      `https://countries-api.herokuapp.com/countries/`
    );

    return data;
  } catch (error) {
    console.log('Error trying to fetch the data', error);
  }
};
