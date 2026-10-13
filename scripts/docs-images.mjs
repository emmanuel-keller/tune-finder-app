const signature = Buffer.from([137,80,78,71,13,10,26,10]);
export function pngDimensions(bytes) {
  if (bytes.length < 33 || !bytes.subarray(0,8).equals(signature) || bytes.readUInt32BE(8)!==13 || bytes.toString('ascii',12,16)!=='IHDR') throw new Error('Invalid PNG header');
  const width=bytes.readUInt32BE(16),height=bytes.readUInt32BE(20);
  if (!width || !height || width>0x7fffffff || height>0x7fffffff) throw new Error('Invalid PNG dimensions');
  return {width,height};
}
