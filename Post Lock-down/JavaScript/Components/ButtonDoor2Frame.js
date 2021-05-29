function ButtonDoor2Frame(){
    var VerticalBit1 = new THREE.BoxGeometry(0.5, 0.5, 0.3);
    var VerticalBit2 = new THREE.BoxGeometry(0.5, 0.5, 0.1);
    var HorizontalBits = new THREE.BoxGeometry(0.5, 0.25, 0.8);
    var BackPlateG = new THREE.BoxGeometry(0.01, 0.6, 0.6);
    var ButtonBit = new THREE.BoxGeometry(0.5, 1, 1);
    var LBLG = new THREE.BoxGeometry(0.5, 0.05, 0.2);
    var LBLGTop = new THREE.BoxGeometry(0.05, 0.6, 0.2);

    var VB1 = new THREE.Mesh(VerticalBit1,GrayFrameT);
    var VB2 = new THREE.Mesh(VerticalBit2,GrayFrameT);
    var HB1 = new THREE.Mesh(HorizontalBits,GrayFrameT);
    var HB2 = new THREE.Mesh(HorizontalBits,GrayFrameT);
    var BBit = new THREE.Mesh(ButtonBit,GrayFrameT);
    var BackPlate = new THREE.Mesh(BackPlateG,new THREE.MeshStandardMaterial({color:0x000000}));

    var LBL1 = new THREE.Mesh(LBLG,GrayFrameT);
    var LBL2 = new THREE.Mesh(LBLG,GrayFrameT);
    var LBLT = new THREE.Mesh(LBLGTop,GrayFrameT);
    var LBL3 = new THREE.Mesh(LBLG,GrayFrameT);
    var LBL4 = new THREE.Mesh(LBLG,GrayFrameT);
    var LBLT2 = new THREE.Mesh(LBLGTop,GrayFrameT);
    var LBL5 = new THREE.Mesh(LBLG,GrayFrameT);
    var LBL6 = new THREE.Mesh(LBLG,GrayFrameT);
    var LBLT3 = new THREE.Mesh(LBLGTop,GrayFrameT);

    chao2.add(BBit);
    ButtonDoor2.rotateZ(Math.PI/2);
    BBit.add(ButtonDoor2);
    BBit.add(VB1);
    BBit.add(VB2);
    BBit.add(HB1);
    BBit.add(HB2);
    VB1.add(BackPlate);
    BBit.add(LockBar);
    BBit.add(LBL1);
    BBit.add(LBL2);
    BBit.add(LBLT);
    BBit.add(LBL3);
    BBit.add(LBL4);
    BBit.add(LBLT2);
    BBit.add(LBL5);
    BBit.add(LBL6);
    BBit.add(LBLT3);

    BBit.position.x-=24.75;
    BBit.position.y+=6.5;
    BBit.position.z-=6.5;
    HB1.position.z+=0.7;
    HB2.position.z+=0.7;
    HB1.position.y+=0.375;
    HB2.position.y-=0.375;
    VB1.position.z+=0.75;
    VB2.position.z+=1.05;
    ButtonDoor2.position.x+=0.25;
    BackPlate.position.x-=0.2;
    LockBar.position.z+=5.5;
    LBL1.position.z+=10.2;
    LBL2.position.z+=10.2;
    LBLT.position.z+=10.2;
    LBL1.position.y+=0.3;
    LBL2.position.y-=0.3;
    LBLT.position.x+=0.175;
    LBL1.position.x-=0.05;
    LBL2.position.x-=0.05;

    LBL3.position.z+=2.2;
    LBL4.position.z+=2.2;
    LBLT2.position.z+=2.2;
    LBL3.position.y+=0.3;
    LBL4.position.y-=0.3;
    LBLT2.position.x+=0.175;
    LBL3.position.x-=0.05;
    LBL4.position.x-=0.05;

    LBL5.position.z-=4.2;
    LBL6.position.z-=4.2;
    LBLT3.position.z-=4.2;
    LBL5.position.y+=0.3;
    LBL6.position.y-=0.3;
    LBLT3.position.x+=0.175;
    LBL5.position.x-=0.05;
    LBL6.position.x-=0.05;
}
