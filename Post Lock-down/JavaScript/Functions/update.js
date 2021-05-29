function update(){
    if(LoadingComplete>=0 && LoadingComplete<=350){LoadingComplete++};
    if(LoadingComplete==150){cena.remove(LoadingScreen)}
    if(camara.position.x<-24 && AbrirPorta==3 && ChavePorta1State==2){AbrirPorta=4;}
    //PerspectiveCamera
    if(cameraSwitch==0)
    {
        cena.remove(MandoHelmet);

        if((camaraAndar != null))
        {
            if((switch180==4) || (switch180==-4)){switch180=0;}
            if(camaraAndar.y!=0)
            {
                camara.rotateY(camaraAndar.y);
            }
            var ang = 0.5;

            //free 360º+angle movement
            if((switch180==1) || (switch180==-3)) //Esquerda
            {
                if((tiltHead==1) && (camara.rotation.x<ang)){camara.rotateX(ang);}
                else if((tiltHead==2) && (camara.rotation.x>-ang)){camara.rotateX(-ang);}
                else if((tiltHead==-1) && (camara.rotation.x!=0))
                {
                    camara.rotateX(-ang);
                    tiltHead=0;
                }
                else if((tiltHead==-2) && (camara.rotation.x!=0))
                {
                    camara.rotateX(ang);
                    tiltHead=0;
                }
                camara.position.x += camaraAndar.z;
                camara.position.z -= camaraAndar.x;
            }
            else if((switch180==-1) || (switch180==3)) //Direita
            {
                if((tiltHead==1) && (camara.rotation.x<ang)){camara.rotateX(ang);}
                else if((tiltHead==2) && (camara.rotation.x>-ang)){camara.rotateX(-ang);}
                else if((tiltHead==-1) && (camara.rotation.x!=0))
                {
                    camara.rotateX(-ang);
                    tiltHead=0;
                }
                else if((tiltHead==-2) && (camara.rotation.x!=0))
                {
                    camara.rotateX(ang);
                    tiltHead=0;
                }
                camara.position.x -= camaraAndar.z;
                camara.position.z += camaraAndar.x;
            }
            else if((switch180==2) || (switch180==-2))
            {
                if((tiltHead==1) && (tiltHeadAngle!=ang)){camara.rotateX(ang); tiltHeadAngle=ang;}
                else if((tiltHead==2) && (tiltHeadAngle!=-ang)){camara.rotateX(-ang); tiltHeadAngle=-ang;}
                else if((tiltHead==-1) && (camara.rotation.x!=0))
                {
                    camara.rotateX(-ang);
                    tiltHead=0;
                    tiltHeadAngle=0;
                }
                else if((tiltHead==-2) && (camara.rotation.x!=0))
                {
                    camara.rotateX(ang);
                    tiltHead=0;
                    tiltHeadAngle=0;
                }
                camara.position.x -= camaraAndar.x;
                camara.position.z -= camaraAndar.z;
            }
            else if(switch180==0)
            {
                if((tiltHead==1) && (camara.rotation.x<ang)){camara.rotation.x=(ang); }
                else if((tiltHead==2) && (camara.rotation.x>-ang)){camara.rotation.x=(-ang);}
                else if((tiltHead==-1) && (camara.rotation.x!=0))
                {
                    camara.rotateX(-ang);
                    tiltHead=0;
                }
                else if((tiltHead==-2) && (camara.rotation.x!=0))
                {
                    camara.rotateX(ang);
                    tiltHead=0;
                }
                camara.position.x += camaraAndar.x;
                camara.position.z += camaraAndar.z;
            }     
        }
        if(NoClip==0){CollisionDetector();}//para detetar colisões com outros objetos
        
        yAnterior=camara.position.y;
        if(Jump == 1 && yBlockJump==0)
        {
            camara.position.y+=1;
            Jump=0;
            yBlockJump=1;
        }
        if(Jump == -1 && yBlockJump==1)
        {
            camara.position.y-=1;
            Jump=0;
            yBlockJump=0;
        }

        if(Crouch == 1 && yBlockCrouch==0)
        {
            camara.position.y-=3;
            Crouch=0;
            yBlockCrouch=1;
        }
        if(Crouch == -1 && yBlockCrouch==1)
        {
            camara.position.y+=3;
            Crouch=0;
            yBlockCrouch=0;
        }
        
        //Animação de abrir a porta
        if((AbrirPorta==1) && (repeatanim<150))
        {
            repeatanim++;
            PAxel.rotateX(0.005); 
            PAxel.position.z-=0.001;
        }
        else if((AbrirPorta==1) && (repeatanim==150)){AbrirPorta=2; repeatanim=0;}
        else if((AbrirPorta==2) && (repeatanim<150))
        {
            repeatanim++;
            Daxel.rotateY(-0.015);
        }
        else if((AbrirPorta==2) && (repeatanim==150)){ AbrirPorta=3; repeatanim=0;}
        else if((AbrirPorta==4) && (repeatanim<150))
        {
            repeatanim++;
            Daxel.rotateY(0.015);  
        }
        else if((AbrirPorta==4) && (repeatanim==150)){AbrirPorta=5; repeatanim=0;}
        else if((AbrirPorta==5) && (repeatanim<150))
        {
            repeatanim++;
            PAxel.rotateX(-0.005); 
            PAxel.position.z+=0.001;
        }
        else if((AbrirPorta==5) && (repeatanim==150))
        {
            AbrirPorta=0;
            repeatanim=0;
        }

        //Animação de abrir o baú
        if((AbrirChest==1) && (repeatanimChest<150))
        {
            repeatanimChest++;
            ChestDoor.rotateY((-Math.PI/4)/151);
            ChestDoor.position.y+=(1.45/151);
            ChestDoor.position.z+=(0.5/151);
        }
        else if((AbrirChest==1) && (repeatanimChest==150))
        {
            AbrirChest=2;
            if(Key1Prompt!=2){Key1Prompt=1;}
            repeatanimChest=0;
        }
        else if((AbrirChest==3) && (repeatanimChest<150))
        {
            repeatanimChest++;
            ChestDoor.rotateY((Math.PI/4)/151);
            ChestDoor.position.y-=(1.45/151);
            ChestDoor.position.z-=(0.5/151);
        }
        else if((AbrirChest==3) && (repeatanimChest==150))
        {
            AbrirChest=0;
            repeatanimChest=0;
        }

        if((Key1Prompt==1) && (keyP1anim<80))
        {
            keyP1anim++;
            ChavePorta1.scale.x+=0.005;
            ChavePorta1.scale.y+=0.005;
            ChavePorta1.scale.z+=0.005;
            ChavePorta1.rotateZ(Math.PI/10);
            ChavePorta1.position.y+=(2.5/40);
            ChavePorta1.position.z-=(1.5/40);
        }
        else if((Key1Prompt==1) && (keyP1anim==80))
        {
            alert("You have colected 'Room 1 Key!' ");
            Key1Prompt=2;
            ChavePorta1State=1;
            cena.remove(ChavePorta1);
        }

        //Jack in the box animação tampa
        if(AbrirJIAB==0){JITBShaft.rotateY(0.03);}
        else if((AbrirJIAB==1) && (repeatanimJackInABox<50))
        {
            repeatanimJackInABox++;
            JackInABoxLid.rotateZ((Math.PI/1.7)/50);
            JackInABoxLid.position.y+=(0.375/12.5);
            JackInABoxLid.position.x-=(2.7/75);
        }
        else if((AbrirJIAB==1) && (repeatanimJackInABox==50))
        {
            AbrirJIAB=2;
            repeatanimJackInABox=0;
            setTimeout(() => {
                ParrotSpringOut=1; 
                Spookmp3.play();  
                if(KeyCard2State==0)
                {
                    cena.add(KeyCard2);
                    setTimeout(() => {
                        alert("AAAAAAAAAAAH!... Oh...look, a Keycard!\n\t(You Have collected 'Keycard 2'!)"); 
                        KeyCard2State=1; 
                        KeyCard2.rotateX(-Math.PI/5);
                        KeyCard2.rotateY(-Math.PI/2);
                        KeyCard2.position.x-=26.2;
                        KeyCard2.position.z-=5.925;
                        KeyCard2.scale.x-=1.5;
                        KeyCard2.scale.y-=1;
                        KeyCard2.scale.z+=3;
                        KeyCard2.position.y+=1;
                    },500);
                }
            }, 1500);        
        }
        else if((AbrirJIAB==3) && (repeatanimJackInABox<50))
        {
            repeatanimJackInABox=50;
            JackInABoxLid.rotateZ((-Math.PI/1.7));
            JackInABoxLid.position.y-=(1.5);
            JackInABoxLid.position.x+=(1.8);
        }
        else if((AbrirJIAB==3) && (repeatanimJackInABox==50))
        {
            AbrirJIAB=0;
            repeatanimJackInABox=0;
            ParrotSpringOut=3;
        }

        //Jack in the pox papagaio salta para fora
        if((ParrotSpringOut==1) && (ParrotSOAnim<5))
        {
            ParrotSOAnim++;
            Papagaio.position.y+=1;
            Papagaio.position.x+=0.2;
            JITBPole.position.y+=1;
        }
        else if((ParrotSpringOut==1) && (ParrotSOAnim==5))
        {
            ParrotSpringOut=2;
            ParrotSOAnim=0;
            ParrotPLay=1;
        }
        else if((ParrotSpringOut==3) && (ParrotSOAnim<5))
        {
            ParrotPLay=0;
            ParrotSOAnim++;
            Papagaio.position.y-=1;
            Papagaio.position.x-=0.2;
            JITBPole.position.y-=1;
        }
        else if((ParrotSpringOut==3) && (ParrotSOAnim==5))
        {
            ParrotSpringOut=0;
            ParrotSOAnim=0;
        }

        //Animação de abrir a porta 2
        if((AbrirPorta2==1) && (repeatanim2<200))
        {
            repeatanim2++;
            LockBar.position.z-=(7.6/200);  
        }
        else if((AbrirPorta2==1) && (repeatanim2==200)){AbrirPorta2=2;repeatanim2=0;}
        else if((AbrirPorta2==2) && (repeatanim2<200))
        {
            repeatanim2++;
            DoorAxel.rotateY(-0.012);  
        }
        else if((AbrirPorta2==2) && (repeatanim2==200)){AbrirPorta2=3;repeatanim2=0;}
        else if((AbrirPorta2==4) && (repeatanim2<200))
        {
            repeatanim2++;
            DoorAxel.rotateY(+0.012);  
        }
        else if((AbrirPorta2==4) && (repeatanim2==200)){ AbrirPorta2=5; repeatanim2=0;}
        else if((AbrirPorta2==4) && (repeatanim2<200))
        {
            repeatanim2++;
            LockBar.position.z+=(7.6/200);
        }
        else if((AbrirPorta2==5) && (repeatanim2==200)){ AbrirPorta2=0; repeatanim2=0;}

        //Animação de botão porta 2
        if((ClickBD2==1) && (repeatanimBT<49))
        {
            repeatanimBT++;
            ButtonDoor2.position.x-=0.003;
        }
        else if((ClickBD2==1) && (repeatanimBT==49)){ClickBD2=2; repeatanimBT=0;}
        else if((ClickBD2==2) && (repeatanimBT<49))
        {
            repeatanimBT++;
            ButtonDoor2.position.x+=0.003;
        }
        else if((ClickBD2==2) && (repeatanimBT==49)){ClickBD2=0; repeatanimBT=0;}

        camaraOrt.position.x=camara.position.x;
        camaraOrt.position.z=camara.position.z-5;
        camaraAndar = {x:0, y:0, z:0};
        if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
        {
		    videoImageContext.drawImage( video, 0, 0 );
		    if ( videoTexture ){videoTexture.needsUpdate = true;}
	    }
        renderer.render(cena,camara);
    }
    else if(cameraSwitch==1){
        cena.add(MandoHelmet);
        if((switch180==1) || (switch180==-3)) //Esquerda
            {
                MandoHelmet.rotation.y=-Math.PI/2;
            }
            else if((switch180==-1) || (switch180==3)) //Direita
            {
                MandoHelmet.rotation.y=Math.PI/2;
            }
            else if((switch180==2) || (switch180==-2))
            {
                MandoHelmet.rotation.y=Math.PI;
            }
            else if(switch180==0)
            {
                MandoHelmet.rotation.y=0;
            }
        MandoHelmet.position.x=camara.position.x;
        MandoHelmet.position.y=camara.position.y;
        MandoHelmet.position.z=camara.position.z;
        if(CoordMovement != null)
        {
            camaraOrt.position.x+=(CoordMovement.x*0.08);
            camaraOrt.position.z+=(CoordMovement.y*0.08);
        }
        renderer.render(cena,camaraOrt);
    }
    else if(cameraSwitch==2){
        if(camaraSkyLoop>0 && camaraSkyAnimationLoop==0)
        {
            camaraSkyLoop-=1;
            camaraSky.position.y+=20/300
            camaraSky.position.x+=75/300
            camaraSky.position.z-=90/300
            camaraSky.rotateX((Math.PI/6)/900)
            camaraSky.rotateY(-(Math.PI/5)/500)
            camaraSky.rotateZ(-(Math.PI/5)/500)
        }
        else if(camaraSkyZoom<10 && camaraSkyLoop==0 && camaraSkyAnimationLoop==0)
        {
            camaraSkyZoom+=0.25;
            camaraSky.zoom=camaraSkyZoom;
            camaraSky.updateProjectionMatrix();
        }
        else if(camaraSkyLoop==0 && camaraSkyZoom>=10){camaraSkyLoop=300; camaraSkyAnimationLoop=1;}
        else if(camaraSkyZoom>1 && camaraSkyAnimationLoop==1) 
        {
            camaraSkyZoom-=0.25;
            camaraSky.zoom=camaraSkyZoom;
            camaraSky.updateProjectionMatrix();
        }
        else if(camaraSkyLoop>0 && camaraSkyZoom<=1 && camaraSkyAnimationLoop==1)
        {
            camaraSkyLoop-=1;
            camaraSky.position.y-=20/300
            camaraSky.position.x-=75/300
            camaraSky.position.z+=90/300
            camaraSky.rotateX(-(Math.PI/6)/900)
            camaraSky.rotateY((Math.PI/5)/520)
            camaraSky.rotateZ((Math.PI/5)/600)
        }
        else if(camaraSkyLoop==0 && camaraSkyAnimationLoop==1){camaraSkyLoop=300; camaraSkyAnimationLoop=2;}
        if(camaraSkyRot<255 && camaraSkyAnimationLoop==2)
        {
            camaraSkyRot+=1;
            camaraSky.rotateY((Math.PI)/180);
            camaraSky.rotateZ((Math.PI)/180);
        }
        else if(camaraSkyRot==255 && camaraSkyAnimationLoop==2){camaraSkyRot=0; camaraSkyAnimationLoop=3;}
        else if(camaraSkyRectify<250 && camaraSkyAnimationLoop==3)
        {
            camaraSkyRectify+=1;
            camaraSky.rotateX((Math.PI)/720);
            camaraSky.position.x+=(100/250);
            camaraSky.position.z+=(40/250);
            camaraSky.position.y-=(80/250);
        }
        else if(camaraSkyRectify==250 && camaraSkyAnimationLoop==3){camaraSkyRectify=0; camaraSkyAnimationLoop=4;}
        else if(camaraSkyRectify<250 && camaraSkyAnimationLoop==4)
        {
            camaraSkyRectify+=1;
            camaraSky.rotateX(-(Math.PI)/720);
            camaraSky.position.x-=(100/250);
            camaraSky.position.z-=(40/250);
            camaraSky.position.y+=(80/250);
        }
        else if(camaraSkyRectify==250 && camaraSkyAnimationLoop==4){camaraSkyRectify=0; camaraSkyAnimationLoop=5;}
        else if(camaraSkyRectify<250 && camaraSkyAnimationLoop==5)
        {
            camaraSkyRectify+=1;
            camaraSky.rotateX((Math.PI)/720);
            camaraSky.position.x+=(150/250);
            camaraSky.position.z-=(110/250);
            camaraSky.position.y-=(75/250);
        }
        else if(camaraSkyRectify==250 && camaraSkyAnimationLoop==5){camaraSkyRectify=0; camaraSkyAnimationLoop=6;}
        else if(camaraSkyRectify<250 && camaraSkyAnimationLoop==6)
        {
            camaraSkyRectify+=1;
            camaraSky.rotateX(-(Math.PI)/720);
            camaraSky.position.x-=(150/250);
            camaraSky.position.z+=(110/250);
            camaraSky.position.y+=(75/250);
        }
        else if(camaraSkyRectify==250 && camaraSkyAnimationLoop==6){camaraSkyRectify=0; camaraSkyAnimationLoop=0;}
        console.log(camaraSky.rotation.y);
        renderer.render(cena,camaraSky);
    }

    if(mixerAnimAstronauta) { mixerAnimAstronauta.update(relogio.getDelta());}

    if(ParrotPLay==1) { mixerPapagaio.update(relogioPapagaio.getDelta()); }

    if(true){SealsT.update;}

    if(SunButtonDir==0 && SunButtonAmb==0)
    {
        if(OutsideLight2.intensity<=0.2 && DayNightCicle==3)
        {
            DayNightCicle=0;
            OutsideLight.intensity==0.1;
        }
        else if(OutsideLight2.intensity>=1.4 && DayNightCicle==0)
        {
            DayNightCicle=1;
        }
        if(OutsideLight2.intensity<=0.2 && DayNightCicle==1)
        {
            DayNightCicle=2;
            OutsideLight.intensity==0.4;
        }
        else if(OutsideLight2.intensity>=0.7 && DayNightCicle==2)
        {
            DayNightCicle=3;
        }

        var timesecs = new Date(Date.now());
        if((timesecs.getSeconds()%2==0) || (timesecs.getSeconds()==0))
        {
            if(DayNightCicle==0){OutsideLight.color=Dia; OutsideLight2.color=Dia;}
            else if(DayNightCicle==2){OutsideLight.color=Noite; OutsideLight2.color=Noite;}
            if(DayNightCicle==0 && OutsideLight2.intensity<=1.4)
            {
                OutsideLight2.intensity+=0.002;
                OutsideLight.intensity+=0.001;
            }
            else if(DayNightCicle==1 && OutsideLight2.intensity>=0.2)
            {
                OutsideLight2.intensity-=0.002;
                OutsideLight.intensity-=0.001;
            }
            if(DayNightCicle==2 && OutsideLight2.intensity<=0.7)
            {
                OutsideLight2.intensity+=0.002;
                OutsideLight.intensity+=0.001;
            }
            else if(DayNightCicle==3 && OutsideLight2.intensity>=0.2)
            {
                OutsideLight2.intensity-=0.002;
                OutsideLight.intensity-=0.001;
            }
        }
    }
    requestAnimationFrame(update);
}