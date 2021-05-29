function Livro(){
    var SideGeom = new THREE.BoxGeometry(0.1, 0.5, 1.5);
    var PagesGeom = new THREE.BoxGeometry(0.9, 0.3, 1.4);

    var Bot = new THREE.Mesh(CoverGeom,bookT);
    var Side = new THREE.Mesh(SideGeom,bookT);
    var Mid = new THREE.Mesh(PagesGeom,pageT);

    cena.add(TopLivro);
    TopLivro.add(Bot);
    TopLivro.add(Mid);
    TopLivro.add(Side);

    TopLivro.position.x+=15;
    TopLivro.position.y-=1.2;
    TopLivro.position.z-=7;
    Bot.position.y-=0.4;
    Side.position.y-=0.2;
    Side.position.x-=0.5;
    Mid.position.y-=0.2;
}
