
/* https://stackoverflow.com/questions/21797299/convert-base64-string-to-arraybuffer */
function b64ToArrayBuffer( b64s ) {
    var binaryString = atob(b64s);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

testData = {};
testData['u1'] = b64ToArrayBuffer( 'k05VTVBZAQB2AHsnZGVzY3InOiAnfHUxJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoBAgMEBQ==' );
testData['|u1'] = b64ToArrayBuffer( 'k05VTVBZAQB2AHsnZGVzY3InOiAnfHUxJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoBAgMEBQ==' );
testData['<u1'] = b64ToArrayBuffer( 'k05VTVBZAQB2AHsnZGVzY3InOiAnfHUxJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoBAgMEBQ==' );
testData['>u1'] = b64ToArrayBuffer( 'k05VTVBZAQB2AHsnZGVzY3InOiAnfHUxJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoBAgMEBQ==' );
testData['u2'] = b64ToArrayBuffer(  'k05VTVBZAQB2AHsnZGVzY3InOiAnPHUyJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoBAAIAAwAEAAUA' );
testData['<u2'] = b64ToArrayBuffer( 'k05VTVBZAQB2AHsnZGVzY3InOiAnPHUyJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoBAAIAAwAEAAUA' );
testData['>u2'] = b64ToArrayBuffer( 'k05VTVBZAQB2AHsnZGVzY3InOiAnPnUyJywgJ2ZvcnRyYW5fb3JkZXInOiBGYWxzZSwgJ3NoYXBlJzogKDUsKSwgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoAAQACAAMABAAF' );
