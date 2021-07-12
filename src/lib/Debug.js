/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

const debugStyles = css`
  display: block;
  position: fixed;
  z-index: 9998;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: var(--container-width);
  height: 100%;
  margin: 0 var(--outer-gutter);
  background: repeating-linear-gradient(
    90deg,
    var(--bg-design-grid),
    var(--bg-design-grid)
      calc(
        ((1 / var(--grid-columns)) * var(--max-width, 100%)) -
          (
            var(--inner-gutter) -
              (1 / var(--grid-columns) * var(--inner-gutter))
          )
      ),
    rgba(0, 0, 0, 0)
      calc(
        ((1 / var(--grid-columns)) * var(--max-width, 100%)) -
          (
            var(--inner-gutter) -
              (1 / var(--grid-columns) * var(--inner-gutter))
          )
      ),
    rgba(0, 0, 0, 0)
      calc(
        (
            ((1 / var(--grid-columns)) * var(--max-width, 100%)) -
              (
                var(--inner-gutter) -
                  (1 / var(--grid-columns) * var(--inner-gutter))
              )
          ) + var(--inner-gutter)
      )
  );
  pointer-events: none;
`

const Debug = (props) => {
  return <div className="grid-debug" css={debugStyles}></div>
}

export default Debug
