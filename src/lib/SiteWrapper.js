/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useContext } from 'react'
import config from './config'
import ConfigContext from './ConfigContext'

const SiteWrapper = (props) => {
  const contextValue = useContext(ConfigContext)
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
    <ConfigContext.Provider value={contextValue}>
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
    </ConfigContext.Provider>
  )
}

export default SiteWrapper
