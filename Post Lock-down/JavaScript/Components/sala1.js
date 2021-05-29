function addSala1(){
    //Other walls
    cena.add(chao);
    chao.add(WallF);
    chao.add(WallB);
    chao.add(WinView); //Window view from right wall
    chao.add(Sand);

    WallF.position.z -= 15;
    WallB.position.z += 15;
    WallF.position.y += 7.5;
    WallB.position.y += 7.5;
    chao.position.y -= 7.5;
    ceiling.position.y += 7.5;

    WinView.position.x += 25;
    WinView.position.y += 7.5;
    Sand.position.x += 32.5;
    Sky.position.x += 32.5;
    Sky.position.y += 7.5;

    //WALL Right
    cena.add(Bar3);
    Bar3.add(WWLeft);
    Bar3.add(WWRight);
    Bar3.add(WWUnder);
    Bar3.add(WWUpper);
    Bar3.add(Bar1);
    Bar3.add(Bar2);
    Bar3.add(Bar4);
    Bar3.add(Bar5);

    Bar3.position.x += 25;
    Bar3.position.y += 0.5;
    WWLeft.position.z -= 9;
    WWRight.position.z += 9;
    WWLeft.position.y -= 0.5;
    WWRight.position.y -= 0.5;
    WWUpper.position.y += 4.25;
    WWUnder.position.y -= 4.75;
    Bar1.position.z += 2;
    Bar2.position.z += 1;
    Bar4.position.z -= 1;
    Bar5.position.z -= 2;

    //Wall Left
    var WallLVert = new THREE.BoxGeometry(0.5, 15, 11);
    var WallLTop = new THREE.BoxGeometry(0.5, 2, 8)
    var DoorFrameV = new THREE.BoxGeometry(0.7, 12.7, 0.7)
    var DoorFrameH = new THREE.BoxGeometry(0.7, 0.7, 8.8)
    var KeyH = new THREE.BoxGeometry(0.001, 0.5, 0.5)
    var WallLVertical1 = new THREE.Mesh(WallLVert,wall3);
    var WallLVertical2 = new THREE.Mesh(WallLVert,wall3);
    var WallLMid = new THREE.Mesh(WallLTop,wall3V2);
    var DoorFrame1 = new THREE.Mesh(DoorFrameV,Metal);
    var DoorFrame2 = new THREE.Mesh(DoorFrameV,Metal);
    var DoorFrameTop = new THREE.Mesh(DoorFrameH,Metal);
    var KeyHole = new THREE.Mesh(KeyH,KeyholeT);

    cena.add(WallLMid);
    WallLMid.add(WallLVertical1);
    WallLMid.add(WallLVertical2);
    WallLMid.add(DoorFrame1);
    WallLMid.add(DoorFrame2);
    WallLMid.add(DoorFrameTop);
    DoorFrame2.add(Daxel);
    Daxel.add(Hodor);
    Hodor.add(PAxel);
    Hodor.add(KeyHole);
    PAxel.add(PLever1);
    PAxel.add(PLever2);

    WallLVertical1.position.z -= 9.5;
    WallLVertical1.position.y -= 6.5;
    WallLVertical2.position.z += 9.5;
    WallLVertical2.position.y -= 6.5;
    WallLMid.position.x -= 25;
    WallLMid.position.y += 6.5;
    DoorFrame1.position.y -= 7.7;
    DoorFrame1.position.z -= 4.05;
    DoorFrame2.position.y -= 7.7;
    DoorFrame2.position.z += 4.05;
    DoorFrameTop.position.y -= 1;
    Hodor.position.z-=3.75;
    KeyHole.position.z-=3;
    KeyHole.position.y-=1;
    KeyHole.position.x+=0.15;
    PAxel.position.z -= 3;
    PLever1.position.z += 0.65;
    PLever2.position.z += 0.65;
    PLever1.position.x += 1.1;
    PLever2.position.x -= 1.1;

    //Luz janela
    cena.add(OutsideLight);
    cena.add(OutsideLight2);
    const suntarget = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.5,0.5),sand);
    suntarget.position.x += 32.5;
    suntarget.visible=false;
    cena.add(suntarget);
    OutsideLight2.target=suntarget;
    cena.add(OutsideLight2.target);
}