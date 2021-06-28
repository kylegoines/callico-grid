/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import config from './config'

const ColSpan = (props) => {
  const { mediaQuerySpan } = props

  // get layout for styles
  let cellLayout = ``

  const mediaQueryStyles = config.map((breakpoint, index) => {
    return `@media (min-width: ${breakpoint.size}px){
                 width: calc(
                    ((${mediaQuerySpan[index]} / var(--grid-columns)) * var(--max-width, 100%)) -
                        (
                            var(--inner-gutter) -
                                (${mediaQuerySpan[index]} / var(--grid-columns) * var(--inner-gutter))
                        )
                    );
        
      }`
  })

  cellLayout = css`
    ${mediaQueryStyles}
  `

  return (
    <div
      className="callico-grid-col"
      css={css`
        ${cellLayout}
      `}
    >
      {props.children}
    </div>
  )
}

export default ColSpan
