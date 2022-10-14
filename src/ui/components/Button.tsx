import React, { PropsWithChildren } from 'react'
import { styled } from 'ui/styles'

const ResetButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`

export type ButtonProps = {
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: (ev: React.MouseEvent) => void
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  type = 'button',
  className,
  href,
  onClick,
  children
}) => {
  if (href) {
    return (
      <a className={className} href={href} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </a>
    )
  } else {
    return (
      <ResetButton
        type={type}
        className={className}
        onClick={onClick}
        onMouseDown={(ev) => ev.preventDefault()}
      >
        {children}
      </ResetButton>
    )
  }
}
