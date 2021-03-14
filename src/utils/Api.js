import axios from 'axios';
import switchCase from './switch';

const apiUrl = process.env.REACT_APP_MIBIBICI_SERVICE;
const apiV1 = process.env.REACT_APP_MIBICI_VERSION;
const en = process.env.REACT_APP_MIBICI_LANGUAGE_EN;
const es = process.env.REACT_APP_MIBICI_LANGUAGE_ES;

const endpointBase = `${apiUrl}/${apiV1}`;

const languageCase = switchCase({
  en,
  es,
})('es');
/*
 * Api singleton
 */
const Api = {
  getStationsInformation: (language) => axios.get(`${endpointBase}/${languageCase(language)}/station_information`),
  getStationsStatus: (language) => axios.get(`${endpointBase}/${languageCase(language)}/station_status`),
};

export default Api;
