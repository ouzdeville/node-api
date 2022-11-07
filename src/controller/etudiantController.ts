import Etudiant from "../entity/etudiant";
import EtudiantPromo from "../entity/etudiantPromo";
import { Request, Response } from 'express';


export default class EtudiantController {

    static create(req: Request, resp: Response) {
        
        let etu = new Etudiant({

            name:req.body.name,
            phone: req.body.phone,
            email:req.body.email,
        });
        etu.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(etu);
        })

    }

    static createEtuPromo(req: Request, resp: Response) {
        
        let etu = new EtudiantPromo({

            name:req.body.name,
            idEtudiant: req.body.idEtudiant,
            idCohorte:req.body.idCohorte,
        });
        etu.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(etu);
        })

    }

    static getAllEtu(req: Request, resp: Response) {
        Etudiant.find((err: any, etudiants: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(etudiants);
            }
        });
    }

    static getEtuById(req: Request, resp: Response) {

        Etudiant.findById(req.params.id, (err: any, etu: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(etu); }
        });
    }


    static updateEtuById(req: Request, resp: Response) {
        Etudiant.findByIdAndUpdate(req.params.id, req.body, (err: any, etu: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deleteEtuById(req: Request, resp: Response) {
        Etudiant.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}