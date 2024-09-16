const content = [
  {
    'image': 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
    'caption': 'Photo by Dave Hoefler on Unsplash'
  },
  {
    'image': 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
    'caption': 'Photo by Sherman Yang n Unsplash'
  },
  {
    'image': 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
    'caption': 'Photo by Jakob Owens on Unsplash'
  },
  {
    'image': 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
    'caption': 'Photo by Dan Grinwis on Unsplash'
  },
  {
    'image': 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    'caption': 'Photo by Vincentiu Solomon on Unsplash'
  },
  {
    'image': 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
    'caption': 'Photo by Silas Baisch on Unsplash'
  },
  {
    'image': 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
    'caption': 'Photo by Eugene Golovesov on Unsplash'
  },
  {
    'image': 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
    'caption': 'Photo by Jennifer reynolds on Unsplash'
  },
  {
    'image': 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
    'caption': 'Photo by Kellen Riggin on Unsplash'
  },
  {
    'image': 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
    'caption': 'Photo by Rafael Hoyos on Unsplash'
  },
  {
    'image': 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
    'caption': 'Photo by Sonya Romanovska on Unsplash'
  },
]
const ul = document.querySelector('ul');
const featureImg = document.querySelector('.feature img');
const caption = document.querySelector('.caption');
let index = 0;

function updateImageAndCaption() {
  if (index >= 0 && index < content.length) {
    const item = content[index];
    featureImg.src = `./images/${item.image}`;
    caption.innerHTML = item.caption;
    document.querySelector('.selected').classList.remove('selected');
    ul.children[index].classList.add('selected');
  } else {
    console.log(`${index}`);
  }
}

// Generowanie listy zdjęć
ul.innerHTML = content.map((item, i) => `
  <li${i === 0 ? ' class="selected"' : ''}>
    <a href="#">
      <img src="./images/${item.image}" alt="">
    </a>
  </li>
`).join('');

// Obsługa kliknięć na miniaturach
ul.querySelectorAll('li').forEach((li, i) => {
  li.addEventListener('click', (e) => {
    index = i;
    updateImageAndCaption();
  });
});

// Obsługa przycisku "Left"
document.querySelector('.left').addEventListener('click', (e) => {
  index = (index - 1 + content.length) % content.length;
  updateImageAndCaption();
});

// Obsługa przycisku "Right"
document.querySelector('.right').addEventListener('click', (e) => {
  index = (index + 1) % content.length;
  updateImageAndCaption();
});

updateImageAndCaption();