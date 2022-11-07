import UE from "../entity/ue";
import EtudiantPromo from "../entity/etudiantPromo";
import Note from "../entity/note";
import { Request, Response } from 'express';
import EC from "../entity/ec";


export default class UEController {

    static create(req: Request, resp: Response) {
        
        let ue = new UE({

            name:req.body.name,
            sigle: req.body.sigle,
            niveaux:req.body.niveaux,
            
        });
        ue.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(ue);
        })

    }


    static getAllue(req: Request, resp: Response) {
        UE.find((err: any, uediants: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(uediants);
            }
        });
    }

    static getueById(req: Request, resp: Response) {

        UE.findById(req.params.id, (err: any, ue: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(ue); }
        });
    }


    static updateueById(req: Request, resp: Response) {
        UE.findByIdAndUpdate(req.params.id, req.body, (err: any, ue: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deleteueById(req: Request, resp: Response) {
        UE.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}