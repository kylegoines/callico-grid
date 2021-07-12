/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

const Container = (props) => {
  return (
    <div
      className="calico-container"
      css={css`
        width: var(--container-width);
        margin-left: var(--outer-gutter);
        margin-right: var(--outer-gutter);
      `}
    >
      {props.children}
    </div>
  )
}

export default Container
