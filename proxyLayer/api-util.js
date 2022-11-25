const PROXY_Data = [
  {
    id: 1,
    title: "IT consultant and future guider",
    name: "Alam adam",
    description: "Arslan is good IT guider and solve many business problems",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
    houre: "32K+hrs",
    img: "./img/Image (13).png",
  },
  {
    id: 2,
    title: " UI UX designer",
    name: "Taylor jeed",
    description: "Ateeq is senior designer and have eyes of details",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
    houre: "24K+hrs",
    img: "./img/Image (14).png",
  },
  {
    id: 3,
    name: "Casy martha",
    title: " Front developer and Problem solver",
    description:
      "Sajid is very passionate about front end develpoment and ready to help out everyone",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
    houre: "29K+hrs",
    img: "./img/Image (7).png",
  },
];

export function getFeaturedEvents() {
  return PROXY_Data.filter((event) => event.isFeatured);
}

export function getAllMentors() {
  return PROXY_Data;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = PROXY_Data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getMentorsId(id) {
  return PROXY_Data.find((event) => event.id === id);
}
