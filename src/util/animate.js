
import prefix from 'inline-style-prefixer/static'

export default ({ delay, duration, fillMode, iterationCount, name, timingFunction }) => {
  if (name) {
    /* eslint-disable no-param-reassign */

    /*
    *  don't apply defaults unless we have a name declaration
    *  otherwise, assume we're using this to override properties
    */

    duration = duration || '1.2s'
    iterationCount = iterationCount || 'infinite'
    timingFunction = timingFunction || 'ease-in-out'

    /* eslint-enable no-param-reassign */
  }

  const base = {
    animationDelay: delay,
    animationDuration: duration,
    animationFillMode: fillMode,
    animationIterationCount: iterationCount,
    animationTimingFunction: timingFunction,
    animationName: name
  }

  return Object.keys(base).reduce((accumulator, key) => {
    if (base[key]) {
      accumulator[key] = base[key]
    }
    return accumulator
  }, {})
}
