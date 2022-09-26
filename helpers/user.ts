import { UserType } from "../types";

export const getUser = (users: Array<UserType>, userId: String|Number): UserType|null => {
    const user = users.find(user => user.id == userId);
    if (user) return user;
    return null;
}