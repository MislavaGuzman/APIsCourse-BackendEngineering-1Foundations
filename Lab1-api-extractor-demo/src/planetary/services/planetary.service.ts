import { envs } from '../../config/config';
import { NasaApodResponse } from '../interface/planetary.interface';

export async function fetAstronomyPicture(): Promise<NasaApodResponse> {

    const url = `${envs.NASA_BASE_URL}?api_key=${envs.NASA_API_KEY}`;

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} `);
    }
    const data: NasaApodResponse = await response.json();
    return data;

}