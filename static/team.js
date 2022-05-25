import { faTiktok, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { basePFPURL } from '../config/config'


const url = "https://gateway.pinata.cloud/ipfs/QmQBHrUk5ev9gvsHHk3ToMSixBWMhTvTZ6NpRK1ueSUdxB"


export const tikTokStyle = {
    width: "25%",
    color: "#FFFFFF",
    cursor: "pointer"
}

export const youtTubeStyle = {
    width: "25%",
    color: "#ff0000",
    cursor: "pointer"
}

export const twitterStyle = {
    width: "25%",
    color: "#1da1f2",
    cursor: "pointer"
}



export const teamData = [
    {
        image: `${basePFPURL}velveteencryptogirl.png`,
        username: "VelveteenCryptoGirl",
        title: "Artist/Designer",
        socials: null
    },
    {
        image: `${basePFPURL}dannyboy.png`,
        username: "dannyboy",
        title: "Strategy & Operations",
        socials: [
            {
                link: "https://twitter.com/dannyB995", 
                style: twitterStyle,
                icon: faTwitter
            }
        ],
    },
    {
        image: `${basePFPURL}doctorculture.JPG`,
        username: "doctorculture",
        title: "Community Lead",
        socials:[
            {
                link: "https://www.tiktok.com/@doctorculture", 
                style: tikTokStyle,
                icon: faTiktok
            },
            {
                link:  "https://www.youtube.com/doctorculture", 
                style:  youtTubeStyle,
                icon:  faYoutube
            },
        ],
    },
    {
        image: `${basePFPURL}Buy_It_all.png`,
        username: "Buy_It_All",
        title: "Front-End and Blockchain Developer",
        socials: null
    },
    {
        image: `https://i.imgur.com/g2WcNX2.png`,
        username: "Yoshi",
        title: "Security Engineer and Front-End Developer",
        socials: null
    }
]

export const teamData2 = [
    {
        image: `${basePFPURL}2.png`,
        username: "yoshi",
        title: "Security Engineer",
        socials: null
    },
    {
        image: `${basePFPURL}1.png`,
        username: "NeverHedge Scott",
        title: "",
        socials:[
            {
                link:  "https://www.youtube.com/c/NeverHedgeDFSCryptoSportsBettingStocks", 
                style:  youtTubeStyle,
                icon:  faYoutube
            },
        ],
    },
]


export const advisorData = {
    image: `${basePFPURL}IMG-6233.JPG`,
    username: "ZAch",
    title: "Founder Draco Dice"
}
