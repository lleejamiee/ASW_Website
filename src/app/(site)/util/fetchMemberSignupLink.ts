import { getMemberSignUpLink } from "@/sanity/sanity-utils";

export const fetchMemberSignupLink = async () => {
    const fetchLink = await getMemberSignUpLink();

    return fetchLink[0].link;
};
