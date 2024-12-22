import SalmaImage from "../images/salma.jpg";
import NadaImage from "../images/nada.png";
import AmineImage from "../images/amine.png";
import Vet from '../images/vet.jpeg';
import Law from '../images/law.jpg';
import Food from '../images/image.png';

const experts = [
    {
      id: 1,
      name: "Dr. Salma - Your Animal Care Expert",
      description: "Ask your questions to an expert veterinarian about the health, nutrition, and care of your pets.",
      buttonText: "Start a conversation",
      image: SalmaImage,
      category: "Veterinarian",
      customMessage: "Hi! I'm Dr. Salma. What are your questions? Ask me about your pets' health, nutrition, and care.",
      background: Vet,
    },
    {
      id: 2,
      name: "Nada - Experienced Lawyer",
      description: "Share your legal questions with a qualified lawyer. Get quick and tailored answers.",
      buttonText: "Start a conversation",
      image: NadaImage,
      category: "Law",
      customMessage: "Hello! I'm Nada. How can I help you with your legal issues?",
      background: Law
    },
    {
      id: 3,
      name: "Chef Amine - Your Culinary Expert",
      description: "Discover delicious recipes and tips to impress your guests.",
      buttonText: "Start a conversation",
      image: AmineImage,
      category: "Cuisine",
      customMessage: "Hey! I'm Chef Amine. Let's talk about cooking and recipes!",
      background: Food
    },
  ];

export default experts;