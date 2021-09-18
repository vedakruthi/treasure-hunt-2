class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("white");
        text(code,300,300)
        //add code to return true if correct answer entered.

        if(actualCode === enteredCode.toUpperCase())
        return true;
        else
        return false;
    }
}
