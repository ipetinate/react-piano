const simulateHoverEnter = (id, className) => document.getElementById(id).classList.add(className)

const simulateHoverLeave = (id, className) => document.getElementById(id).classList.remove(className)

export {
  simulateHoverLeave,
  simulateHoverEnter
}
