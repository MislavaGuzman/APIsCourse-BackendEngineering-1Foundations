import { Request, Response } from 'express';
import { fetchAstronomyPicture } from '../services/planetary.service';
import { error } from 'node:console';

export const getSpaceToday = async (req: Request, res: Response ) => {
    try {
        const spaceData = await fetchAstronomyPicture();

        const id = 12312

        res.status(200).json({
            success: true,
            data: {
                titulo_nuevo: spaceData.title,
                fecha: spaceData.date,
                descripcion: spaceData.explanation,
                personalizado: `${id} Este es ID personalizado`,
                imagen: spaceData.url,
                autor: spaceData.copyright,
            }
        });

    } catch (err) {
        console.error(`Ocurrio un error`, error),
        res.status(500).json({
            success: false,
            message: 'Error de servidor.'
        })

    }
}






