import type { Request, Response } from "express";
import {Pet} from '../models/Pet.ts';
import { createMenuObject } from "../helpers/createMenuObject.ts";

export const search = (req: Request, res:Response) =>{
    let query: string = req.query.q as string;
    let list = Pet.getFromName(query)

    res.render('Pages/page',{
        menu:createMenuObject(''),
        list,
        query,
    });
}
