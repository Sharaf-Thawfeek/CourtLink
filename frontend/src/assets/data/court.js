import courtImg01 from "../images/cImg1.jpg";
import courtImg02 from "../images/cImg2.jpg";
import courtImg03 from "../images/cImg3.jpg";

export const courts = [
  {
    id: "01",
    name: "Elite Sports Arena",
    location: "Colombo, Sri Lanka",
    type: "Indoor",
    avgRating: 4.8,
    totalRating: 200,
    photo: courtImg01,
    owner: "John Doe",
    totalBooking:3500,
  },
  {
    id: "02",
    name: "Champion's Court",
    location: "Kandy, Sri Lanka",
    type: "Outdoor",
    avgRating: 4.7,
    totalRating: 150,
    photo: courtImg02,
    owner: "Jane Smith",
    totalBooking:2010,
  },
  {
    id: "03",
    name: "Pro Turf Arena",
    location: "Galle, Sri Lanka",
    type: "Indoor",
    avgRating: 4.9,
    totalRating: 250,
    photo: courtImg03,
    owner: "Michael Lee",
    totalBooking:3001,
  },
];

