import express from "express";
import BookController from "../controller/BookController";
import EtudiantController from "../controller/etudiantController";
import UserController from "../controller/userController"
import authMiddleware from "../midlleware/authMiddleware";

export default class MobileRouting {

    constructor(private app: any) {
        this.loadPath();
    }

    public loadPath(): void {

        this.app.post('/user', UserController.create);
        this.app.get('/user/refresh_token', authMiddleware.validateUserToken, UserController.refreshToken);
        this.app.post('/user/verify_code', authMiddleware.validateUserToken, UserController.verifyCode);

        /* Requête HTTP GET http://localhost:8700/books/id */
        this.app.get("/books/:id", authMiddleware.validateUserToken,BookController.getBookById);
        /* Requête HTTP POST http://localhost:8700/books */
        this.app.get("/books", authMiddleware.validateUserToken, BookController.getAllBooks);
        /* Requête HTTP PUT http://localhost:8700/books/id */
        this.app.put("/books/:id", authMiddleware.validateUserToken, BookController.updateBookById);
        /* Requête HTTP DELETE http://localhost:8700/books/id */
        this.app.delete("/books/:id", authMiddleware.validateUserToken, BookController.deleteBookById);
        
        /* Requête HTTP GET http://localhost:8700/etudiants/id */
        this.app.get("/etudiants/:id", authMiddleware.validateUserToken,EtudiantController.getEtuById);
        /* Requête HTTP POST http://localhost:8700/etudiants */
        this.app.get("/etudiants", authMiddleware.validateUserToken, EtudiantController.getAllEtu);
        /* Requête HTTP PUT http://localhost:8700/etudiants/id */
        this.app.put("/etudiants/:id", authMiddleware.validateUserToken, EtudiantController.updateEtuById);
        /* Requête HTTP DELETE http://localhost:8700/etudiants/id */
        this.app.delete("/etudiants/:id", authMiddleware.validateUserToken, EtudiantController.deleteEtuById);
    }

}