import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'The Nikah Matrimony',
        description: "I led the development of a matrimony mobile app where we utilized Firebase extensively. Firebase provided secure authentication, seamless file storage through Firebase Storage, and efficient data management using Firestore, Firebase's NoSQL database solution. To enhance user privacy, we implemented AES encryption for images and integrated OCR functionality for text recognition within the app. We also employed a specialized image blurring library to ensure user data confidentiality. This combination of Firebase services and advanced features was crucial in delivering a secure and user-friendly matrimony app.",
        tools: ['Android Development' , 'Kotlin' , 'XML' , 'Firebase' , 'AES' , 'OCR','API'],
        role: 'Android Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'CyberCensor',
        description: 'I developed Cybercensor, a web app using Firebase and ReactJS, integrated with Twitter and YouTube APIs. It employs machine learning algorithms like Random Forests, hosted on Flask locally, to detect hate speech and cyberbullying on social media. By automating the detection process, Cybercensor aims to reduce human effort and swiftly flag harmful content, enhancing online safety and efficiency.',
        tools: ['React','Flask','API', 'Firebase' ,'javascrip' ,'node'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },