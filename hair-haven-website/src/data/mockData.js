// export const services = [
//     { id: 1, name: "Haircut", price: 15, discount: 20, available: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JgL9cfWjJ9vv2L9ZH9S8uV8AmqIRaW9CRw&s" },
//     { id: 2, name: "Hair Coloring", price: 50, discount: null, available: true, image: "https://cdn.shopify.com/s/files/1/0434/4749/files/tombaxter_hair_BaroK1THL0z_grande.jpg?v=1521564131" },
//     { id: 3, name: "Styling", price: 30, discount: null, available: true, image: "https://i.pinimg.com/736x/f6/a9/cf/f6a9cff61e65a034fce9b54420cc6ff5.jpg" },
//     { id: 4, name: "Beard Trim", price: 10, discount: 10, available: true, image: "https://hairstyleonpoint.com/wp-content/uploads/2021/06/Groomed-5-O-Clock-Shadow.jpg" },
//   ];
  
//   export const offers = [
//     { id: 1, name: "20% off Haircut", service: "Haircut", validTill: "6 PM" },
//     { id: 2, name: "10% off Beard Trim", service: "Beard Trim", validTill: "4 PM" },
//   ];

import haircolor from "../context/haircolor.jpg"
import style2 from "../context/styling2.jpg"
import beard from "../context/styling.jpg"
import styling from "../context/beared.jpg"
export const services = [
  { id: 1, name: "Haircut", price: 30, duration: 30, discount: 20, available: true, image: style2 },
  { id: 2, name: "Beard Trim", price: 20, duration: 15, discount: 10, available: true, image: beard},
  { id: 3, name: "Hair Coloring", price: 80, duration: 60, discount: null, available: true, image: haircolor },
  { id: 4, name: "Styling", price: 50, duration: 30, discount: null, available: true, image: styling },
];

export const offers = [
  { 
    id: 1, 
    name: "20% off Haircut", 
    service: "Haircut", 
    discount: 20,
    validTill: "6 PM", 
    // If you want to use actual dates:
    // validUntil: "2023-12-31T18:00:00"
  },
  { 
    id: 2, 
    name: "10% off Beard Trim", 
    service: "Beard Trim", 
    discount: 10,
    validTill: "4 PM",
    // If you want to use actual dates:
    // validUntil: "2023-12-31T16:00:00" 
  },
];

export const reviews = [
  { id: 1, name: "John Doe", rating: 5, comment: "Great service! My hair looks amazing." },
  { id: 2, name: "Jane Smith", rating: 4, comment: "Very professional work. Will come back." },
  { id: 3, name: "Mike Johnson", rating: 5, comment: "Best haircut I've ever had!" },
];

export const galleryImages = [
  { id: 1, url: "https://example.com/gallery1.jpg", description: "Modern bob cut" },
  { id: 2, url: "https://example.com/gallery2.jpg", description: "Vibrant hair coloring" },
  { id: 3, url: "https://example.com/gallery3.jpg", description: "Classic men's haircut" },
  { id: 4, url: "https://example.com/gallery4.jpg", description: "Elegant updo for special occasions" },
];

