function addSala2(){
    //Other walls
    cena.add(chao2);
    chao2.add(WallF2);
    chao2.add(WallB2);

    WallF2.position.z -= 30;
    WallB2.position.z += 30;
    WallF2.position.y += 7.5;
    WallB2.position.y += 7.5;
    chao2.position.y -= 7.5;
    chao2.position.x -= 50;
    ceiling2.position.y += 7.5;
    ceiling2.position.x -= 50;

    var LightG = new THREE.BoxGeometry(3,0.7,10);
    var LuzSala2 = new THREE.Mesh(LightG, BulbT);
    chao2.add(LuzSala2);
    LuzSala2.position.y+=14.3;
    chao2.add(LightBoxluz2);
    LightBoxluz2.position.y+=11;
    LightBoxluz.position.y-=0.4;

    //WALL Right
    var WallRVert = new THREE.BoxGeometry(0.05, 15, 26);
    var WallRTop = new THREE.BoxGeometry(0.05, 2, 8)
    var WallRLeftBit = new THREE.Mesh(WallRVert,wall2);
    var WallRRightBit = new THREE.Mesh(WallRVert,wall2);
    var WallRCenterBit = new THREE.Mesh(WallRTop,wall3);
    chao2.add(WallRLeftBit);
    chao2.add(WallRRightBit);
    chao2.add(WallRCenterBit);
    WallRRightBit.position.z+=17;
    WallRLeftBit.position.z-=17;
    WallRRightBit.position.x+=24.75;
    WallRLeftBit.position.x+=24.75;
    WallRRightBit.position.y+=7.5;
    WallRLeftBit.position.y+=7.5;
    WallRCenterBit.position.x+=24.75;
    WallRCenterBit.position.y+=14;
    //Wall Left
    var WallLVert = new THREE.BoxGeometry(0.05, 15, 27);
    var WallLTop = new THREE.BoxGeometry(0.05, 1.5, 6)
    var DoorFrameH = new THREE.BoxGeometry(0.7, 0.7, 5.7);
    var DoorFrameV = new THREE.BoxGeometry(0.7, 14.5, 0.7);
    var DoorFrame1 = new THREE.Mesh(DoorFrameV,GrayFrameT);
    var DoorFrame2 = new THREE.Mesh(DoorFrameV,GrayFrameT);
    var DoorFrameTop = new THREE.Mesh(DoorFrameH,GrayFrameT);
    var WallLLeftBit = new THREE.Mesh(WallLVert,wall2);
    var WallLRightBit = new THREE.Mesh(WallLVert,wall2);
    var WallLCenterBit = new THREE.Mesh(WallLTop,wall3);
    chao2.add(WallLLeftBit);
    chao2.add(WallLRightBit);
    chao2.add(WallLCenterBit);
    WallLRightBit.position.x-=25;
    WallLLeftBit.position.x-=25;
    WallLRightBit.position.z+=16.5;
    WallLLeftBit.position.z-=16.5;
    WallLRightBit.position.y+=7.5;
    WallLLeftBit.position.y+=7.5;
    WallLCenterBit.position.x-=25;
    WallLCenterBit.position.y+=14.25;
    chao2.add(DoorFrame1);
    chao2.add(DoorFrame2);
    chao2.add(DoorFrameTop);
    chao2.add(DoorAxel);
    DoorFrameTop.position.y+=13.9;
    DoorFrameTop.position.x-=25;
    DoorFrame1.position.z+=3.2;
    DoorFrame1.position.x-=25;
    DoorFrame2.position.z-=3.2;
    DoorFrame2.position.x-=25;
    DoorFrame1.position.y+=7;
    DoorFrame2.position.y+=7;
    DoorAxel.position.z+=3.2;
    DoorAxel.position.x-=25;
    DoorAxel.position.y+=7;
}