import Filiere from "../entity/filiere";
import { Request, Response } from 'express';


export default class FiliereController {

    static create(req: Request, resp: Response) {
        
        let filiere = new Filiere({

            name:req.body.name,
            sigle: req.body.sigle,
            niveaux:req.body.niveaux,
            
        });
        filiere.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(filiere);
        })

    }

    static getAllfiliere(req: Request, resp: Response) {
        Filiere.find((err: any, filierediants: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(filierediants);
            }
        });
    }

    static getfiliereById(req: Request, resp: Response) {

        Filiere.findById(req.params.id, (err: any, filiere: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(filiere); }
        });
    }


    static updatefiliereById(req: Request, resp: Response) {
        Filiere.findByIdAndUpdate(req.params.id, req.body, (err: any, filiere: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deletefiliereById(req: Request, resp: Response) {
        Filiere.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}