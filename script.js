function positions(firstPlace,secondPlace,lastPlace){
    let colocacao = [firstPlace,secondPlace,lastPlace];
    if(colocacao[0] == "Daniel"){
        colocacao[0] = "Daniel";
        colocacao[1] = secondPlace;
        colocacao[2] = lastPlace;
    }else if(colocacao[1] == "Daniel"){
        colocacao[0] = "Daniel";
        colocacao[1] = firstPlace;
        colocacao[2] = lastPlace;
    }else{
        colocacao[0] = firstPlace;
        colocacao[1] = "Daniel";
        colocacao[2] = secondPlace;
    }
    return "1ª - Colocado " + colocacao[0] + " 2ª - Colocado " + colocacao[1] + " 3ª - Colocado " + colocacao[2];
} 
console.log(positions("Junior","Maicon","Daniel"));
