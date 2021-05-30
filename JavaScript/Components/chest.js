function Chest()
{
    var PanelBot = new THREE.BoxGeometry(4.5, 3, 0.2);
    var SideBot = new THREE.BoxGeometry(0.2, 3, 4);
    var UnderBot = new THREE.BoxGeometry(4.5, 0.2, 4);

    var Base = new THREE.Mesh(UnderBot,Wood);
    var Side1 = new THREE.Mesh(SideBot,ChestT);
    var Side2 = new THREE.Mesh(SideBot,ChestT);
    var Panel1 = new THREE.Mesh(PanelBot,ChestT);
    var Panel2 = new THREE.Mesh(PanelBot,ChestT);

    cena.add(Base);
    Base.add(Side1);
    Base.add(Side2);
    Base.add(Panel1);
    Base.add(Panel2);
    Base.add(ChestDoor);

    Base.position.x-=19.5;
    Base.position.y-=7.5;
    Base.position.z+=12;
    Side1.position.x+=2.3;
    Side1.position.y+=1.4;
    Side2.position.x-=2.3;
    Side2.position.y+=1.4;
    Panel1.position.y+=1.4;
    Panel1.position.z-=1.9;
    Panel2.position.y+=1.4;
    Panel2.position.z+=1.9;
    ChestDoor.position.y+=2.9;
    ChestDoor.rotateZ(Math.PI/2);
}