/// <reference types="vite/client" />

type BlogLogo = "./logo.png";

type BlogTextType = "" | string;

type BlogAboutmeItem = "" | string | string[];

interface BlogWhidbItem {
    title: BlogTextType;
    desp: BlogTextType;
}

interface BlogProjectItem {
    title: BlogTextType;
    desp: BlogTextType;
    logo: BlogTextType;
    link: BlogTextType;
}

interface BlogFriendItem {
    name: BlogTextType;
    desp: BlogTextType;
    avatar: BlogTextType;
    link: BlogTextType;
}
