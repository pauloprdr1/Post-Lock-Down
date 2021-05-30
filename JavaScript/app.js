document.addEventListener('DOMContentLoaded', Start);
var cena = new THREE.Scene(); //The Set for all to happen
//Perspective camera
var camara = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight, 0.1, 1000);
//Ortographic camera
var camaraOrt = new THREE.OrthographicCamera( window.innerWidth / - 80, window.innerHeight / 45, window.innerHeight / 80, window.innerHeight / - 45, 0.05, 100 );
//Perspective SKY camera
var camaraSky = new THREE.PerspectiveCamera(110, window.innerWidth/innerHeight, 10, 800);
camaraSky.position.y+=100;
camaraSky.position.x-=300;
camaraSky.rotateY(-Math.PI/2);
camaraSky.rotateX(-Math.PI/4);
var camaraSkyLoop = 300;
var camaraSkyRot = 0;
var camaraSkyAnimationLoop = 0;
camaraSkyRectify=0;
camaraSkyZoom=1;
var cameraSwitch = 0; //To switch between camera or game/map modes/extra camera
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth-15, window.innerHeight-50);
document.body.appendChild(renderer.domElement);

//Controls button
function InfoButton(){window.alert("History and controls:\n" + "You woke up in this room.\n You don't remember anything.\n Escape by any means Necessary.\n" + "\tControls:\n\tWASD - Walk;\n\tQ/E - Rotate Camera;\n\tShift/Ctrl - Tilt Head;\n\tSpace - Jump;\n\tC - Crouch;\n\tM-Open Map;\n\tLeftClick - Inspect/Pick Up;\n\nGood Luck.");}

//Ortographic camera movement/camera movement/head tilt back and forth/Jumping feature/crouch Feature
var CoordMovement;
var camaraAndar = { x:0, y:0, z:0};
var tiltHead=0;
var tiltHeadAngle=0;
var yBlockJump=0;
var yBlockCrouch=0;
var Jump=0;
var Crouch=0;

var NoClip=0; //Variável para poder passar pelas paredes

var velocidadeAndar = 0.7; //Velocidade de movimento da personagem/camaraPerspetiva

var switch180 = 0; //verificar rotação da camara

//Luz Janela
var OutsideLight = new THREE.AmbientLight('#eff095', 0.4);
var OutsideLight2 = new THREE.DirectionalLight('#eff095', 0.4);
OutsideLight.position.y += 135;
OutsideLight.position.x += 80;
OutsideLight2.position.y += 135;
OutsideLight2.position.x += 80;
DayNightCicle=0;
OutsideLight2.castShadow=true;
var SunButtonDir=0;
var SunButtonAmb=0;
const Dia = new THREE.Color(0xeff095);
const Noite = new THREE.Color(0x555564);

//luz salas 1 e 2
var LightBoxluz = new THREE.PointLight('#e9f7f4', 0.5);//Luz Sala1
var LightBoxluz2 = new THREE.PointLight('#f2f2f9', 0.5);//Luz Sala2
LightBoxluz.decay=1.9;
LightBoxluz2.decay=1.9;
LightBoxluz.shadow.mapSize.width = 30;
LightBoxluz.shadow.mapSize.height = 30;
LightBoxluz2.shadow.mapSize.width = 40;
LightBoxluz2.shadow.mapSize.height = 40;
LightBoxluz.distance=35; 
LightBoxluz.power=10*Math.PI;
LightBoxluz.castShadow=true;
LightBoxluz2.distance=50; 
LightBoxluz2.power=10*Math.PI;
LightBoxluz2.castShadow=true;

//Luz Candeeiro
var Lamplight = new THREE.SpotLight('#dfe3c6', 0.7);
Lamplight.castShadow = true;
Lamplight.shadow.mapSize.width = 20;
Lamplight.shadow.mapSize.height = 20;
Lamplight.decay=1.9;
Lamplight.castShadow=true;
Lamplight.distance=9; 
Lamplight.power=4*Math.PI;

//Musica Principal
const mainSong = new THREE.AudioListener();
const mainAudio = new THREE.Audio( mainSong );
const audioLoadermainAudio = new THREE.AudioLoader();
audioLoadermainAudio.load( './Sons/HauntedMemories.mp3', function( bufferS ) {
mainAudio.setBuffer( bufferS );
mainAudio.setLoop( true );
mainAudio.setVolume( 0.2 );
mainAudio.play();
});

