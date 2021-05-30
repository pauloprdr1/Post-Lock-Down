function createText() {
    const loaderT = new THREE.FontLoader();
    loaderT.load( './../Fonts/helvetiker_bold.typeface.json', function ( font ) {

        const color = 0xee0202;
        const matDark = new THREE.LineBasicMaterial( {
            color: color,
            side: THREE.DoubleSide
        } );
        const matLite = new THREE.MeshBasicMaterial( {
            color: color,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
        } );

        const message = "Press 'O' to visualize\nthe whole map!";
        const shapes = font.generateShapes( message, 5 );
        const geometry = new THREE.ShapeGeometry( shapes );
        geometry.computeBoundingBox();

        const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );

        // make shape ( N.B. edge view not visible )

        const text = new THREE.Mesh( geometry, matLite );
        cena.add( text );

        // make line shape ( N.B. edge view remains visible )

        const holeShapes = [];

        for ( let i = 0; i < shapes.length; i ++ ) {
            const shape = shapes[ i ];
            if ( shape.holes && shape.holes.length > 0 ) {
                for ( let j = 0; j < shape.holes.length; j ++ ) {
                    const hole = shape.holes[ j ];
                    holeShapes.push( hole );
                }
            }
        }

        shapes.push.apply( shapes, holeShapes );
        const lineText = new THREE.Object3D();
        for ( let i = 0; i < shapes.length; i ++ ) {
            const shape = shapes[ i ];

            const points = shape.getPoints();
            const geometry = new THREE.BufferGeometry().setFromPoints( points );

            geometry.translate( xMid, 0, 0 );

            const lineMesh = new THREE.Line( geometry, matDark );
            lineText.add( lineMesh );
        }
        text.add( lineText );
        lineText.position.z+=0.5;
        text.rotateY(Math.PI/2);
        text.position.x-=140;
        text.position.y+=20;
    } );
}
