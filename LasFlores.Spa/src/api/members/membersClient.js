import baseApiClient from "../baseApiClient";

export const getMembers = () => {
    return baseApiClient.get('members');
}