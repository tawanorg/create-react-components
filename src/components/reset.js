import { css } from 'styled-components'

export const reset = css`
  ${`
    const fs = require('fs')
    module.exports = fs.readFileSync(require.resolve('normalize.css'), 'utf8')
  `};
`

export default reset
