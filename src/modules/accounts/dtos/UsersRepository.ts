interface ICreateUserDTO {
 id?: string;
 name: string;
 email: string;
 password: string;
 isAdmin?: boolean;
 nationality: string;
 city: string;
 address: string;
 birthDate: Date
}

export { ICreateUserDTO }