import phoebeBoard from './images/Phoebe/Phoebe-Board.png'
import phoebeLanding from './images/Phoebe/Phoebe-Landing.png'
import phoebeOverview from './images/Phoebe/Phoebe-Overview.png'
import phoebeCreate from './images/Phoebe/Phoebe-Create.png'
import phoebeHome from './images/Phoebe/Phoebe-Home.png'

export const projects = {
    1:{
        id: 1,
        name: 'GetTogether',
        description: 'GatherUp is a "MeetUp" clone that is mainly for people that have the same interest and are able to join or create groups that dedicate to a certain events.',
        tools: ['Javascript', 'React', 'Express.js', 'SQL', 'HTML', 'CSS'],
        images: [phoebeLanding, phoebeHome, phoebeCreate, phoebeOverview, phoebeBoard]
    },
    2: {
        id: 2,
        name: 'Accord',
        description: 'Accord is a Discord Clone that specializes in instant messaging and VoIP social platforms. Users have the ability to communicate with voice calls, video calls, text messaging, media, and files in private chats or as part of communities called "servers".',
        tools: ['Javascript', 'Python', 'React', 'Flask', 'SQLAlchemy', 'Redux', 'Socket.io', 'AWS', 'HTML', 'CSS']
    },
    3: {
        id: 3,
        name: 'Raynian',
        description: 'Raynian is a social productivity application that allows users to study with others, including unlockable features based on time spent studying, sending messages, video chatting, and customization to profile dashboard.',
        frontend: ['Javascript', 'React', 'Tailwind.css', 'Framer Motion', 'MongoDB', 'HTML', 'CSS'],
        backend: []
    },
    4: {
        id: 4,
        name: 'Phoebe',
        description: 'Phoebe is an Asana clone which is a "work management" platform designed to help teams organize, track, and manage their work.',
        frontend: ['Javascript', 'React', 'Redux', 'Express.js', 'SQL', 'HTML', 'CSS', 'Tailwind.css', 'Framer Motion', 'React-Beautiful-DnD'],
        backend: []
    },
};