//Musica Principal nº2
const mainSong2 = new THREE.AudioListener();
const mainAudio2 = new THREE.Audio( mainSong2 );
const audioLoadermainAudio2 = new THREE.AudioLoader();
audioLoadermainAudio2.load( './Sons/GhostStories.mp3', function( bufferS ) {
mainAudio2.setBuffer( bufferS );
mainAudio2.setLoop( true );
mainAudio2.setVolume( 0.2 );
});

//Footsteps
const footstp = new THREE.AudioListener();
const Ftsp = new THREE.Audio( footstp );
const audioLoaderFtsp = new THREE.AudioLoader();
audioLoaderFtsp.load( './Sons/Footsteps.mp3', function( bufferFs ) {
Ftsp.setBuffer( bufferFs );
Ftsp.setLoop( true );
Ftsp.setVolume( 0.3 );
});
var FtspPlay=0;

//JITB Spook!
const Spooksong = new THREE.AudioListener();
const Spookmp3 = new THREE.Audio( Spooksong );
const audioLoaderSpookmp3 = new THREE.AudioLoader();
audioLoaderSpookmp3.load( './Sons/spook!.mp3', function( bufferS ) {
    Spookmp3.setBuffer( bufferS );
    Spookmp3.setLoop( false );
    Spookmp3.setVolume( 3 );
});

//Imported Textures
var MandoHelmet;
var mixerAnimAstronauta;
var mixerPapagaio;
var relogio = new THREE.Clock();
var relogioPapagaio = new THREE.Clock();
var importer = new THREE.FBXLoader();
var ChavePorta1;
var ChavePorta1State=0;
var KeyCard1;
var PedestalG = new THREE.CylinderGeometry(1.2,0.3,3,3,3);
var Pedestal = new THREE.Mesh(PedestalG,GrayFrameT);
var KeyCard1State=0;
var KeyCard2;
var KeyCard2State=0;
var Door2;
var DoorFrameV2 = new THREE.BoxGeometry(0.001, 14.5, 0.001);
var DoorAxel = new THREE.Mesh(DoorFrameV2,GrayFrameT);
var Door2State;
var keyP1anim=0;
var Key1scale=0;
var Key1Prompt=0;
//Loader gltf
const loadergltf = new THREE.GLTFLoader();
const dracoLoader = new THREE.DRACOLoader();
//Parrot
var ParrotSpringOut=0;
var ParrotSOAnim=0;
var ParrotPLay=0;
var TVTable;
var Cama;
var Kitchen;
var HouseKit;
var Vases;
var MesaTv;
var LCD;
var Portatil;
var TV1;
var AstronautaG=new THREE.BoxGeometry(0.7,2,0.5);
var Astronauta=new THREE.Mesh(AstronautaG,RedShinnyT);
Astronauta.visible=false;

var LoadingComplete=0;//Loading timer

//Background
// Load the background texture
const loaderBG = new THREE.CubeTextureLoader();
loaderBG.setPath( './Texturas/CubeTextureBG/' );
const BackgroundDay = loaderBG.load([
	'1.jpg', '1.jpg',
	'skysqr.jpg', 'Post ApocalipticGrass.jpg',
	'1.jpg', '1.jpg'
]);
const BackgroundNight = loaderBG.load([
	'2.jpg', '2.jpg',
	'2.jpg', 'Post ApocalipticGrass.jpg',
	'2.jpg', '2.jpg'
]);
cena.background=BackgroundDay;
//cena.fog=new THREE.Fog(0xdddddd,10,300); //NO //IT MAKES POOTER RUN VERY SUCK

