import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;


const getScatsData = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scats = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          scats.push(res.data[fbKey]);
        });
      }
      resolve(scats);
    })
    .catch(err => reject(err));
});

const deleteScat = scatId => axios.delete(`${firebaseUrl}/scats/${scatId}.json`);

const getSingleScat = scatId => axios.get(`${firebaseUrl}/scats/${scatId}.json`);

export default {
  getScatsData,
  deleteScat,
  getSingleScat,
};
