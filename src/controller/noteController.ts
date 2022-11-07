import Note from "../entity/note";
import { Request, Response } from 'express';


export default class NoteController {

    static create(req: Request, resp: Response) {
        
        let note = new Note({

            valeur:req.body.valeur,
            idEtudiantPromo: req.body.idEtudiantPromo,
            idEvaluation:req.body.idEvaluation,
            
        });
        note.save((err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send(note);
        })

    }

    static getAllnote(req: Request, resp: Response) {
        Note.find((err: any, notediants: any) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.send(notediants);
            }
        });
    }

    static getnoteById(req: Request, resp: Response) {

        Note.findById(req.params.id, (err: any, note: any) => {
            if (err) { resp.status(500).send(err); }
            else { resp.send(note); }
        });
    }


    static updatenoteById(req: Request, resp: Response) {
        Note.findByIdAndUpdate(req.params.id, req.body, (err: any, note: any) => {
            if (err) resp.status(500).send(err);
            else {
                resp.send("Successfuly updated book");
            }
        })

    }

    static deletenoteById(req: Request, resp: Response) {
        Note.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) resp.status(500).send(err);
            else resp.send("Successfuly deleted Book");
        });
    }




}