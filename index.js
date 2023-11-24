
window.onload = () => {
    console.log( "Starting tests..." );
    for( let [ name, arrayBuffer ] of Object.entries( testData ) ) {
        console.log( name );
        load( arrayBuffer );
    }
};
