var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

//Fond
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(10,10,380,380);    //fillRect(startx, starty, Largeur, hauteur)
ctx.fill();                     // Application du remplissage

// Barre gauche
ctx.beginPath();              // Début d'un autre chemin
ctx.lineTo(2,2);
ctx.lineTo(2,398);
ctx.stroke();

// Soucoupe

ctx.beginPath();
ctx.moveTo(170,180);                       // point de départ de la courbe
ctx.quadraticCurveTo(200,100,230,180);    //quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.fillStyle = "white";
ctx.fill();                               // Application du remplissage

ctx.beginPath();
ctx.globalCompositeOperation = "source-over";
ctx.moveTo(120,200);                       // point de départ de la courbe
ctx.quadraticCurveTo(200,150,280,200);    //quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.fillStyle = "#E0E1F3";
ctx.fill();                               // Application du remplissage

ctx.beginPath();
ctx.globalCompositeOperation = "source-over";
ctx.moveTo(120,200);                       // point de départ de la courbe
ctx.quadraticCurveTo(200,250,280,200);    //quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.fillStyle = "#E0E1F3";
ctx.fill();                               // Application du remplissage
