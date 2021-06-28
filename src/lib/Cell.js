/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import config from './config'

const Cell = (props) => {
  const { span, mediaQuerySpan } = props

  ////////////////////////////////////////////////////////////////////////
  // validation
  if (mediaQuerySpan && span) {
    throw new Error(
      'to use callico grid system correctly please include either only a span or a media query span'
    )
  }

  if (mediaQuerySpan) {
    if (!Array.isArray(mediaQuerySpan)) {
      throw new Error('media query span needs to be an array')
    }
    if (mediaQuerySpan.length !== config.length) {
      throw new Error(
        'media query span needs to be the length of the media query config'
      )
    }
  }

  // get layout for styles
  let cellLayout = ``

  // if we have a array of cell spans we apply them to each size
  if (mediaQuerySpan) {
    const mediaQueryStyles = config.map((breakpoint, index) => {
      return `@media (min-width: ${breakpoint.size}px){
            --grid-columns: ${mediaQuerySpan[index]};
            grid-column: span ${mediaQuerySpan[index]};
        }`
    })

    cellLayout = css`
      ${mediaQueryStyles}
    `
  } else {
    const spanWidthValue = span ? span : 1
    cellLayout = css`
      --grid-columns: ${spanWidthValue};
      grid-column: span ${spanWidthValue};
    `
  }

  ////////////////////////////////////////////////////////////////////////

  return (
    <div className="callico-grid-cell" css={cellLayout}>
      {props.children}
    </div>
  )
}

export default Cell
