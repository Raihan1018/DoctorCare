// services card script

const services = [
  {
    id: 1,
    title: "Digestive Problems",
    description:
      "A small amount of discomfort may occur, but we aim to minimize side effects. Our goal is to provide effective relief with the least inconvenience.",
  },
  {
    id: 2,
    title: "Respiratory Issues",
    description:
      "From seasonal allergies to chronic asthma, our specialists provide personalized care to help you breathe easier and stay active.",
  },
  {
    id: 3,
    title: "Skin Conditions",
    description:
      "We treat a wide range of dermatological issues with gentle, effective therapies designed to restore and protect your skin’s health.",
  },
  {
    id: 4,
    title: "Mental Health Support",
    description:
      "Your emotional well-being is just as important as your physical health. Our professionals are here to listen, support, and guide you.",
  },
  {
    id: 5,
    title: "Cardiovascular Care",
    description:
      "Preventive checkups and heart health management to keep your cardiovascular system functioning at its best.",
  },
  {
    id: 6,
    title: "Pediatric Consultation",
    description:
      "Compassionate care tailored for children’s unique health needs, ensuring healthy growth and development from infancy through adolescence.",
  },
];

// generate service card function
function generateServiceHTML(service) {
  return `
  
          <div
            class="bg-white shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer rounded-lg overflow-hidden"
          >
            <div class = "p-6 text-left">
              <img src="./images/service-icon.png" alt="service icon">
              <h3 class = "text-2xl font-semibold my-4">${service.title}</h3>
              <h3 class = "text-gray-700 mb-4">${service.description}</h3>
            </div>
          </div>

  `;
}

const serviceContainer = document.getElementById("service-container");
serviceContainer.innerHTML = services
  .map((service) => generateServiceHTML(service))
  .join("");

// get current year for footer section

// const currentYear = new Date().getFullYear();
// // Set the year inside the span with id="year"
// document.getElementById("year").textContent = currentYear;


const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;