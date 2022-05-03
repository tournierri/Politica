export interface IUser {
    username: String,
    lastName: String,
    firstName: String,
    genre: String,
    email: String,
    password: String,
    politicalParty: String,
    age: Number,
    profilPicture: String,
    debate_liked_id: Array<String>,
    comment_liked: Array<any>,
    votedList: Array<any>,
    journalist: Boolean,
    image: String,
    indicator: Number
}