/*Comonentes Sala1*****************************************/
//Formas
//RightWall
var SLWallSide = new THREE.BoxGeometry(0.5, 15, 12);
var SLwallPortionUnder = new THREE.BoxGeometry(0.5, 6.5, 6);
var SLwallPortionUpper = new THREE.BoxGeometry(0.5, 5.5, 6);
var WindowBar = new THREE.BoxGeometry(0.25, 3, 0.25);
//WindowOutside
var WindowView = new THREE.CylinderGeometry(15, 15, 15, 40, 40, true, 0, Math.PI);
var WindowViewTopBot = new THREE.BoxGeometry(15, 0.01, 30);
//Front/Back Walls
var WallFront = new THREE.BoxGeometry(50, 15, 0.01);
var WallFloor = new THREE.BoxGeometry(50, 0.01, 30);
//Mesh's
var WallF = new THREE.Mesh(WallFront,wall3V2);
var WallB = new THREE.Mesh(WallFront,wall3V2);
var chao = new THREE.Mesh(WallFloor,floor1);
var ceiling = new THREE.Mesh(WallFloor,ceilling);
var Sky = new THREE.Mesh(WindowViewTopBot,sky);
var Sand = new THREE.Mesh(WindowViewTopBot,sand);
var WinView = new THREE.Mesh(WindowView,windowview);
//WindowWall
var WWLeft = new THREE.Mesh(SLWallSide,wall3);
var WWRight = new THREE.Mesh(SLWallSide,wall3);
var WWUnder = new THREE.Mesh(SLwallPortionUnder,wall3);
var WWUpper = new THREE.Mesh(SLwallPortionUpper,wall3);
var Bar1 = new THREE.Mesh(WindowBar,Metal);
var Bar2 = new THREE.Mesh(WindowBar,Metal);
var Bar3 = new THREE.Mesh(WindowBar,Metal);
var Bar4 = new THREE.Mesh(WindowBar,Metal);
var Bar5 = new THREE.Mesh(WindowBar,Metal);
//Porta
var DoorShape = new THREE.BoxGeometry(0.3, 13, 8);
var DaxelG = new THREE.BoxGeometry(0.001, 13, 0.001);
var Hodor = new THREE.Mesh(DoorShape,Door1T);
var Daxel = new THREE.Mesh(DaxelG,Door1T);
var AbrirPorta=0;
var repeatanim=0;
var PuxadorAxel = new THREE.BoxGeometry(2, 0.2, 0.2);
var PuxadorLever = new THREE.BoxGeometry(0.2, 0.2, 1.5);
var PAxel = new THREE.Mesh(PuxadorAxel,Metal);
var PLever1 = new THREE.Mesh(PuxadorLever,Metal);
var PLever2 = new THREE.Mesh(PuxadorLever,Metal);
var AbrirPorta2=0;
var repeatanim2=0;

/*Comonentes Sala2***********Front/Back Walls***/
var WallFloor2 = new THREE.BoxGeometry(50, 0.01, 60);

//Mesh's
var WallF2 = new THREE.Mesh(WallFront,wall2);
var WallB2 = new THREE.Mesh(WallFront,wall2);
var chao2 = new THREE.Mesh(WallFloor2,floor2);
var ceiling2 = new THREE.Mesh(WallFloor2,ceilling);

/*Capa Livro++++++++++++++++++++++++++++++++++++++++++++*/
    var CoverGeom = new THREE.BoxGeometry(1, 0.1, 1.5);
    var TopLivro = new THREE.Mesh(CoverGeom,bookT);

/***********CHEST LID************************/
var ChestTop = new THREE.CylinderGeometry(2, 2, 4.8, 40, 40, false, 0, Math.PI);
var ChestDoor = new THREE.Mesh(ChestTop,ChestT);
ChestKeyObtained=0;
var AbrirChest=0;
var repeatanimChest=0;

/**************************ESPELHO****/
var mirrorShape=new THREE.PlaneGeometry(3,4);
var mirroredgeV=new THREE.BoxGeometry(0.03,4.02,0.03);
var mirroredgeH=new THREE.BoxGeometry(0.03,0.03,3);
var EdgeH1 = new THREE.Mesh(mirroredgeH,GoldT);
var EdgeH2 = new THREE.Mesh(mirroredgeH,GoldT);
var EdgeV1 = new THREE.Mesh(mirroredgeV,GoldT);
var EdgeV2 = new THREE.Mesh(mirroredgeV,GoldT);
var Espelho;
Espelho = new THREE.Reflector( mirrorShape, {
    clipBias: 0.003,
    textureWidth: (window.innerWidth-15) * window.devicePixelRatio,
    textureHeight: (window.innerHeight-50) * window.devicePixelRatio,
    color: 0x666666
} );
Espelho.position.set(-24.6,0,-9);
Espelho.rotateY(Math.PI/2);
var sadGeometry = new THREE.CircleGeometry(1,30);
var SadFace= new THREE.Mesh(sadGeometry,SadFaceT);
SadFace.position.x=-21;
SadFace.position.y=0;
SadFace.position.z=-9;
SadFace.rotateY(-Math.PI/2);
cena.add( Espelho );

