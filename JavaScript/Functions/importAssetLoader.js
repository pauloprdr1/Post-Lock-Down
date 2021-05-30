function ImportedAssetLoader(){
    //Capacete Mandalorian.fbx.
    importer.load('./../../Objetos/Mandalorian.fbx', function(object) {
        object.traverse(function (child){
            if(child.isMesh) {
                child.castShadow = true;
                child.recieveShadow = true;
            }
        });
        cena.add(object);

        object.scale.x = 0.1;
        object.scale.y = 0.1;
        object.scale.z = 0.1;
        object.rotateY(Math.PI);
        object.position.z+=0.2;

        MandoHelmet = object;
        cena.remove(object);
        ///Televisão
        dracoLoader.setDecoderPath( './../../Objetos/TV/scene.gltf' );
        loadergltf.setDRACOLoader( dracoLoader );
        loadergltf.load(
            './../../Objetos/TV/scene.gltf',
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
                gltf.scene.scale.x = 0.005;
                gltf.scene.scale.y = 0.005;
                gltf.scene.scale.z = 0.005;
                gltf.scene.rotateY(Math.PI);
                gltf.scene.rotateY(Math.PI/3);
                gltf.scene.position.y-=3.6;
                gltf.scene.position.x+=22.3;
                gltf.scene.position.z+=12.3;

                TV1 = gltf.scene;
            }
        );
    });
    // glTF loader Cama
    dracoLoader.setDecoderPath( './../../Objetos/Bed.glb' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/Bed.glb',
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
            gltf.scene.rotateY(Math.PI/2);
            gltf.scene.position.y-=7.5;
            gltf.scene.position.z+=11.8;
            Cama=gltf.scene;
        }
    );
    // glTF loader Chave porta 1
    dracoLoader.setDecoderPath( './../../Objetos/key1/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/key1/scene.gltf',
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
            gltf.scene.scale.x = 0.2;
            gltf.scene.scale.y = 0.2;
            gltf.scene.scale.z = 0.2;
            gltf.scene.rotateX(Math.PI/2);
            gltf.scene.position.x-=19.5;
            gltf.scene.position.y-=5;
            gltf.scene.position.z+=12;
            ChavePorta1 = gltf.scene;
        }
    );
    // glTF loader Portátil
    dracoLoader.setDecoderPath( './../../Objetos/Portátil/scene.gltf' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        // resource URL
        './../../Objetos/Portátil/scene.gltf',
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
            gltf.scene.scale.x = 0.065;
            gltf.scene.scale.y = 0.065;
            gltf.scene.scale.z = 0.065;
            gltf.scene.position.y-=1.5;
            gltf.scene.position.z-=10;
            gltf.scene.position.x+=11;
            gltf.scene.rotateY(Math.PI/2);
            Portatil = gltf.scene;
        }
    );
    // glTF loader mesaTV
    dracoLoader.setDecoderPath( './../../Objetos/dinning_table.glb' );
    loadergltf.setDRACOLoader( dracoLoader );
    loadergltf.load(
        './../../Objetos/dinning_table.glb',
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
            gltf.scene.scale.x = 4.5;
            gltf.scene.scale.y = 4.5;
            gltf.scene.scale.z = 4.5;
            gltf.scene.position.y-=7.5;
            gltf.scene.position.x+=21.8;
            gltf.scene.position.z+=11.8;
            TVTable=gltf.scene;
        }
    );
}