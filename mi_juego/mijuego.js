function imprimirMatriz (M) {
  var n = M.length;
  for (var i = 0; i < n; i++) {
        console.log(M[i]) ; 
  }  
} 

function obtienerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}

function dibujarHombre(n){
  var hombre =  ["_____________\n",
                         "   |\n",
                        "   |\n",
                          "   |\n",
                         "   O\n",
                          "  /|\\\n",
                         "  / \\\n",
                         "          ",
                         "          ",
                         "___"];

  for (var i=0; i < 10-n; i++){
    console.log(hombre[i]);

  }
}

function dibujoAhorcado(){
  var intentos=10;
  var palabra=obtienerPalabraSecreta();
  var palSeleccionada=[];

  for (var i=0; i < palabra.length;i++){
    palSeleccionada.push('_');

  }
    while(intentos > 0){
     var reemplazon=palSeleccionada.indexOf('_');
     if (reemplazon ==-1){
       document.write("Hurra!!!\nGanaste!! :) :)");
       break;
     }
    var caracter=prompt("Adivina la palabra\nPara lo cual ingresa un caracter: "+ palSeleccionada).toLowerCase();
    var flag =false;

    for(var i=0; i < palSeleccionada.length; i++){
      if(palabra[i] == caracter){
      palSeleccionada [i] = caracter;
      flag = true;
      }
    }

    if (flag==false){
      console.log('Error!!! \nIntenta con otro caracter');
      intentos--;
      if (intentos>0){
        dibujarHombre(intentos);
      }
    }
  else{

    console.log('Acertaste!!');
  }

}
  if (intentos == 0){
    document.write ("Perdiste!!! Vuelve a intentarlo -----> La palabra era: " + palabra.join(''));
  }
}
dibujoAhorcado();