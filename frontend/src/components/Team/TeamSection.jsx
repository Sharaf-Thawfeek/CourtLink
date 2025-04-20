import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Ramzy from '../../assets/images/ramzy.jpg'
import Prathiraja from '../../assets/images/prathiraja.jpg'
import Anas from '../../assets/images/anas.jpg'
import ushna from '../../assets/images/ushna.jpg'
import sharaf from '../../assets/images/sharaf.jpg'


const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sharaf Thawfeek",
      role: "Founder & CEO",
      bio: "Passionate about sports technology with 10+ years in the industry.",
      img: sharaf
    },
    {
      id: 2,
      name: "Ramzy hafeel",
      role: "CTO",
      bio: "Tech visionary who builds scalable platforms for sports communities.",
      img: Ramzy,
    },
    {
      id: 3,
      name: "Anas Ahamed",
      role: "Head of Operations",
      bio: "Ensures seamless experiences for both players and facility partners.",
      img: Anas
    },
    {
      id: 4,
      name: "Ushna uwais",
      role: "Marketing Director",
      bio: "Connects CourtLink with sports enthusiasts nationwide.",
      img: ushna
    },
    {
      id: 5,
      name: "Prathiraja",
      role: "Marketing Director",
      bio: "Connects CourtLink with sports enthusiasts nationwide.",
      img: Prathiraja
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {teamMembers.map((member) => (
        <div 
          key={member.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          <img 
            src={member.img} 
            alt={member.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-headingColor mb-1">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-3">{member.role}</p>
            <p className="text-gray-600 mb-4">{member.bio}</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;