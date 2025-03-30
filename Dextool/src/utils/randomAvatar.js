import { colors } from "@mui/material";

const RandomAvatar = (object) => {
  const size = 100;
  const { id, name, symbol } = object;

  // Function to generate a random color based on the properties
  const randomColors = (hash) => {
    const colors = [];
    for (let i = 0; i < 4; i++) {
      const color = "#" + hash.substr(i * 2, 6);
      colors.push(color);
    }
    return colors;
  };

  const colors = randomColors(id);

  // Function to generate a random rotation based on the properties
  const randomRotation = () => {
    const sumAscii = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return sumAscii % 360; // Return a value between 0 and 359
  };

  // Function to generate a random position based on the properties
  const randomPosition = () => {
    const sumAscii = symbol
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return {
      x: (sumAscii % 100) + 0.5 * 10, // Adjust the range as needed
      y: (sumAscii % 100) + 0.5 * 10, // Adjust the range as needed
    };
  };

  // Generate random rectangles
  const rectangles = Array.from({ length: 3 }).map((_, index) => {
    const rotation = randomRotation();
    const position = randomPosition();

    return `<rect
        key="${index}"
        x="${0}"
        y="${0}"
        width="100%"
        height="100%"
        transform="${`translate(${position.x} ${
          position.y
        }) rotate(${rotation} ${size / 2} ${size / 2})`}"
        fill="${colors[index]}"
      />`;
  });

  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
        <rect width="${size}px" height="${size}px" fill="${colors[3]}" />
      ${rectangles.join("")}
    </svg>`;
};

const svg2img = (object) => {
  return `data:image/svg+xml;base64,${btoa(RandomAvatar(object))}`;
};

export { RandomAvatar, svg2img };
