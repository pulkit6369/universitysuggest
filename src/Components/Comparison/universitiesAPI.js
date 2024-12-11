// universitiesAPI.js
const universities = [
    { id: 1, name: "University A", location: "City A", rank: 5, courses: ["Course 1", "Course 2"], fees: "$10,000/year", facilities: "Library, Sports Complex", alumni: "John Doe",  image: "/images/university-a.jpg"  },
    { id: 2, name: "University B", location: "City B", rank: 10, courses: ["Course 3", "Course 4"], fees: "$15,000/year", facilities: "Gym, Cafeteria", alumni: "Jane Smith",  image: "/images/university-a.jpg"  },
    { id: 3, name: "University C", location: "City C", rank: 2, courses: ["Course 5", "Course 6"], fees: "$20,000/year", facilities: "Hostel, Research Labs", alumni: "Alice Johnson",  image: "/images/university-a.jpg"  },
    { id: 4, name: "University D", location: "City D", rank: 8, courses: ["Course 7", "Course 8"], fees: "$12,000/year", facilities: "Sports Grounds, Auditorium", alumni: "Bob Brown" ,  image: "/images/university-a.jpg" },
    { id: 5, name: "University E", location: "City E", rank: 1, courses: ["Course 9", "Course 10"], fees: "$25,000/year", facilities: "Advanced Labs, Art Studio", alumni: "Charlie Davis",  image: "/images/university-a.jpg"  },
    { id: 6, name: "University F", location: "City F", rank: 15, courses: ["Course 11", "Course 12"], fees: "$8,000/year", facilities: "Community Center, Open Library", alumni: "Diana Lee" ,  image: "/images/university-a.jpg" },
    { id: 7, name: "University G", location: "City G", rank: 7, courses: ["Course 13", "Course 14"], fees: "$14,000/year", facilities: "Medical Center, Gymnasium", alumni: "Edward Wright",  image: "/images/university-a.jpg"  },
    { id: 8, name: "University H", location: "City H", rank: 12, courses: ["Course 15", "Course 16"], fees: "$18,000/year", facilities: "Innovation Hub, Cafeteria", alumni: "Fiona Adams",  image: "/images/university-a.jpg"  },
    { id: 9, name: "University I", location: "City I", rank: 3, courses: ["Course 17", "Course 18"], fees: "$19,000/year", facilities: "Library, Cultural Center", alumni: "George Harris" ,  image: "/images/university-a.jpg" },
    { id: 10, name: "University J", location: "City J", rank: 9, courses: ["Course 19", "Course 20"], fees: "$16,000/year", facilities: "Hostel, Research Labs", alumni: "Helen Martin",  image: "/images/university-a.jpg"  },
    { id: 11, name: "University K", location: "City K", rank: 6, courses: ["Course 21", "Course 22"], fees: "$11,000/year", facilities: "Sports Complex, Innovation Lab", alumni: "Ian Scott",  image: "/images/university-a.jpg"  },
    { id: 12, name: "University L", location: "City L", rank: 14, courses: ["Course 23", "Course 24"], fees: "$13,000/year", facilities: "Library, Gymnasium", alumni: "Jessica Clark" ,  image: "/images/university-a.jpg" },
    { id: 13, name: "University M", location: "City M", rank: 4, courses: ["Course 25", "Course 26"], fees: "$17,000/year", facilities: "Research Center, Hostel", alumni: "Kevin Lewis",  image: "/images/university-a.jpg"  },
    { id: 14, name: "University N", location: "City N", rank: 13, courses: ["Course 27", "Course 28"], fees: "$9,000/year", facilities: "Community Center, Art Studio", alumni: "Linda White" ,  image: "/images/university-a.jpg" },
    { id: 15, name: "University O", location: "City O", rank: 11, courses: ["Course 29", "Course 30"], fees: "$20,000/year", facilities: "Sports Grounds, Advanced Labs", alumni: "Michael Hall" ,  image: "/images/university-a.jpg" },
    { id: 16, name: "University P", location: "City P", rank: 16, courses: ["Course 31", "Course 32"], fees: "$12,000/year", facilities: "Cafeteria, Library", alumni: "Nina Baker",  image: "/images/university-a.jpg"  },
    { id: 17, name: "University Q", location: "City Q", rank: 18, courses: ["Course 33", "Course 34"], fees: "$10,500/year", facilities: "Research Labs, Cultural Hub", alumni: "Oscar Perry",  image: "/images/university-a.jpg"  },
    { id: 18, name: "University R", location: "City R", rank: 20, courses: ["Course 35", "Course 36"], fees: "$22,000/year", facilities: "Library, Sports Arena", alumni: "Paula Cooper",  image: "/images/university-a.jpg"  },
    { id: 19, name: "University S", location: "City S", rank: 19, courses: ["Course 37", "Course 38"], fees: "$24,000/year", facilities: "Advanced Labs, Art Studio", alumni: "Robert King" ,  image: "/images/university-a.jpg" },
    { id: 20, name: "University T", location: "City T", rank: 17, courses: ["Course 39", "Course 40"], fees: "$15,000/year", facilities: "Innovation Hub, Gymnasium", alumni: "Sarah Evans" ,  image: "/images/university-a.jpg"  },
  ];
  
  export const fetchUniversities = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(universities), 500); // Simulate API delay
    });
  };
  