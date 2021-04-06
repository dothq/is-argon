import { hash } from 'argon2';
import { isArgon } from '../src';

const run = async () => {
    console.log("real argon hash")

    const realHash = await hash("testing")
    let a = await isArgon(realHash);
    
    console.log(realHash, "isArgon?", a)

    ///

    console.log("fake argon hash");
    
    const fakeHash = "this is not a real argon hash";
    let b = await isArgon(fakeHash);

    console.log(fakeHash, "isArgon?", b)

    ///
}

run();