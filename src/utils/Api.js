import axios from "axios";

const API = "https://youtube138.p.rapidapi.com/";

const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const fetchData = async (endPoint) => {
    try {
        const { data } = await axios.get(API + endPoint, options);
        return data;
    } catch (error) {
        console.error("fetchData" + error);
        return error;
    }
}

export default fetchData;