/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import config from './config'

const SiteWrapper = (props) => {
  const { debug } = props
  const globalGrid = config.map((breakpoint, index) => {
    let isLast = config.length === index + 1
    return `
        @media (min-width: ${breakpoint.size}px){    
            --breakpoint: ${breakpoint.name};
            --inner-gutter: ${breakpoint.gutter.inner};
            --outer-gutter: ${breakpoint.gutter.outer};
            --grid-columns: ${breakpoint.cols};
            --container-width: ${isLast ? '1200px' : 'auto'};
        }`
  })

  return (
    <div
      className="site-wrapper"
      css={css`
        --bg-design-grid: rgba(127, 255, 255, 0.25);
        ${globalGrid}
      `}
    >
      {props.children}
      {debug && <div className="debug"></div>}
    </div>
  )
}

export default SiteWrapper
