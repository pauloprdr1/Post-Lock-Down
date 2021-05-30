function JackInABox()
{
    var SideG = new THREE.BoxGeometry(3, 3, 0.1);
    var Side1 = new THREE.Mesh(SideG,redcolor);
    var Side2 = new THREE.Mesh(SideG,redcolor);
    var Side3 = new THREE.Mesh(SideG,redcolor);
    var Side4 = new THREE.Mesh(SideG,redcolor);
    var Bottom = new THREE.Mesh(LidG,redcolor);
    cena.add(Bottom);
    Bottom.add(Side1);
    Bottom.add(Side2);
    Bottom.add(Side3);
    Bottom.add(Side4);
    Bottom.add(JackInABoxLid);
    Bottom.add(JITBPole);
    Side2.add(JITBShaft);
    JITBShaft.add(JITBMid);
    JITBMid.add(JITBHandCrank);
    Side3.rotateY(Math.PI/2);
    Side4.rotateY(Math.PI/2);
    Side1.position.y+=1.55;
    Side2.position.y+=1.55;
    Side3.position.y+=1.55;
    Side4.position.y+=1.55;
    Side1.position.z+=1.45;
    Side2.position.z-=1.45;
    Side3.position.x+=1.45;
    Side4.position.x-=1.45;
    Bottom.position.y-=7.5;
    Bottom.position.x-=50;
    JackInABoxLid.position.y+=3.05;
    JITBPole.position.y-=4;
    JITBPole.position.x+=0.7;
    JITBShaft.rotateX(Math.PI/2);
    JITBMid.rotateX(-Math.PI/2);
    JITBHandCrank.rotateX(Math.PI/2);
    JITBShaft.position.z-=0.45;
    JITBMid.position.y-=0.45;
    JITBMid.position.x-=0.3;
    JITBHandCrank.position.z-=0.45;
    JITBHandCrank.position.x-=0.3;

}