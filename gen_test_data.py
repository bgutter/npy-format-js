import numpy as np
import os
import io
import base64

TEST_DIR = "./test-data/"

test_sequence = [ 1, 2, 3, 4, 5 ]

test_data = {}
def add_test( typestr ):
    test_data[ typestr ] = np.array( test_sequence ).astype( typestr )

add_test( "u1" )
add_test( "|u1" )
add_test( "<u1" )
add_test( ">u1" )
add_test( "u2" )
add_test( "<u2" )
add_test( ">u2" )

with open( os.path.join( TEST_DIR, "test-data.js" ), "w" ) as fout:
    fout.write(
"""
/* https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer */
function b64ToArrayBuffer( b64s ) {
    var binaryString = atob(b64s);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}\n
""")
    fout.write( "testData = {};\n" )
    for name, data in test_data.items():
        buf = io.BytesIO()
        np.save( buf, data )
        buf.seek(0)
        b64_data = base64.b64encode( buf.read() )
        row = f"testData['{name}'] = b64ToArrayBuffer( '{b64_data.decode('utf-8')}' );\n"
        fout.write( row )
