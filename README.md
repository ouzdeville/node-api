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