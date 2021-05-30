function Mesa(){
    var legGeom = new THREE.BoxGeometry(0.5, 5.5, 0.5);
    var tabletopGeom = new THREE.BoxGeometry(16, 0.5, 9);
    var wideSupGeom = new THREE.BoxGeometry(.5, 5.5, 9);
    var boxdrawerGeom = new THREE.BoxGeometry(4, 3, 9);
    var liddrawerGeom = new THREE.BoxGeometry(4, 3, 0.2);
    var puxadorGeom = new THREE.BoxGeometry(1.6, .2, .5);

    var TOP = new THREE.Mesh(tabletopGeom,Wood);
    var Drawerbox = new THREE.Mesh(boxdrawerGeom,Wood);
    var Drawerlid = new THREE.Mesh(liddrawerGeom,Wood);
    var Leg1 = new THREE.Mesh(legGeom,Wood);
    var Leg2 = new THREE.Mesh(legGeom,Wood);
    var Sup1 = new THREE.Mesh(wideSupGeom,Wood);
    var Sup2 = new THREE.Mesh(wideSupGeom,Wood);
    var Puxador = new THREE.Mesh(puxadorGeom,Metal);

    cena.add(TOP);
    TOP.add(Drawerbox);
    TOP.add(Drawerlid);
    TOP.add(Leg1);
    TOP.add(Leg2);
    TOP.add(Sup1);
    TOP.add(Sup2);
    TOP.add(Puxador);

    TOP.position.x+=16.5;
    TOP.position.y-=2;
    TOP.position.z-=10.25;
    Drawerbox.position.x+=4.75;
    Drawerbox.position.y-=1.75;
    Drawerlid.position.x+=4.75;
    Drawerlid.position.y-=1.75;
    Drawerlid.position.z+=4.6;
    Puxador.position.x+=4.75;
    Puxador.position.y-=1.5;
    Puxador.position.z+=4.7;
    Leg1.position.x-=7.25;
    Leg1.position.y-=3;
    Leg1.position.z-=3.5;
    Leg2.position.x-=7.25;
    Leg2.position.y-=3;
    Leg2.position.z+=3.5;
    Sup1.position.x+=7;
    Sup1.position.y-=3;
    Sup2.position.x+=2.5;
    Sup2.position.y-=3;
}