const MAGIC_OFFSET = 0;
const MAGIC_BYTE_COUNT = 6;

const MAJOR_VERSION_OFFSET = MAGIC_OFFSET + MAGIC_BYTE_COUNT;
const MAJOR_VERSION_BYTE_COUNT = 1;

const MINOR_VERSION_OFFSET = MAJOR_VERSION_OFFSET + MAJOR_VERSION_BYTE_COUNT;
const MINOR_VERSION_BYTE_COUNT = 1;

const HEADER_LEN_OFFSET = 8;
const HEADER_LEN_BYTE_COUNT_V1 = 2;
const HEADER_LEN_BYTE_COUNT_V2 = 4;

const HEADER_OFFSET_V1 = HEADER_LEN_OFFSET + HEADER_LEN_BYTE_COUNT_V1;
const HEADER_OFFSET_V2 = HEADER_LEN_OFFSET + HEADER_LEN_BYTE_COUNT_V2

function interpretHeaderString( headerString ) {
    
}

/* https://stackoverflow.com/questions/40031688/javascript-arraybuffer-to-hex */
function buf2hex(buffer) { // buffer is an ArrayBuffer
  return "0x" + [...new Uint8Array(buffer)]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');
}

/**
 * Check the magic bytes in the header of a NPY file
 * @function checkMagic
 * @param {ArrayBuffer} arrayBuffer - The data to check
 */
function checkMagic( arrayBuffer, dv=new DataView( arrayBuffer ) ) {
    for( let i = 0; i < MAGIC_BYTE_COUNT; i++ ) {
        let value = dv.getUint8(i), expected;
        if (i===0) {
            expected = 0x93;
        } else {
            expected = "NUMPY".charCodeAt(i-1);
        }
        if (value !== expected) {
            throw new Error( `Magic byte check failure at byte ${i}. Saw bytes ${buf2hex(arrayBuffer.slice(0,7))}. ${value} !== ${expected}.` );
        }
    }
}

function load( arrayBuffer ) {

    // Create a DataView
    let dv = new DataView( arrayBuffer );

    // Check the magic bytes to ensure this is a NPY
    checkMagic( arrayBuffer, dv );

    // Get the header size (little-endian uint16)
    let headerLen = dv.getUint16( HEADER_LEN_OFFSET, true );

    // Get the header text
    let headerString = new TextDecoder("utf-8").decode( new Uint8Array( arrayBuffer.slice( HEADER_OFFSET, HEADER_OFFSET + headerLen ) ) );

    // The header string is a Python dict -- interpret it
    let headerProps = interpretHeaderString( headerString );
}
