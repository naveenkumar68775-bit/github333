const events = [
  {
    title: "JavaScript Basics",
    speaker: "John",
    time: "09:30",
    category: "Workshop",
    image: "https://t3.ftcdn.net/jpg/00/77/94/04/360_F_77940420_GpoP08HyIvbklcTTUYl20ItCOq2QEpxL.jpg",
  },
  {
    title: "Future of AI",
    speaker: "Jane Smith",
    time: "11:00",
    category: "Keynote",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Future_Of_Artificial_Intelligence.jpg "
  },
  {
    title: "Web Security Panel",
    speaker: "Panel Team",
    time: "14:30",
    category: "Panel",
    image: "https://wallpapers.com/images/hd/technology-background-zj8rwjx8jhg0nybl.jpg"
  },
  {
    title: "React Deep Dive",
    speaker: "Alex Brown",
    time: "16:00",
    category: "Workshop",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*JAMj-OH1_mW2ozStjp_DwQ.png"
  }
];
const container = document.getElementById("eventContainer");


function hatake(eventList) {
  container.innerHTML = "";

  eventList.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("card", event.category);

    card.innerHTML = `
      <img src="${event.image}">
      <h3>${event.title}</h3>
      <p><b>Speaker:</b> ${event.speaker}</p>
      <p><b>Time:</b> ${event.time}</p>
      <p><b>Category:</b> ${event.category}</p>
    `;
    container.appendChild(card);
  });
}
hatake(events);
function filterCategory(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.classList.toggle("hidden", !card.classList.contains(category));
  });
}
function showAll() {
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("hidden");
  });
}


function filterByTime(period) {
  const filteredEvents = events.filter(event => {
    const hour = new Date(`1970-01-01T${event.time}`).getHours();
    return period === "morning" ? hour < 12 : hour >= 12;
  });
  hatake(filteredEvents);
}
