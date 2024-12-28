interface BasicDetails {
    name: string;
    location: string;
    jobRole: string;
    profileImage: string;
}

interface SocialDetails {
    socialMedium: string;
    url: string;
}

interface ProfileData {
    basicDetails: BasicDetails;
    socialDetails: SocialDetails[]
}

const profileData: ProfileData = {
    basicDetails: {
        name: "Jessica Randall",
        location: "London, United Kingdom",
        jobRole: "Front-end developer and avid reader.",
        profileImage: "avatar-jessica.jpeg",
    },
    socialDetails: [
        {
            socialMedium: 'Github',
            url: 'https://github.com',
        },
        {
            socialMedium: 'Frontend Mentor',
            url: 'https:/frontendmentor.io',
        },
        {
            socialMedium: 'Linkedin',
            url: 'https://linkedin.com',
        },
        {
            socialMedium: 'Twitter',
            url: 'https://x.com',
        },
        {
            socialMedium: 'Instagram',
            url: 'https://instagram.com',
        },
    ],
};

export default profileData;
