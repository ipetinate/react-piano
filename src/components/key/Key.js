import React, { useEffect } from "react"
import PropTypes from "prop-types"

import KeyMap from '../../dictionaries/key.dictionary.js'

import { 
  simulateHoverEnter,
  simulateHoverLeave
} from '../../functions/simulate-hover'

import "./Key.css"


const Key = ({ note, actionKey, sharp, hasSharp, handleClick }) => {

  useEffect(() => {
    document.addEventListener("keydown", event => {
      const key = event.key.toUpperCase()

      if (actionKey === key) {

        const { note } = KeyMap.has(key) && KeyMap.get(key)()
        const className = sharp ? 'enterHoverBlack' : 'enterHoverWhite'

        simulateHoverEnter(note, className)
      }
    })
    
    document.addEventListener("keyup", event => {
      const key = event.key.toUpperCase()

      if (actionKey === key) {

        const { note } = KeyMap.has(key) && KeyMap.get(key)()
        const className = sharp ? 'enterHoverBlack' : 'enterHoverWhite'

        simulateHoverLeave(note, className)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        !sharp && (
          <div
            id={note}
            onClick={() => handleClick(actionKey)}
            className={`white-key ${hasSharp ? '' : 'hasNoSharp'}`}
          >
            <div className="majorNoteName">
              {note}
            </div>
          </div>
        )
      }
      {
        sharp && (
          <div
            id={note}
            onClick={() => handleClick(actionKey)}
            className="black-key"
          >
            <div className="sharpNoteName" >
              {note}
            </div>
          </div>
        )}
    </>
  )
}

Key.propTypes = {
  note: PropTypes.string,
  hasSharp: PropTypes.bool
}

Key.defaultProps = {
  hasSharp: false
}

export default Key
