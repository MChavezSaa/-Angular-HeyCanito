export interface IJwtResponse{
        /*id: number,
        rol: string,
        email: string,
accessToken: string,*/
        user: [{id: number,
                user: string,
                password: string,
                rol:string
        }], 
        token: string
}
