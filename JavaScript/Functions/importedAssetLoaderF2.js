function ImportedAssetLoaderF2(){
    // glTF loader Kitchen
    dracoLoader.setDecoderPath( './../../Objetos/Kitchen/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/Kitchen/scene.gltf',
        function ( gltf ) {
            cena.add( gltf.scene );
            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 0.0065;
            gltf.scene.scale.y = 0.0065;
            gltf.scene.scale.z = 0.0065;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.z-=27.1;
            gltf.scene.position.x-=35.1;
            Kitchen = gltf.scene;
        }
    );
    // glTF loader Papagaio
    dracoLoader.setDecoderPath( './../../Objetos/Papagaio de pirata.glb' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/Papagaio de pirata.glb',
        function ( gltf ) {

            cena.add( gltf.scene );
            mixerPapagaio= new THREE.AnimationMixer(gltf.scene);
            gltf.animations;// Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            var actionu = mixerPapagaio.clipAction( gltf.animations[ 2 ] );
            actionu.play();
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 35;
            gltf.scene.scale.y = 35;
            gltf.scene.scale.z = 35;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.x-=50;
            gltf.scene.rotateY(Math.PI/2);
            Papagaio = gltf.scene;
        }
    );
    //GLTF LCD
    dracoLoader.setDecoderPath( './../../Objetos/2018_flat_screen_tv/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/2018_flat_screen_tv/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            cena.add( gltf.scene );
            gltf.animations;// Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 3;
            gltf.scene.scale.y = 3;
            gltf.scene.scale.z = 3;
            gltf.scene.position.y-=1.4;
            gltf.scene.position.z+=26;
            gltf.scene.position.x-=31;
            gltf.scene.rotateY(1*Math.PI/3);
            gltf.scene.rotateY(-Math.PI);
            LCD = gltf.scene;
        }
    );
    // glTF loader Keycard1
    dracoLoader.setDecoderPath( './../../Objetos/KeyCard1/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/KeyCard1/scene.gltf',
        function ( gltf ) {
            cena.add( gltf.scene );
            gltf.animations;// Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 5;
            gltf.scene.scale.y = 5;
            gltf.scene.scale.z = 5;
            gltf.scene.position.y-=4;
            gltf.scene.position.x-=65;
            gltf.scene.position.z-=23.5;
            gltf.scene.rotateY(Math.PI/2);
            gltf.scene.rotateX(-Math.PI/2);
            KeyCard1 = gltf.scene;
            Pedestal.position.y-=5.6;
            Pedestal.position.x-=65;
            Pedestal.position.z-=23.5;
            cena.add(Pedestal);
        }
    );// glTF loader Keycard2
    dracoLoader.setDecoderPath( './../../Objetos/KeyCard2/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/KeyCard2/scene.gltf',
        function ( gltf ) {
            cena.add( gltf.scene );
            gltf.animations;// Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 5;
            gltf.scene.scale.y = 5;
            gltf.scene.scale.z = 5;
            gltf.scene.position.y-=2;
            gltf.scene.position.x-=48;
            gltf.scene.rotateY(Math.PI/2);
            gltf.scene.rotateX(-Math.PI/2);
            gltf.scene.rotateX(Math.PI/5);
            KeyCard2 = gltf.scene;
            cena.remove(gltf.scene);
        }
    );
    // glTF loader PORTA 2
    dracoLoader.setDecoderPath( './../../Objetos/Door2/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/Door2/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            DoorAxel.add( gltf.scene );
            gltf.animations;// Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 0.9;
            gltf.scene.scale.y = 0.9;
            gltf.scene.scale.z = 0.9;
            gltf.scene.position.z-=3.2;
            gltf.scene.rotateY(Math.PI/2);
            Door2=gltf.scene;
        }
    );
    // glTF house pack
    dracoLoader.setDecoderPath( './../../Objetos/HouseKit.glb' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/HouseKit.glb',
        // called when the resource is loaded
        function ( gltf ) {
            cena.add( gltf.scene );
            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 4.7;
            gltf.scene.scale.y = 4.7;
            gltf.scene.scale.z = 4.7;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.x-=67;
            gltf.scene.position.z+=24;
            gltf.scene.rotateY(Math.PI/2);
            HouseKit=gltf.scene;
        }
    );
    // glTF Vases
    dracoLoader.setDecoderPath( './../../Objetos/scifi-vase.glb' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/scifi-vase.glb',
        // called when the resource is loaded
        function ( gltf ) {
            cena.add( gltf.scene );
            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 20;
            gltf.scene.scale.y = 20;
            gltf.scene.scale.z = 20;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.x-=70;
            gltf.scene.position.z-=22;
            gltf.scene.rotateY(Math.PI/9)
            Vases=gltf.scene;
        }
    );
}