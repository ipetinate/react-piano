import React, { useEffect } from "react"

import Key from "../key/Key"
import Keys from "../../constants/keys.const"
import handleKey from "../../functions/handle-key"

import "./Keyboard.css"

const Keyboard = () => {
  const handleClick = note => handleKey(note)

  useEffect(() => {
    document.addEventListener("keydown", event => handleKey(event.key.toUpperCase()))

    return () => document.removeEventListener("keydown", event => handleKey(event.key.toUpperCase()))
  }, [])

  return (
    <div className="keyboard">
      {
        Keys.map(
          (key, i) => (
            <Key
              key={i}
              note={key.note}
              sharp={key.isSharp}
              hasSharp={key.hasSharp}
              interval={key.interval}
              actionKey={key.actionKey}
              handleClick={handleClick}
            />
          )
        )
      }
    </div>
  )
}

export default Keyboard
