import Niveau from "../entity/niveau";
import { Request, Response } from 'express';


export default class NiveauController {

    static create(req: Request, resp: Response) {
        
        let niveau = new Niveau({

            name:req.body.name,
            sigle: req.body.sigle,
            promos:req.body.promo,
            
        });
        niveau.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(niveau);
        })

    }

    static getAllniveau(req: Request, resp: Response) {
        Niveau.find((err: any, niveaudiants: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(niveaudiants);
            }
        });
    }

    static getniveauById(req: Request, resp: Response) {

        Niveau.findById(req.params.id, (err: any, niveau: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(niveau); }
        });
    }


    static updateniveauById(req: Request, resp: Response) {
        Niveau.findByIdAndUpdate(req.params.id, req.body, (err: any, niveau: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deleteniveauById(req: Request, resp: Response) {
        Niveau.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}