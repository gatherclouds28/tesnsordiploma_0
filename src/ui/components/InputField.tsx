import { FC, memo } from 'react'

import { getStyles, styled, theme } from 'ui/styles'
import { Text } from './Text'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledText = styled(Text)`
  width: 180px;
`

const Input = styled.input<{ isValid: boolean; isNotEmpty: boolean }>`
  display: inline-flex;
  ${getStyles('t8')}
  align-self: start;
  border-radius: 8px;
  border: 1px solid
    ${({ isValid, isNotEmpty }) =>
      isValid
        ? isNotEmpty
          ? theme.palette.black
          : theme.palette.black
        : theme.palette.black};
  width: 100%;
  min-height: 32px;
  padding: 8px 16px 8px 16px;
  color: ${theme.palette.black};
  box-sizing: border-box;

  transition-property: color, border, box-shadow;
  transition-duration: ${theme.transition.hover}ms;

  &::placeholder {
    ${getStyles('t8')}
    color: grey;
  }

  @media (hover: hover) {
    &:hover {
      border: 1px solid white;
      box-shadow: 0 0 0px 1px ${theme.palette.black}, 0px 4px 5px rgba(0, 0, 0, 0.15);

      &:focus,
      &:active,
      &:target {
        border: 1px solid white;
      }
    }

    &:focus,
    &:active,
    &:target {
      border: 1px solid ${theme.palette.black};
    }
  }

  &:focus,
  &:active,
  &:target {
    border: 1px solid ${theme.palette.black};
  }
`

type InputProps = {
  value: string
  label?: string
  isValid?: boolean
  placeholder?: string
  type?: 'text' | 'password' | 'phone' | 'date' | 'file'
  onChange?: (text: string) => void
  onFileChange?: (files: FileList) => void
}

const _InputField: FC<InputProps> = ({
  value,
  label,
  isValid,
  placeholder,
  onChange,
  type = 'text',
  onFileChange
}) => {
  const isNotEmpty = Boolean(value)

  return (
    <Wrapper>
      {label && <StyledText variant="t4">{label}</StyledText>}
      <Input
        onChange={(e) => {
          if (type === 'file' && onFileChange) {
            onFileChange(e.target.files!)
          } else {
            if (onChange) onChange(e.target.value)
          }
        }}
        isValid={!!isValid}
        placeholder={placeholder}
        isNotEmpty={isNotEmpty}
        type={type}
      />
    </Wrapper>
  )
}

export const InputField = memo(_InputField)
