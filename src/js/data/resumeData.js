import axios from 'axios';

const getResume = () => new Promise((resolve, reject) => {
  axios
    .get('https://personal-site-55542.firebaseio.com/resume.json')
    .then((data) => {
      const resumeUrl = data.data.url;
      resolve(resumeUrl);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getResume };
