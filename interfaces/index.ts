export interface ISignup {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ILogin {
    email: string;
    password: string;
}


export interface IFeatures {
  src: string;
  title: string;
  desc: string;
}