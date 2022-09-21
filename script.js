
var score = "";

var sound = new Howl({
    src: ['sound.mp3']
  });
  
  sound.play();



function addbola(){
    var bola = document.createElement("div");
    bola.setAttribute ("class", "bola");

    var p1 = Math.floor(Math.random() * 1200);
    var p2 = Math.floor(Math.random() * 1000);
    console.log (p1);
    bola.setAttribute ("style", "left:" +p1+ "px; top:" +p2+ "px;");
    bola.setAttribute ("onclick", "estourar(this)");

    document.body.appendChild(bola);

}

function estourar (el) {
    var del = document.body.removeChild(el);
    if(del){
        score++;
       
        document.getElementById("score").innerHTML = "<h2>Pontos: "+score+"</h2>";
        sound.play();
    }

}
function iniciar(){
    setInterval(addbola,500);

}