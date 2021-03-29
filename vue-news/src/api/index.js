import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUserInfo(userName) {
  return axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
}

function fetchItemNumber(itemNumber) {
  return axios.get(`https://api.hnpwa.com/v0/item/${itemNumber}.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchItemNumber,
  fetchList,
};
