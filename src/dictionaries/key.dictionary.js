const KeyMap = new Map([
  ["A", () => ({ note: "C0",  sound: (fn) => fn(200, 4, null) }) ],
  ["W", () => ({ note: "C#0", sound: (fn) => fn(200, 4, null) }) ],
  ["S", () => ({ note: "D0",  sound: (fn) => fn(200, 4, null) }) ],
  ["E", () => ({ note: "D#0", sound: (fn) => fn(200, 4, null) }) ],
  ["D", () => ({ note: "E0",  sound: (fn) => fn(200, 4, null) }) ],
  ["H", () => ({ note: "F0",  sound: (fn) => fn(200, 4, null) }) ],
  ["U", () => ({ note: "F#0", sound: (fn) => fn(200, 4, null) }) ],
  ["J", () => ({ note: "G0",  sound: (fn) => fn(200, 4, null) }) ],
  ["I", () => ({ note: "G#0", sound: (fn) => fn(200, 4, null) }) ],
  ["K", () => ({ note: "A0",  sound: (fn) => fn(200, 4, null) }) ],
  ["L", () => ({ note: "B0",  sound: (fn) => fn(200, 4, null) }) ],
  ["O", () => ({ note: "A#0", sound: (fn) => fn(200, 4, null) }) ],
])

export default KeyMap
