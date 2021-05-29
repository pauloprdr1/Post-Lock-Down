function CollisionDetector()
{
    //porta sala1
    if((camara.position.x<=-23 && camara.position.x>=-27) && (camara.position.z<=6.5 && camara.position.z>=-6.5) && (AbrirPorta==0))
    {
        if(camara.position.x<-24)
        {
            camara.position.x-=5;
        }
        else if(camara.position.x>-26)
        {
            camara.position.x+=5;
        }
    }
    //paredes sala1
    if((camara.position.x<=-23 && camara.position.x>=-27) && (camara.position.z>=6.5 || camara.position.z<=-6.5))
    {
        if(camara.position.x<-24)
        {
            camara.position.x-=5;
        }
        else if(camara.position.x>-26)
        {
            camara.position.x+=5;
        }
    }
    if((camara.position.z<=-14 && camara.position.z>=-16) && (camara.position.x<=25 && camara.position.x>=-25))
    {
        if(camara.position.z<-14)
        {
            camara.position.z+=5;
        }
    }
    if((camara.position.z>=14 && camara.position.z<=16) && (camara.position.x<=25 && camara.position.x>=-25) )
    {
        if(camara.position.z>14)
        {
            camara.position.z-=5;
        }
    }
    if(camara.position.x>23){camara.position.x-=5;}
    //mesa
    if((camara.position.x>=8 && camara.position.z<=-4))
    {
        if(camara.position.x>8 && camara.position.z<-6)
        {
            camara.position.x-=5;
        }
        else if(camara.position.z<-4 && camara.position.x>12)
        {
            camara.position.z+=5;
        }
        else if(camara.position.x>8 && camara.position.z<-4)
        {
            camara.position.x-=3;
            camara.position.z+=3;
        }
    }
    //TV
    if((camara.position.x>=21 && camara.position.z>=11))
    {
        camara.position.x-=3;
        camara.position.z-=3;
    }
    //baú
    if(((camara.position.x<=-18) && (camara.position.x>=-25)) && (camara.position.z>=11))
    {
        camara.position.x+=3;
        camara.position.z-=3;
    }
    //cama
    if(((camara.position.x<=8) && (camara.position.x>=-8)) && (camara.position.z>=11))
    {
        camara.position.z-=4;
    }
    //porta sala2
    if((camara.position.x<=-73 && camara.position.x>=-77) && (camara.position.z<=6.5 && camara.position.z>=-6.5) && (AbrirPorta2==0))
    {
        if(camara.position.x<-74)
        {
            camara.position.x-=5;
        }
        else if(camara.position.x>-76)
        {
            camara.position.x+=5;
        }
    }
    //paredes sala2
    if((camara.position.x<=-73 && camara.position.x>=-77) && (camara.position.z>=6.5 || camara.position.z<=-6.5))
    {
        if(camara.position.x<-74)
        {
            camara.position.x-=5;
        }
        else if(camara.position.x>-76)
        {
            camara.position.x+=5;
        }
    }
    if((camara.position.z<=-29 && camara.position.z>=-31) && (camara.position.x<=-25 && camara.position.x>=-75))
    {
        if(camara.position.z<-29)
        {
            camara.position.z+=5;
        }
    }
    if((camara.position.z>=29 && camara.position.z<=31) && (camara.position.x<=-25 && camara.position.x>=-75) )
    {
        if(camara.position.z>29)
        {
            camara.position.z-=5;
        }
    }
}