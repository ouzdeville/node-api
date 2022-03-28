import Calcul from "../src/calcul";

describe("Test Calcul", () =>{

    it("tout ce que l'on veut", function(){
        let a:number=3;
        let b:number=10;
        let expected:number=13;
        expect(Calcul.somme(a,b)).toBe(expected);
    });

});