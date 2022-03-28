import express from "express";
import BookController from "../controller/BookController";

export default class MobileRouting {

    constructor( private app: any){
        this.loadPath();
    }

    public loadPath(): void{
        /* Requête HTTP GET http://localhost:8700/books/id */
        this.app.get("/books/:id", BookController.getBookById);
        
        /* Requête HTTP POST http://localhost:8700/books */
        this.app.get("/books", BookController.getAllBooks);
        /* Requête HTTP PUT http://localhost:8700/books/id */
        this.app.put("/books/:id", BookController.updateBookById);
        
        /* Requête HTTP DELETE http://localhost:8700/books/id */
        this.app.delete("/books/:id", BookController.deleteBookById);
        
        

    }

}