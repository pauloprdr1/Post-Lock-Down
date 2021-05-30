function ImportedAssetLoaderF3(){
    // glTF loader Astronauta
    dracoLoader.setDecoderPath( './../../Objetos/Astronauta caminhando.glb' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/Astronauta caminhando.glb',
        // called when the resource is loaded
        function ( gltf ) {

            cena.add( gltf.scene );
            mixerAnimAstronauta= new THREE.AnimationMixer(gltf.scene);
            gltf.animations;// Array<THREE.AnimationClip>
            gltf.scene; // THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            var actionu = mixerAnimAstronauta.clipAction( gltf.animations[ 1 ] );
            actionu.play();
            gltf.scene.traverse(function (child){
                if(child.isMesh) {
                    child.castShadow = true;
                    child.recieveShadow = true;
                }
            });
            gltf.scene.scale.x = 5;
            gltf.scene.scale.y = 5;
            gltf.scene.scale.z = 5;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.x-=90;
            gltf.scene.rotateY(Math.PI/2);
            gltf.scene.add(Astronauta);
            Astronauta.position.y+=1.2;
        }
    );
    // glTF loader Jeep
    dracoLoader.setDecoderPath( './../../Objetos/jeep_cherokee/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/jeep_cherokee/scene.gltf',
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
            gltf.scene.scale.x = 0.11;
            gltf.scene.scale.y = 0.11;
            gltf.scene.scale.z = 0.11;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.z-=38;
            gltf.scene.position.x-=110;
            gltf.scene.rotateY(Math.PI/3);
        }
    );
    // glTF loader Abandoned car 1
    dracoLoader.setDecoderPath( './../../Objetos/abandoned_car/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/abandoned_car/scene.gltf',
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
            gltf.scene.scale.x = 4;
            gltf.scene.scale.y = 4;
            gltf.scene.scale.z = 4;
            gltf.scene.position.y-=7;
            gltf.scene.position.z+=39;
            gltf.scene.position.x-=95;
            gltf.scene.rotateY(Math.PI/4);
        }
    );
    // glTF loader low_poly_abandoned_building
    dracoLoader.setDecoderPath( './../../Objetos/low_poly_abandoned_building/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/low_poly_abandoned_building/scene.gltf',
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
            gltf.scene.scale.x = 5;
            gltf.scene.scale.y = 5;
            gltf.scene.scale.z = 5;
            gltf.scene.position.y-=7;
            gltf.scene.position.z-=67;
            gltf.scene.position.x-=100;
        }
    );
    // glTF loader abandoned_building 2
    dracoLoader.setDecoderPath( './../../Objetos/scanned_abandoned_b/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/scanned_abandoned_b/scene.gltf',
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
            gltf.scene.position.y-=13;
            gltf.scene.position.z+=160;
            gltf.scene.position.x-=136;
        }
    );
    // glTF loader grafiti building
    dracoLoader.setDecoderPath( './../../Objetos/graffiti_building/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/graffiti_building/scene.gltf',
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
            gltf.scene.scale.x = 0.16;
            gltf.scene.scale.y = 0.16;
            gltf.scene.scale.z = 0.16;
            gltf.scene.position.y-=7.7;
            gltf.scene.position.z-=35;
            gltf.scene.position.x-=215;
            gltf.scene.rotateY(-Math.PI/5)
        }
    );
    // glTF loader billboard2
    dracoLoader.setDecoderPath( './../../Objetos/billboard_post_apo/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/billboard_post_apo/scene.gltf',
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
            gltf.scene.scale.x = 0.1;
            gltf.scene.scale.y = 0.1;
            gltf.scene.scale.z = 0.1;
            gltf.scene.position.y-=7.7;
            gltf.scene.position.z+=80;
            gltf.scene.position.x-=185;
            gltf.scene.rotateY(2*Math.PI/3)
        }
    );
    // glTF loader city in the distance
    dracoLoader.setDecoderPath( './../../Objetos/ruined_city/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/ruined_city/scene.gltf',
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
            gltf.scene.position.y-=11.5;
            gltf.scene.position.z+=70;
            gltf.scene.position.x-=420;
        }
    );
}