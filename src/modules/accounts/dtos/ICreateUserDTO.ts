interface ICreateUserDTO {
 id?: string;
 name: string;
 email: string;
 password: string;
 admin?: boolean;
 nationality: string;
 city: string;
 address: string;
 birthDate: Date
}

export { ICreateUserDTO }