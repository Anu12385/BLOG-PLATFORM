import bcrypt from "bcryptjs";


const SALT_ROUNDS = 10;
export function hashedpass(password:string): Promise<string>
{
    return bcrypt.hash(password,SALT_ROUNDS);
}

export function verifypass(password:string,hashedpass:string): Promise<boolean>
{
    return bcrypt.compare(password,hashedpass);
}