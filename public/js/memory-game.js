const galleryBox = document.getElementById("gallery-box");
const imagesLink = [
  "https://images.unsplash.com/photo-1616924451835-747bd5cd08ee?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1529594350387-7d2b36e1d109?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1678259498265-a91050ff48ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1589582644375-4681590a34f2?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549845375-ce0a0ba8288c?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

let savedIndex = null;
let globalGalleryItem;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
shuffleArray(imagesLink).forEach((image, index) => {
  const galleryItem = document.createElement("div");
  const galleryImage = document.createElement("img");
  galleryItem.setAttribute("class", "gallery-item");
  galleryImage.setAttribute("src", image);

  galleryItem.setAttribute("id", `gallery-item-${index}`);
  galleryItem.appendChild(galleryImage);
  galleryBox.appendChild(galleryItem);
});

function handleClick(id) {
  if (id === globalGalleryItem) {
    window.alert("¡Ganaste!");
    const galleryItem = document.getElementById(id);
    const galleryImage = document.createElement("img");
    galleryItem.setAttribute("class", "gallery-item");
    galleryImage.setAttribute(
      "src",
      imagesLink[globalGalleryItem.split("-")[1]]
    );

    galleryItem.setAttribute("id", id);
  } else {
    window.alert("Elección incorrecta.");
  }
}

setTimeout(() => {
  const randomIndex = Math.floor(Math.random() * 5) + 1;

  imagesLink.forEach((_, index) => {
    const galleryItem = document.getElementById(`gallery-item-${index}`);
    galleryItem.setAttribute("class", "cover");
    galleryItem.onclick = () => handleClick(`gallery-item-${index}`);
  });

  const whereIs = document.getElementById("whereIs");
  const galleryItem = document.createElement("div");
  const galleryImage = document.createElement("img");
  galleryItem.setAttribute("class", "gallery-item");
  galleryImage.setAttribute("src", imagesLink[randomIndex]);

  galleryItem.setAttribute("id", `gallery-item-${randomIndex}`);

  galleryItem.appendChild(galleryImage);
  whereIs.setAttribute("class", "where-is");
  whereIs.appendChild(galleryItem);

  globalGalleryItem = `gallery-item-${randomIndex}`;
}, 3000);
