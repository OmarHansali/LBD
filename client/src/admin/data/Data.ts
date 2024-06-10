import user from "/assets/images/user.png"
import slack from "/assets/images/slack.svg"
import avatar6 from "/assets/images/avatar-6.png"
import avatar7 from "/assets/images/avatar-7.png"
import avatar8 from "/assets/images/avatar-8.png"
import behance from "/assets/images/behance.png"
import chatgpt from "/assets/images/chatgpt.png"

export const usersData = [
    {
        id: 1,
        username: "tunia",
        email: "Global@gmail.com",
        phoneNumber: "+94993 930 30-3",
    },
    {
        id: 2,
        username: "barney",
        email: "barney.murray@gmail.com",
        phoneNumber: "+12345 678 90-2",
    },
    {
        id: 3,
        username: "ressie",
        email: "ressie.ruecker@gmail.com",
        phoneNumber: "+98765 432 10-3",
    },
    {
        id: 4,
        username: "teresa",
        email: "teresa.mertz@gmail.com",
        phoneNumber: "+45678 901 23-4",
    },
    {
        id: 5,
        username: "chelsey",
        email: "chelsey.hackett@gmail.com",
        phoneNumber: "+19283 746 59-5",
    },
    {
        id: 6,
        username: "tatyana",
        email: "tatyana.metz@gmail.com",
        phoneNumber: "+38475 123 67-6",
    },
    {
        id: 7,
        username: "oleta",
        email: "oleta.harvey@gmail.com",
        phoneNumber: "+19283 746 59-7",
    },
    {
        id: 8,
        username: "bette",
        email: "bette.haag@gmail.com",
        phoneNumber: "+10293 847 56-8",
    },
    {
        id: 9,
        username: "meda",
        email: "meda.ebert@gmail.com",
        phoneNumber: "+48576 291 34-9",
    },
    {
        id: 10,
        username: "elissa",
        email: "elissa.stroman@gmail.com",
        phoneNumber: "+57639 281 45-0",
    },
];


export const sallesData = [
    {
        id: 1,
        type: "salle",
        number: "39JHK0",
        material: ["Projector"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: true
    },
    {
        id: 2,
        type: "box",
        number: "20LDN3",
        material: ["Chairs"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: false
    },
    {
        id: 3,
        type: "fablab",
        number: "17MNB1",
        material: ["3D Printer", "Projector"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: true
    },
    {
        id: 4,
        type: "salle",
        number: "25QRT4",
        material: ["Computers"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: false
    },
    {
        id: 5,
        type: "box",
        number: "42PLM5",
        material: ["Microphone"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: true
    },
    {
        id: 6,
        type: "fablab",
        number: "38NFR9",
        material: ["Laptops"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: false
    },
    {
        id: 7,
        type: "salle",
        number: "14DFT2",
        material: ["Whiteboard"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: true
    },
    {
        id: 8,
        type: "box",
        number: "19QWE7",
        material: ["Tables"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: false
    },
    {
        id: 9,
        type: "fablab",
        number: "22BVC6",
        material: ["Laser Cutter"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: true
    },
    {
        id: 10,
        type: "salle",
        number: "15QAZ8",
        material: ["Chairs"],
        capacity: Math.floor(Math.random() * (30 - 6 + 1)) + 6,
        availability: true
    }
];

export const materials = [
    { id: 1, material: "3D Printer" },
    { id: 2, material: "Projector" },
    { id: 3, material: "Chairs" },
    { id: 4, material: "Tables" },
    { id: 5, material: "Whiteboard" },
    { id: 6, material: "Laptop" },
    { id: 7, material: "Computers" },
    { id: 8, material: "Microphone" },
    // Add more materials as needed
];

export const sallesType = [
    { id: 1, type: "salle" },
    { id: 2, type: "box" },
    { id: 3, type: "fablab" },
    // Add more materials as needed
];


export const reservationsData = [
    {
        "id": 1,
        "userId": "tunia",
        "salleId": "salle",
        "startDate": "01-03-2021",
        "endDate": "04-05-2022",
        "duration": 15,
        "material": ["Tables"]
    },
    {
        "id": 2,
        "userId": "barney",
        "salleId": "box",
        "startDate": "01-03-2022",
        "endDate": "04-05-2023",
        "duration": 30,
        "material": ["Projector"]
    },
    {
        "id": 3,
        "userId": "ressie",
        "salleId": "fablab",
        "startDate": "01-03-2023",
        "endDate": "04-05-2024",
        "duration": 45,
        "material": ["Chairs"]
    },
    {
        "id": 4,
        "userId": "teresa",
        "salleId": "salle",
        "startDate": "01-03-2024",
        "endDate": "04-05-2025",
        "duration": 60,
        "material": ["3D Printer"]
    },
    {
        "id": 5,
        "userId": "chelsey",
        "salleId": "box",
        "startDate": "01-03-2025",
        "endDate": "04-05-2026",
        "duration": 75,
        "material": ["Computers"]
    },
    {
        "id": 6,
        "userId": "tatyana",
        "salleId": "fablab",
        "startDate": "01-03-2026",
        "endDate": "04-05-2027",
        "duration": 90,
        "material": ["Microphone"]
    },
    {
        "id": 7,
        "userId": "oleta",
        "salleId": "salle",
        "startDate": "01-03-2027",
        "endDate": "04-05-2028",
        "duration": 105,
        "material": ["Laptops"]
    },
    {
        "id": 8,
        "userId": "bette",
        "salleId": "box",
        "startDate": "01-03-2028",
        "endDate": "04-05-2029",
        "duration": 120,
        "material": ["Whiteboard"]
    },
    {
        "id": 9,
        "userId": "meda",
        "salleId": "fablab",
        "startDate": "01-03-2029",
        "endDate": "04-05-2030",
        "duration": 135,
        "material": ["Tables"]
    },
    {
        "id": 10,
        "userId": "elissa",
        "salleId": "salle",
        "startDate": "01-03-2030",
        "endDate": "04-05-2031",
        "duration": 150,
        "material": ["Microphone"]
    }
]



export const contactsData = [
    {
        id: 1,
        username: "John Doe",
        profile: user,
        email: "john@gmail.com",
        createdAt: "10-02-2024 12:39",
        title: "Rapport About CS50",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum."
    },
    {
        id: 2,
        username: "Jane Smith",
        profile: avatar6,
        email: "jane@gmail.com",
        createdAt: "15-03-2024 08:22",
        title: "Meeting Notes",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        id: 3,
        username: "Alice Johnson",
        profile: avatar7,
        email: "alice@gmail.com",
        createdAt: "20-04-2024 14:15",
        title: "Project Plan",
        content: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 4,
        username: "Bob Brown",
        profile: avatar8,
        email: "bob@gmail.com",
        createdAt: "05-05-2024 09:30",
        title: "Weekly Report",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 5,
        username: "Charlie Davis",
        profile: slack,
        email: "charlie@gmail.com",
        createdAt: "12-06-2024 16:45",
        title: "Slack Integration",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 6,
        username: "David Evans",
        profile: behance,
        email: "david@gmail.com",
        createdAt: "19-07-2024 11:00",
        title: "Design Portfolio",
        content: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec."
    },
    {
        id: 7,
        username: "Emma Wilson",
        profile: chatgpt,
        email: "emma@gmail.com",
        createdAt: "25-08-2024 13:29",
        title: "AI Research",
        content: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat."
    }
]