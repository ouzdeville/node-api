import EC from "../entity/ec";
import MoyenneEC from "../entity/moyenneEc";
import Note from "../entity/note";
import Evaluation from "../entity/evaluation";
import { Request, Response } from 'express';


export default class ECController {

    static create(req: Request, resp: Response) {
        
        let ec = new EC({
            nom: req.body.name,
            coef: req.body.coef,
            type:req.body.type,
            idUE: req.body.idUE,
            idProf: req.body.idProf
        });
        ec.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(ec);
        })

    }

    static createMoyenneEC(req: Request, resp: Response) {

        

        Note.find({idEtudiantPromo: req.body.idEtudiantPromo})
        .then((notes)=>{
            var valeur = 0
            notes.forEach((note)=>{
                Evaluation.findOne({_id: note.idEvalution})
                .then((evaluation)=>{
                    if(evaluation.type == "devoir"){
                        valeur += 0.3 * evaluation.valeur
                    }
                    else if(evaluation.type == "exam"){
                        valeur += 0.7 * evaluation.valeur
                    }
                })
            })

            var moyenneEC = new MoyenneEC({
                valeur: valeur,
                idEtudiantPromo: req.body.idEtudiantPromo,
                idEC: req.body.idEC
            })

            moyenneEC.save()
            .then(()=>{
                resp.status(200).json(moyenneEC)
            })
            .catch(()=>{

            })
        })
        .catch(()=>{
            resp.status(404)
        })

    }




    static getAllEC(req: Request, resp: Response) {
        EC.find((err: any, ec: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(ec);
            }
        });
    }

    static getECById(req: Request, resp: Response) {

        EC.findById(req.params.id, (err: any, ec: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(ec); }
        });
    }


    static updateECById(req: Request, resp: Response) {
        EC.findByIdAndUpdate(req.params.id, req.body, (err: any, ec: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deleteECById(req: Request, resp: Response) {
        EC.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}