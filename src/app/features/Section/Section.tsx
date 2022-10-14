import { FC, memo } from "react"
import { styled } from "ui/styles"

const Wrapper = styled.section`
  max-width: 1170px;
  width: 100%;
`
type Props = {
  children: React.ReactNode;
};

const _Section: FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

export const Section = memo(_Section)