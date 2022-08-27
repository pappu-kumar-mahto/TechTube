import Axios from 'axios'

const Base_Url = 'https://youtube-v31.p.rapidapi.com/'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_TECHTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}

export const fetchFromAPI = async (url) => {
        const { data } = await Axios.get(`${Base_Url}/${url}`, options)
        return data
     
}