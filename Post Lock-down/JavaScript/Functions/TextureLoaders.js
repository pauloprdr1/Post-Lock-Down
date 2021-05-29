
const Tloader = new THREE.TextureLoader();
var texture;
function TextureLoader(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(1,1);
    } );
}
function TextureLoader2(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(3,3);
    } );
}
function TextureLoader2plus(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(18,3);
    } );
}
function TextureLoader3(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(2,1);
    } );
}
function TextureLoader4(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(1,2);
    } );
}
function TextureLoader5(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(2,2);
    } );
}
function TextureLoader6(source){
    texture = Tloader.load( source , function ( texture ) {

        texture.wrapS = THREE.MirroredRepeatWrapping;
        texture.wrapT = THREE.MirroredRepeatWrapping;
        texture.offset.set( 0, 0 );
        texture.repeat.set(12,12);
    } );
}


TextureLoader('./../../Texturas/dampwall.jpg');
var wall1 = new THREE.MeshLambertMaterial({map: texture});
TextureLoader2('./../../Texturas/stonebrickwall.jpg');
var wall2 = new THREE.MeshLambertMaterial({ map: texture });
TextureLoader2plus('./../../Texturas/stonebrickwall.jpg');
var wall2V2 = new THREE.MeshLambertMaterial({ map: texture });
TextureLoader('./../../Texturas/cracked-wall.jpg');
var wall3 = new THREE.MeshLambertMaterial({ map: texture });
TextureLoader3('./../../Texturas/cracked-wall.jpg');
var wall3V2 = new THREE.MeshLambertMaterial({ map: texture });
TextureLoader('./../../Texturas/window view.jpg');
var windowview = new THREE.MeshStandardMaterial({map: texture});
windowview.side=THREE.DoubleSide;
TextureLoader('./../../Texturas/metalbar.jpg');
var Metal = new THREE.MeshPhongMaterial({map: texture});
TextureLoader4('./../../Texturas/darkwood.jpg');
var Wood = new THREE.MeshStandardMaterial({map: texture});
TextureLoader('./../../Texturas/sky.jpg');
var sky = new THREE.MeshStandardMaterial({map: texture});
TextureLoader('./../../Texturas/sand.jpg');
var sand = new THREE.MeshStandardMaterial({map: texture});
TextureLoader2('./../../Texturas/floornormal.jpg');
var floor1 = new THREE.MeshPhongMaterial({map: texture});
TextureLoader2('./../../Texturas/floordirty.jpg');
var floor2 = new THREE.MeshPhongMaterial({map: texture});
TextureLoader5('./../../Texturas/ceilling.png');
var ceilling = new THREE.MeshLambertMaterial({map: texture});
TextureLoader('./../../Texturas/bookTexture.jpg');
var bookT = new THREE.MeshStandardMaterial({map: texture});
TextureLoader('./../../Texturas/pages.jpg');
var pageT = new THREE.MeshPhongMaterial({map: texture});
TextureLoader('./../../Texturas/chrome.jpg');
var Chrome = new THREE.MeshStandardMaterial({map: texture});
Chrome.side=THREE.DoubleSide;
TextureLoader2('./../../Texturas/bulb.jpg');
var BulbT = new THREE.MeshPhongMaterial({map: texture});
TextureLoader('./../../Texturas/Chest.jpg');
var ChestT = new THREE.MeshStandardMaterial({map: texture});
ChestT.side=THREE.DoubleSide;
TextureLoader('./../../Texturas/door1.png');
var Door1T = new THREE.MeshPhysicalMaterial({map: texture});
TextureLoader('./../../Texturas/gold.jpg');
var GoldT = new THREE.MeshPhysicalMaterial({map: texture});
TextureLoader('./../../Texturas/buttonSquare.png');
var WallButtonT = new THREE.MeshStandardMaterial({map: texture});
TextureLoader('./../../Texturas/Keyhole.png');
var KeyholeT = new THREE.MeshStandardMaterial({map: texture});
KeyholeT.side=THREE.DoubleSide;
TextureLoader('./../../Texturas/Sad_face.png');
var SadFaceT = new THREE.MeshStandardMaterial({map: texture});
TextureLoader('./../../Texturas/Please wait a few seconds for the game to load.jpg');
var LoadingScreenT = new THREE.MeshStandardMaterial({map: texture});
TextureLoader6('./../../Texturas/CubeTextureBG/Post ApocalipticGrass.jpg');
var GrassT = new THREE.MeshStandardMaterial({map: texture});
var RedShinnyT = new THREE.MeshPhongMaterial({color: 0xff0101});
var GrayFrameT = new THREE.MeshPhongMaterial({color: 0x656565});
var buttonWhite = new THREE.MeshStandardMaterial({color:0xf1f1f1});