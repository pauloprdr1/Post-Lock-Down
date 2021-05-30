function SunButtonAmbient()
{
    if(SunButtonAmb==0){cena.remove(OutsideLight); SunButtonAmb=1;}
    else if(SunButtonAmb==1){cena.add(OutsideLight); SunButtonAmb=0;}
}
function SunButtonDirectional()
{
    if(SunButtonDir==0){cena.remove(OutsideLight2); cena.remove(OutsideLight2.target); SunButtonDir=1;}
    else if(SunButtonDir==1){cena.add(OutsideLight2); cena.add(OutsideLight2.target); SunButtonDir=0;}
}

