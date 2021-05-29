function onMouseClick( event ) { //RAycaster detetor de clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    var intersectM,intersectB1,intersectB2, intersectL, intersectLivro, intersectChst, intersectsJITB, intersectD1, intersectKH, intersectPdst, intersectAst;
    //raycaster.
	mouse.set( 
        ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.width ) * 2 - 1, 
        - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1 
      );

	raycaster.setFromCamera( mouse, camara );
	intersectM = raycaster.intersectObject(Espelho);
	if(intersectM.length!=0){
        if(intersectM[0].distance<=10){cena.add(SadFace); setTimeout(() => alert("Meh."),500); setTimeout(() => cena.remove(SadFace),600);}  
	}
    intersectB1 = raycaster.intersectObject(ButtonLightSala1);
	if(intersectB1.length!=0){
        if(intersectB1[0].distance<=10)
        {
            if(ButtonLightSala1State==0) { cena.remove(LightBoxluz); ButtonLightSala1State=1; }
            else if(ButtonLightSala1State==1) { cena.add(LightBoxluz); ButtonLightSala1State=0; }
            console.log("B1: " + ButtonLightSala1State)
        }   
	}
    intersectB2 = raycaster.intersectObject(ButtonLightSala2);
	if(intersectB2.length!=0){
        if(intersectB2[0].distance<=10)
        {
            if(ButtonLightSala2State==0) { chao2.remove(LightBoxluz2); ButtonLightSala2State=1; }
            else if(ButtonLightSala2State==1) { chao2.add(LightBoxluz2); ButtonLightSala2State=0; }
            console.log("B2: " + ButtonLightSala2State)
        }   
	}
    intersectL = raycaster.intersectObject(ButtonCandeeiro);
	if(intersectL.length!=0){
        if(intersectL[0].distance<=12)
        {
            if(ButtonCandeeiroState==0) { Bulb.remove(Lamplight); ButtonCandeeiroState=1; }
            else if(ButtonCandeeiroState==1) { Bulb.add(Lamplight); ButtonCandeeiroState=0; }
        }   
	}
    intersectLivro = raycaster.intersectObject(TopLivro);
	if(intersectLivro.length!=0){
        if(intersectLivro[0].distance<=10)
        {
            alert("You open up the book on the last page and read the following entry:\n"
            + "\t«February 20, 2021: I can't take this anymore, how many days have i've been cooped up in here? How does the outside look like? I heard in thye TV you'll be able to get out in 2 days... \n\nI need to get out of here!»"
            + "\n'I think that was 2 days ago, but i dont remember writting this.'");
            if(ChestKeyObtained==0)
            {
                alert("A small key falls out of the book. You've obtained Chest Key!"); //this only repeats once
                ChestKeyObtained=1;
            }
        } 
	}
    intersectChst = raycaster.intersectObject(ChestDoor);
    if(intersectChst.length!=0){
        if(intersectChst[0].distance<=10 && ChestKeyObtained>=1)
        {
            if(ChestKeyObtained==1){alert("You've used Chest Key."); ChestKeyObtained=2;}
            if(AbrirChest==0){AbrirChest=1;} else if(AbrirChest==2){AbrirChest=3;}
        }
        else if(intersectChst[0].distance<=10 && (ChestKeyObtained==0)){ alert("The Chest is locked! Find it's key!"); } 
	}
    intersectsJITB = raycaster.intersectObject(JackInABoxLid);
    if(intersectsJITB.length!=0){
        if(intersectsJITB[0].distance<=15)
        {
            if(AbrirJIAB==0){AbrirJIAB=1;} else if(AbrirJIAB==2){AbrirJIAB=3;}
        } 
	}
    intersectD1 = raycaster.intersectObject(Hodor);
    if(intersectD1.length!=0){
        if(intersectD1[0].distance<=12 && (ChavePorta1State==1 || ChavePorta1State==2))
        {
            if(ChavePorta1State==1){alert("You have unlocked the Door!"); UnloadF1(); ImportedAssetLoaderF2(); ChavePorta1State=2; mainAudio.stop(); mainAudio2.play();}
            if(AbrirPorta==0){AbrirPorta=1;} else if(AbrirPorta==3){AbrirPorta=4;}
        }
        else if(intersectD1[0].distance<=12 && (ChavePorta1State==0)){ alert("The door is locked! Find it's key!"); } 
	}
    intersectKH = raycaster.intersectObject(ButtonDoor2);
    if(intersectKH.length!=0){
        if(intersectKH[0].distance<=12){ClickBD2=1;}
        if(intersectKH[0].distance<=12 && (KeyCard1State==1 || KeyCard1State==2) && (KeyCard2State==1 || KeyCard2State==2))
        {
            if(KeyCard1State==1 && KeyCard2State==1){alert("You have unlocked the Second Door!"); UnloadF2(); ImportedAssetLoaderF3(); KeyCard1State=2; KeyCard1State=2; mainAudio2.pause(); video.muted=false;}
            if(AbrirPorta2==0){AbrirPorta2=1;} else if(AbrirPorta2==3){AbrirPorta2=4;}
        }
        else if(intersectKH[0].distance<=12 && ((KeyCard1State==0) || (KeyCard1State==0))){ alert("The door is locked! Find The Two Keycards!"); } 
	}
    intersectPdst = raycaster.intersectObject(Pedestal);
	if(intersectPdst.length!=0){
        if(intersectPdst[0].distance<=12)
        {
            if(KeyCard1State==0)
            { 
                alert("Oh... Weird, what's this doing here?\n\tYou have aquired 'Keycard 1'!"); 
                KeyCard1State=1; 
                KeyCard1.rotateY(-Math.PI/2);
                KeyCard1.position.x-=9.2;
                KeyCard1.position.z+=18;
                KeyCard1.scale.x-=1.5;
                KeyCard1.scale.y-=1;
                KeyCard1.scale.z+=3;
                KeyCard1.position.y+=3;
            }
        }   
	}
    intersectAst = raycaster.intersectObject(Astronauta);
	if(intersectAst.length!=0){
        if(intersectAst[0].distance<=10){alert("The Astonaut says:'I Have no idea what Happened out here, but i am sure gald to find someone!'\nSame... i guess!")}  
	}
}