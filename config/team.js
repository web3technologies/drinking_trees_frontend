import { faTiktok, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'



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
        image: url,
        username: "VelveteenCryptoGirl",
        title: "Artist/Designer",
        socials: null
    },
    {
        image: url,
        username: "dannyboy",
        title: "Operations & Community Lead",
        socials: [
            {
                link: "https://twitter.com/dannyB995", 
                style: twitterStyle,
                icon: faTwitter
            }
        ],
    },
    {
        image: url,
        username: "doctorculture",
        title: "Social Media Content Marketing",
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
        image: url,
        username: "Buy_It_All",
        title: "Front-End and Blockchain Developer",
        socials: null
    }
]


export const advisorData = {
    image: url,
    username: "ZAch",
    title: "Founder Draco Dice"
}
