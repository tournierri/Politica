export interface IUser {
    username: string,
    lastName: string,
    firstName: string,
    genre: string,
    email: string,
    password: string,
    politicalParti: string,
    age: number,
    profilPicture: any,
    debate_liked_id: Array<string>,
    comment_liked: Array<any>,
    votedList: Array<any>,
    journalist: Boolean,
    image: string,
    indicator: number,
    shareOne: boolean,
    shareAll: boolean,
    shareApp: boolean,
    newsPosted: number,
    fakeNewsPosted: number,
    darkMode: boolean
}