//*****Jack in a box Lid + color**********/
var redcolor = new THREE.MeshPhongMaterial({color:0xff1010});
var graycolor = new THREE.MeshPhongMaterial({color:0x111111});
var LidG = new THREE.BoxGeometry(3, 0.1, 3);
var crankShaft = new THREE.CylinderGeometry(0.1,0.1,0.75,25);
var crankMid = new THREE.BoxGeometry(0.85,0.2,0.2);
var poleG = new THREE.CylinderGeometry(0.6,0.6,8,40);
var JackInABoxLid = new THREE.Mesh(LidG,redcolor);
var JITBPole = new THREE.Mesh(poleG,graycolor);
var JITBShaft = new THREE.Mesh(crankShaft,graycolor);
var JITBMid = new THREE.Mesh(crankMid,graycolor);
var JITBHandCrank = new THREE.Mesh(crankShaft,graycolor);
var repeatanimJackInABox=0;
var AbrirJIAB=0;

/*Butões**********************************/
var ButtonGeom = new THREE.BoxGeometry(0.01, 1, 1);
var ButtonLightSala1 = new THREE.Mesh(ButtonGeom,WallButtonT);
var ButtonLightSala2 = new THREE.Mesh(ButtonGeom,WallButtonT);
cena.add(ButtonLightSala1);
cena.add(ButtonLightSala2);
ButtonLightSala1.position.x-=24.7;
ButtonLightSala1.position.y+=0.5;
ButtonLightSala1.position.z-=5.5;
ButtonLightSala2.position.x-=25.3;
ButtonLightSala2.position.y+=0.5;
ButtonLightSala2.position.z+=5.5;
var ButtonLightSala1State=0;
var ButtonLightSala2State=0;
var ButtonGeom2 = new THREE.BoxGeometry(0.3, 0.5, 0.3);
var ButtonCandeeiro = new THREE.Mesh(ButtonGeom2,buttonWhite);
cena.add(ButtonCandeeiro);
ButtonCandeeiro.position.x+=17;
ButtonCandeeiro.position.y-=1.25;
ButtonCandeeiro.position.z-=10.5;
var ButtonCandeeiroState=0;
var BulbGeom = new THREE.SphereGeometry(0.4, 20, 20);//forma da lâmpada para depois se chamar bulb.add/remove
var Bulb = new THREE.Mesh(BulbGeom,BulbT);
var ButtonG = new THREE.CylinderGeometry(0.3, 0.3, 0.3,50,50); //Botão porta sala2
var ButtonDoor2 = new THREE.Mesh(ButtonG,RedShinnyT);
var LockBarG = new THREE.BoxGeometry(0.3, 0.5, 10);
var LockBar = new THREE.Mesh(LockBarG,Metal);
var ClickBD2=0;
var repeatanimBT=0;

//mouse move detector
document.addEventListener('mousemove', ev =>{
    if(cameraSwitch==1)
    {
        var x = (ev.clientX - 0)/(window.innerWidth - 0)*(1-(-1)) + (-1);
        var y = (ev.clientY - 0)/(window.innerHeight - 0)*(1-(-1)) + (-1);

        CoordMovement = {
            x:x,
            y:y
        }
    }
});

//keyboard click
document.addEventListener('keypress',ev =>{
    if((cameraSwitch==0) && (tiltHead == 0))
    {
        //verifica se a tecla Q foi premida.
        if(ev.key == "q" || ev.key == "Q"){ Rodar(1); }
        //verifica se a tecla E foi premida.
        if(ev.key == "e" || ev.key == "E"){ Rodar(2); }
    }
    if((ev.key == "m" || ev.key == "M") && cameraSwitch==0)
    {
        cameraSwitch = 1;
        removeFandC();
    }
    else if((ev.key == "m" || ev.key == "M") && cameraSwitch==1)
    {
        cameraSwitch = 0;
        addFandC();
    }
    if((ev.key == "o" || ev.key == "O") && cameraSwitch==0)
    {
        cameraSwitch = 2;
    }
    else if((ev.key == "o" || ev.key == "O") && cameraSwitch==2)
    {
        cameraSwitch = 0;
    }
});

//Cálculo de rotação por teclas Q & E
function Rodar(option){
    if(option==1){camara.rotateY((Math.PI)/2); switch180=switch180+1;}
    else if(option=2){camara.rotateY(-(Math.PI)/2); switch180=switch180-1;}
}

