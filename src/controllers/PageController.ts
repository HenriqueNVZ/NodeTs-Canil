import type { Request, Response } from "express";
import {Pet} from '../models/Pet.ts'
import { createMenuObject } from "../helpers/createMenuObject.ts"; 

export const home = (req: Request, res:Response) =>{
    let list = Pet.getAll();
    res.render('Pages/page',{
        menu:createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req: Request, res:Response) =>{
    let list = Pet.getFromType('dog');
    res.render('Pages/page',{
        menu:createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req: Request, res:Response) =>{
    let list = Pet.getFromType('cat');
    res.render('Pages/page',{
            menu:createMenuObject('cat'),
            banner:{
                title: 'Gatos',
                background: 'banner_cat.jpg'
            },
            list
    });
}

export const fishes = (req: Request, res:Response) =>{
    let list = Pet.getFromType('fish');
    res.render('Pages/page',{
            menu:createMenuObject('fish'),
            banner: {
                title: 'Peixes',
                background: 'banner_fish.jpg',
            },
            list
    });
}
