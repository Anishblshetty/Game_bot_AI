# Wordle+

A sleek, dark-themed Wordle game built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just open and play.

---

## Features

- **4 difficulty levels** — Starter (4 letters), Easy (5), Medium (6), Hard (7)
- **Random word mode** — A new surprise word every game
- **Stats tracking** — Tracks games played, win %, current streak, best streak, and guess distribution (saved in localStorage)
- **Animated tiles** — Flip, pop, shake, and bounce animations for a polished feel
- **On-screen keyboard** — Color-coded key feedback as you play
- **Responsive design** — Works on desktop and mobile browsers
- **No install needed** — Pure HTML/CSS/JS, runs directly in the browser

---

## How to Play

1. Choose your difficulty on the home screen and click **Start Game**
2. Guess the hidden word — you have 6 attempts (5 for 4-letter mode)
3. After each guess, tiles change color to give you hints:
   - 🟩 **Green** — correct letter, correct position
   - 🟨 **Yellow** — correct letter, wrong position
   - ⬛ **Gray** — letter not in the word
4. After the game ends, your stats are shown — click **Exit to Home** to return to the home screen

---

## File Structure

```
wordle-plus/
├── index.html   # Main HTML structure and layout
├── style.css    # All styles and animations
└── script.js    # Game logic, word lists, and stats
```

---

## Getting Started

No build tools or server required. Just clone the repo and open the file:

```bash
git clone https://github.com/your-username/wordle-plus.git
cd wordle-plus
open index.html
```

Or simply download the three files and open `index.html` in any modern browser.

---

## Built With

- HTML5
- CSS3 (custom properties, keyframe animations, backdrop-filter)
- Vanilla JavaScript (no libraries)
- [Nunito](https://fonts.google.com/specimen/Nunito) font via Google Fonts

---

## License

This project is open source and available under the [MIT License](LICENSE).
