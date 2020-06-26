import KeyMap from '../dictionaries/key.dictionary.js'

import { beep } from './sound.js'

const handleKey = key => KeyMap.has(key) && KeyMap.get(key)().sound(beep)

export default handleKey;
