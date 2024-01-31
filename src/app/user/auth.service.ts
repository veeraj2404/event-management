import { IUser } from "./user.model";

export class AuthService {
    currentUser: IUser | undefined
    
    loginUser(userName: string, password: string){
        this.currentUser = {
            id:1,
            firstName: userName,
            lastName: 'John',
            userName: 'Papa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }
}