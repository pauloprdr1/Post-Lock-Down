function Lamp()
{
    var BaseGeom = new THREE.CylinderGeometry(1.35, 1.35, 0.3, 40);
    var ArmGeom = new THREE.BoxGeometry(0.15, 2, 0.15);
    var ArmHorizontalGeom = new THREE.BoxGeometry(0.15, 1, 0.15);
    var DomeGeom = new THREE.SphereGeometry(1, 24, 24, 0, Math.PI*2, 0, Math.PI/2);

    var Base = new THREE.Mesh(BaseGeom,Chrome);
    var Arm1 = new THREE.Mesh(ArmGeom,Metal);
    var Arm2 = new THREE.Mesh(ArmHorizontalGeom,Metal);
    var Dome = new THREE.Mesh(DomeGeom,Chrome);

    cena.add(Base);
    Base.add(Arm1);
    Base.add(Arm2);
    Base.add(Dome);
    Base.add(Bulb); //por causa de não perder a posição da luz

    Base.position.x+=17.2;
    Base.position.y-=1.5;
    Base.position.z-=11.2;

    Arm1.position.x+=0.8;
    Arm1.position.y+=1;
    Arm1.position.z-=0.8;
    Arm2.position.x+=0.47;
    Arm2.position.y+=2.2;
    Arm2.position.z-=0.57;
    Arm2.rotateX(Math.PI/4);
    Arm2.rotateZ(Math.PI/4);
    Dome.position.x-=.45;
    Dome.position.y+=2.2;
    Dome.position.z+=.45;
    Bulb.position.x-=0.45;
    Bulb.position.y+=2.5;
    Bulb.position.z+=0.45;

    //luz Candeeiro
    Bulb.add(Lamplight);
    Lamplight.position.y-=0.7;
    Lamplight.target = TopLivro; 
}