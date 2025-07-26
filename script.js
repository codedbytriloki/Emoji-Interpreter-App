const emojiList = [
  { emoji: "😎", name: "smiling face with sunglasses" },
  { emoji: "🤔", name: "thinking face" },
  { emoji: "🥺", name: "pleading face" },
  { emoji: "😭", name: "loudly crying face" },
  { emoji: "🤝", name: "friendship"},
  { emoji: "👏", name:"clap"},
  { emoji: "😘", name:"kiss"},
  { emoji: "🥳", name:"party"},
  { emoji: "☺️", name:"smile"},
  { emoji:  "😢", name:"sad"},
  { emoji: "😀", name: "grinning face" },
  { emoji: "😂", name: "face with tears of joy" },
  { emoji: "😍", name: "smiling face with heart-eyes" },
  { emoji: "🔥", name: "fire" },
  { emoji: "👍", name: "thumbs up" },
  { emoji: "🥶", name: "cold face" },
  { emoji: "🤪", name: "zany face" },
  { emoji: "😜", name: "winking face with tongue" },
  { emoji: "😝", name: "squinting face with tongue" },
  { emoji: "🤤", name: "drooling face" },
  { emoji: "😬", name: "grimacing face" },
  { emoji: "😳", name: "flushed face" },
  { emoji: "😱", name: "face screaming in fear" },
  { emoji: "😨", name: "fearful face" },

]

const emojiGrid = document.getElementById("emojiGrid");
const meaningEl = document.getElementById('meaning');

emojiList.forEach((emj) => {
  const span = document.createElement('span');
  span.innerHTML = `${emj.emoji}`;
  span.classList.add('emoji');
  emojiGrid.appendChild(span);

  span.addEventListener('click', () => {
    document.querySelectorAll('.emoji').forEach(e => e.classList.remove('active'));
    span.classList.add('active');
    meaningEl.innerHTML = `Meaning : ${emj.name},${emj.emoji}`;
  })

})