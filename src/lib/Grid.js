/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import mq from './utils/mq'

const Grid = (props) => {
  const { isContainer } = props

  let containerStyles
  if (isContainer) {
    containerStyles = css`
      width: var(--container-width);
      margin-left: var(--outer-gutter);
      margin-right: var(--outer-gutter);
    `
  }
  return (
    <div
      className="callico-grid"
      css={css`
        display: grid;
        margin: 0 auto;
        column-gap: var(--inner-gutter);
        grid-template-columns: repeat(var(--grid-columns), 1fr);
        font-size: 12px;
        border-radius: 4px;

        ${isContainer ? containerStyles : null}

        ${mq['sm']} {
          //   background: red;
        }
        ${mq['md']} {
          //   background: blue;
        }
        ${mq['lg']} {
          //   background: #eee;
        }
      `}
    >
      {props.children}
    </div>
  )
}

export default Grid
