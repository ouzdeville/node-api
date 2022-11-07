import Prof from "../entity/prof";
import { Request, Response } from 'express';


export default class ProfController {

    static create(req: Request, resp: Response) {
        
        let prof = new Prof({

            name:req.body.name,
            phone: req.body.phone,
            email:req.body.email,
            numeroCompte:req.body.numeroCompte,
        });
        prof.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(prof);
        })

    }

    static getAllprof(req: Request, resp: Response) {
        Prof.find((err: any, profdiants: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(profdiants);
            }
        });
    }

    static getprofById(req: Request, resp: Response) {

        Prof.findById(req.params.id, (err: any, prof: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(prof); }
        });
    }


    static updateprofById(req: Request, resp: Response) {
        Prof.findByIdAndUpdate(req.params.id, req.body, (err: any, prof: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deleteprofById(req: Request, resp: Response) {
        Prof.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}