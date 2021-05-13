import React, { HTMLAttributes } from 'react';
import styled from "styled-components"
import { borderRadius, typography, TypographyProps, color, ColorProps, variant, space, fontSize, SpaceProps, FontSizeProps } from 'styled-system'

interface Props extends ColorProps, SpaceProps, FontSizeProps, TypographyProps {
  children: React.ReactNode;

}


export const StyledTitle = styled('h1')<Props>({
  display: 'inline-block'
}, color, space, fontSize, typography)