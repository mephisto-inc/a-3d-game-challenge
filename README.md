# A 3D Game Challenge: Nightraider Tode

Play online with any browser or system at itch.io [here](https://porcelumex.itch.io/a-3d-game-challenge).

A 3D browser arena shooter built for the JetBrains Academy **Build Your Game** challenge.

![Gameplay](docs/gameplay.gif)

## Description

- Three class abilities: Pusher, Dasher and Anchor
- Card draft for upgrades after each wave
- Boss fights on waves 3 and 5
- Wave 5 never ends
- Achievements and a compendium
- Background music in steps that change with the wave and the boss
- Touch support for mobile

## Guide

- Use the mouse to move. On mobile, tap the screen. Tode jumps toward your pointer.
- Double-click or double-tap to use your class ability.
- Choose an upgrade after each wave. Collect cards to build your strategy.
- Survive as long as you can. Waves only get harder, and wave 5 never ends.
- Unlock all achievements and complete the compendium.
- Try to break, crash, or freeze the game.

## Requirements

- Node.js `v24.21.0` or newer
- npm `12.1.0` or newer
- A modern web browser with WebGL enabled

## Build and run

```bash
# 1. Get the code
git clone https://github.com/mephisto-inc/a-3d-game-challenge.git
cd a-3d-game-challenge

# 2. Install the dependencies
npm install

# 3. Run in development mode
npm run dev

# 4. Build the final version
npm run build
```

After step 3, open the address printed in the terminal (for example `http://localhost:5173`).
After step 4, the finished game is in the `./dist` folder.

## Third-party assets

Every asset that I did not create myself is listed here, with its source and license. The license shown is the one
written on the source page.

The user interface is made with CSS and Unicode emojis, with no image files.

### 3D models (Poly Pizza)

| Asset           | Author       | Source                                   | License                                                   |
|-----------------|--------------|------------------------------------------|-----------------------------------------------------------|
| Small House     | Jarlan Perez | [link](https://poly.pizza/m/053kskrV4U_) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) |
| House           | Quaternius   | [link](https://poly.pizza/m/oJJIRwv6Bo)  | [CC0](https://creativecommons.org/publicdomain/zero/1.0/) |
| House           | Quaternius   | [link](https://poly.pizza/m/L7h0SjZX2K)  | CC0                                                       |
| House           | Quaternius   | [link](https://poly.pizza/m/vZ1CLbWmSx)  | CC0                                                       |
| Hut             | Quaternius   | [link](https://poly.pizza/m/wxi3kAu5ey)  | CC0                                                       |
| Armabee         | Quaternius   | [link](https://poly.pizza/m/42djT5zJnx)  | CC0                                                       |
| Armabee Evolved | Quaternius   | [link](https://poly.pizza/m/GcttdvsqsQ)  | CC0                                                       |
| Enemy Flying    | Quaternius   | [link](https://poly.pizza/m/kzpT6fNmM5)  | CC0                                                       |
| Squidle         | Quaternius   | [link](https://poly.pizza/m/54QyRcsogk)  | CC0                                                       |
| Pigeon          | Quaternius   | [link](https://poly.pizza/m/9NGlBTpDEr)  | CC0                                                       |
| Pine            | Quaternius   | [link](https://poly.pizza/m/rfnxJv0Rqa)  | CC0                                                       |
| Pine            | Quaternius   | [link](https://poly.pizza/m/igSu0cPoBz)  | CC0                                                       |
| Pine            | Quaternius   | [link](https://poly.pizza/m/79gmlLnweB)  | CC0                                                       |
| Pine            | Quaternius   | [link](https://poly.pizza/m/Zt62gceKXZ)  | CC0                                                       |
| Twisted Tree    | Quaternius   | [link](https://poly.pizza/m/9aWlx82xUf)  | CC0                                                       |
| Twisted Tree    | Quaternius   | [link](https://poly.pizza/m/GVTsMmuzv7)  | CC0                                                       |
| Twisted Tree    | Quaternius   | [link](https://poly.pizza/m/7PDBpElkQr)  | CC0                                                       |

"Small House" by Jarlan Perez, via Poly Pizza, is licensed under Creative Commons Attribution 3.0 (CC BY 3.0).

### Music, sound effects and textures (OpenGameArt)

| Asset                             | Type          | Author                    | Source                                                            | License        |
|-----------------------------------|---------------|---------------------------|-------------------------------------------------------------------|----------------|
| Music loop variations             | Music         | obscure music             | [link](https://opengameart.org/content/music-loop-variations)     | CC0            |
| 8-Bit Sound Effect Pack           | Sound effects | OwlishMedia               | [link](https://opengameart.org/content/8-bit-sound-effect-pack)   | CC0 (see note) |
| handpainted stone-texture (floor) | Texture       | MELLE (Melissa Krautheim) | [link](https://opengameart.org/content/handpainted-stone-texture) | CC0            |

To be noted: the page of the 8-Bit Sound Effect Pack says CC0, but the zip file has a `License.txt` that says the sounds
can be
used for any purpose except reselling them. This game does not resell them.

### Inspiration

- Inspired by Bizarre Brigade from Zenless Zone Zero. No assets were taken from it.

## Agentic tools used

| Tool                  | Used for                                                    |
|-----------------------|-------------------------------------------------------------|
| `Air with Junie Lite` | For the course tasks                                        |
| `Air with OpenCode`   | To refactor the code to match the original game design plan |

## Attribution and license

This project is based on **Build a Game with an AI Coding Agent**, a course by JetBrains Academy:

- Course page: https://academy.jetbrains.com/course/30327
- Original repository: https://github.com/jetbrains-academy/game-course
- Original license: MIT

This project is also released under the MIT License. See the [LICENSE](LICENSE) file. The original copyright notice from
the course repository is kept in that file.

## Author

`Roni` - https://github.com/mephisto-inc
