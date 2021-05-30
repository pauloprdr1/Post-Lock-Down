function outside(){
    var GrassFloor = new THREE.BoxGeometry(500,0.01,600);
    var WallLVert = new THREE.BoxGeometry(0.05, 15, 140);
    var FloorGrass = new THREE.Mesh(GrassFloor,GrassT);
    var WallLLeftBit = new THREE.Mesh(WallLVert,wall2V2);
    var WallLRightBit = new THREE.Mesh(WallLVert,wall2V2);
    chao2.add(FloorGrass);
    chao2.add(WallLLeftBit);
    chao2.add(WallLRightBit);
    WallLRightBit.position.x-=25;
    WallLLeftBit.position.x-=25;
    WallLRightBit.position.z+=100;
    WallLLeftBit.position.z-=100;
    WallLRightBit.position.y+=7.5;
    WallLLeftBit.position.y+=7.5;
    FloorGrass.position.x-=275;

    videoImage = document.createElement( 'canvas' );
	videoImage.width = 870;
	videoImage.height = 490;

	videoImageContext = videoImage.getContext( '2d' );
	videoImageContext.fillStyle = '#000000';
	videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

	videoTexture = new THREE.Texture( videoImage );
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

    SealsT = new THREE.MeshBasicMaterial( { map: videoTexture, side:THREE.DoubleSide } , function ( SealsT ) {
        SealsT.wrapS = SealsT.wrapT = THREE.RepeatWrapping;
        SealsT.offset.set( 0, 0 );
        SealsT.repeat.set(1,4);
    });
    const CilG = new THREE.CylinderGeometry( 200, 250, 350, 50, 50, true, (9*Math.PI/16),(30*Math.PI/16) );
    const Vidcylinder = new THREE.Mesh( CilG, SealsT );
    Vidcylinder.position.y+=171
    Vidcylinder.position.x+=20
    FloorGrass.add( Vidcylinder );
}