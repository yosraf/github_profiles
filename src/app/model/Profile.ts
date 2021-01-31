export class Profile {
    avatar_url: string;
    bio: string;
    compagny: string;
    created_at: Date;
    followers: number;
    following: number;
    login: string;
    public_repos: number;

    constructor(avatar_url: string, bio: string, compagny: string, created_at: Date,
        followers: number, following: number, login: string, public_repos: number) {
        this.avatar_url = avatar_url;
        this.bio = bio;
        this.compagny = compagny;
        this.created_at = created_at;
        this.followers = followers;
        this.following = followers;
        this.login = login;
        this.public_repos = public_repos;
    }
}