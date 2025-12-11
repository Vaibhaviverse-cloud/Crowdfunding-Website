const campaigns = [
  {
    title: "Help Children Complete Education",
    category: "Education",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d"
  },
  {
    title: "Cancer Treatment Support",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
  },
  {
    title: "Flood Relief Campaign",
    category: "Disaster",
    image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d"
  },
  {
    title: "Startup for Rural Employment",
    category: "Startups",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
  },
  {
    title: "Support Women Empowerment",
    category: "Social",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
  }
];

const campaignGrid = document.getElementById("campaignGrid");
const buttons = document.querySelectorAll(".cat");

// FUNCTION TO RENDER CAMPAIGNS
function renderCampaigns(list) {
  campaignGrid.innerHTML = "";

  if (list.length === 0) {
    campaignGrid.innerHTML = "<p>No campaigns available.</p>";
    return;
  }

  list.forEach(campaign => {
    const div = document.createElement("div");
    div.className = "campaign-card";

    div.innerHTML = `
      <img src="${campaign.image}" alt="${campaign.title}">
      <span class="tag">${campaign.category}</span>
      <h3>${campaign.title}</h3>
    `;

    campaignGrid.appendChild(div);
  });
}

// SHOW ALL ON PAGE LOAD
renderCampaigns(campaigns);

// FILTER ON BUTTON CLICK
buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.cat;

    if (category === "all") {
      renderCampaigns(campaigns);
    } else {
      const filtered = campaigns.filter(
        item => item.category === category
      );
      renderCampaigns(filtered);
    }
  });
});
