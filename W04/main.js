function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight( 0xffa0ff );
    light.position.set(2, 2, 2);
    scene.add(light);

    var light = new THREE.PointLight( 0x00ff00 );
    light.position.set(1, 1, -1);
    scene.add(light);

    var light = new THREE.PointLight( 0xff0000 );
    light.position.set(1, -1, -1);
    scene.add(light);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: 0xffef10 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.005;
        renderer.render( scene, camera );
    }
}
