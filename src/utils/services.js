import axios from 'axios';
export const BASE_URL = 'http://www.mocky.io/v2/5eb8fcb12d0000d088357f2a';

export async function getHotels()
{
    try{
        var data;
        const api = axios.create({
            baseURL: `${BASE_URL}`
        });

        await api.get(`/`).then(res => {
          data = JSON.parse(res.data.slice(0, -7) + ']');
        });
        return data;
    }
    catch(ex){
        throw ex;
    }
}