
function SmokeAndMirrors(){
    Espelho.add(EdgeH1);
    Espelho.add(EdgeH2);
    Espelho.add(EdgeV1);
    Espelho.add(EdgeV2);

    EdgeH1.rotateY(-Math.PI/2);
    EdgeH2.rotateY(-Math.PI/2);
    EdgeV1.rotateY(-Math.PI/2);
    EdgeV2.rotateY(-Math.PI/2);

    EdgeH1.position.y+=2;
    EdgeH2.position.y-=2;
    EdgeV1.position.x+=1.5;
    EdgeV2.position.x-=1.5;
}

function RemoveMirror(){cena.remove(Espelho);}

