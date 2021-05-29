function Cadeira(){
    
    var legGeom = new THREE.BoxGeometry(0.5, 4, 0.5);
    var seatGeom = new THREE.BoxGeometry(4, 0.5, 4);
    var restGeom = new THREE.BoxGeometry(4, 5, 0.5);

    var Seat = new THREE.Mesh(seatGeom,Wood);
    var BackRest = new THREE.Mesh(restGeom,Wood);
    var Leg1 = new THREE.Mesh(legGeom,Wood);
    var Leg2 = new THREE.Mesh(legGeom,Wood);
    var Leg3 = new THREE.Mesh(legGeom,Wood);
    var Leg4 = new THREE.Mesh(legGeom,Wood);

    cena.add(Leg1);
    Leg1.add(Seat);
    Leg1.add(BackRest);
    Leg1.add(Leg2);
    Leg1.add(Leg3);
    Leg1.add(Leg4);

    Seat.position.x-=1.75;
    Seat.position.y+=2.25;
    Seat.position.z-=1.75;
    BackRest.position.x-=1.75;
    BackRest.position.y+=5;
    Leg1.position.x+=16.75;
    Leg1.position.y-=6;
    Leg1.position.z-=3.5;
    Leg2.position.x-=3.5;
    Leg2.position.z-=3.5;
    Leg3.position.x-=3.5;
    Leg3.position.z-=0;
    Leg4.position.z-=3.5;
}