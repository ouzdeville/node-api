# node-api
destiné aux étudiants du M1 tdsi

# Reproduction du projet
1- mkdir node-api

2- cd node-api

3- npm init 

4- npm install --save-dev typescript nodemon @types/node concurrently

5- mkdir src

6- touch tsconfig.json
```json
{
    "include": ["src/**/*"],
    "compilerOptions": {
        "outDir": "dist",
        "target": "es6",
        "strict": true,
        "esModuleInterop": true,
        "module": "commonjs"
    }
}
```

7- enjoy by create source files in src.
8- Ajouter du code typeScript dans le fichier index.ts
9- Compiler avec *npx tsc* 
10- Regarder le contenu du nouveau répertoire *dist*  
11- Pour ajouter express, faire : npm install --save @types/express
12- creer le fichier server.ts dans *src* et y ajouter le code
13- dans *index.ts* créer une instance de server et lancer la méthode start();
14- npx tsc
15- node ./dist/index.js et tester
16- ajouter les scripts:
```json
"scripts": {
    "start": "npx tsc && node dist/index.js",
    "dev": "concurrently -n \"TS, Node\" \"npx tsc --watch\" \"nodemon dist/index.js\"",
    "test": "echo \"Error: no test specified\" && exit 1"

  },
```
## 17- installation de jest pour les unitaires
17-a : installer jest
```json
> npm install --save-dev jest
> npm install --save-dev @types/jest
> npm install --save-dev ts-jest
``` 