//keyboard PRESS
document.addEventListener('keydown',ev=>{
    var coords = {
            x:0,
            y:0,
            z:0
        };
    if(cameraSwitch==0)
    {
        //verifica se a tecla W foi premida e coloca a variável Z do coords para o valor corrreto.
        if(ev.key == "w" || ev.key == "W"){coords.z -= velocidadeAndar; if(FtspPlay==0){Ftsp.play(); FtspPlay=1;}}
        //verifica se a tecla S foi premida e coloca a variável Z do coords para o valor corrreto.
        if(ev.key == "s" || ev.key == "S"){coords.z += velocidadeAndar; if(FtspPlay==0){Ftsp.play(); FtspPlay=1;}}
        //verifica se a tecla A foi premida e coloca a variável X do coords para o valor corrreto.
        if(ev.key == "a" || ev.key == "A"){coords.x -= velocidadeAndar; if(FtspPlay==0){Ftsp.play(); FtspPlay=1;}}
        //verifica se a tecla D foi premida e coloca a variável X do coords para o valor corrreto.
        if(ev.key == "d" || ev.key == "D"){coords.x += velocidadeAndar; if(FtspPlay==0){Ftsp.play(); FtspPlay=1;}}
        //verifica se a tecla z foi premida.
        if(ev.key == "Shift"){tiltHead = 1;}
        //verifica se a tecla x foi premida.
        if(ev.key == "Control"){tiltHead = 2;}
        //espaço
        if(ev.key == " "){Jump = 1;}
        if(ev.key == "c" || ev.key == "C"){Crouch = 1;}
    }
    camaraAndar = coords;  
});

document.addEventListener('keyup',ev=>{
    var coords = {
        x:0,
        y:0,
        z:0
    };
    if(cameraSwitch==0)
    {
        //verifica se a tecla W foi levantada.
        if(ev.key == "w" || ev.key == "W"){coords.z += velocidadeAndar/2; Ftsp.stop(); FtspPlay=0;}
        //verifica se a tecla S foi levantada.
        if(ev.key == "s" || ev.key == "S"){coords.z -= velocidadeAndar/2; Ftsp.stop(); FtspPlay=0;}
        //verifica se a tecla A foi levantada.
        if(ev.key == "a" || ev.key == "A"){coords.x += velocidadeAndar/2; Ftsp.stop(); FtspPlay=0;}
        //verifica se a tecla D foi levantada.
        if(ev.key == "d" || ev.key == "D"){coords.x -= velocidadeAndar/2; Ftsp.stop(); FtspPlay=0;}
        //verifica se a tecla z foi premida.
        if(ev.key == "Shift" ){tiltHead = -1;}
        //verifica se a tecla x foi premida.
        if(ev.key == "Control"){tiltHead = -2;}
        //espaço
        if(ev.key == " "){Jump = -1;}
        if(ev.key == "c" || ev.key == "C"){Crouch = -1;}
    }
    camaraAndar = coords;
});

function Lampadateto1()
{
    var LightBox = new THREE.BoxGeometry(6, 0.5, 2);
    var florescentbulb = new THREE.Mesh(LightBox,BulbT);
    cena.add(florescentbulb);
    florescentbulb.position.y+=7;
    
    //luz
    cena.add(LightBoxluz);
    LightBoxluz.position.y+=5;
}

function No_Clip(){ if(NoClip==0){NoClip=1;} else if(NoClip==1){NoClip=0;}}

//LoadingScreen
var LoadingScreen =new THREE.Mesh(new THREE.PlaneGeometry((19.2/4), (10.8/4)),LoadingScreenT);

//video to update (texture)
var video = document.createElement( 'video' );
    video.id='video';
    video.type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
	video.src = "Texturas/Bouncing Seals.mp4";
	video.load(); // must call after setting/changing source
	video.play();
    video.loop=true;
    video.volume=0.2;
    video.muted=true;
var SealsT;

function Start(){
    cena.add(LoadingScreen);
    LoadingScreen.position.z-=1.5;
    ImportedAssetLoader();

    camaraOrt.position.z =0;
    camaraOrt.position.x =0;
    camaraOrt.position.y =3;
    camaraOrt.rotateX(-Math.PI/2);

    JackInABox();
    SmokeAndMirrors();
    addSala1();
    Lampadateto1();
    addFandC();
    Cadeira();
    Mesa();
    Livro();
    Lamp();
    Chest();
    addSala2();
    outside();
    ButtonDoor2Frame();
    createText();
    camara.add( mainSong );
    camara.add( footstp );
    requestAnimationFrame(update);
}

window.addEventListener( 'mousedown', onMouseClick, false );//RAycaster detetor de clicks 