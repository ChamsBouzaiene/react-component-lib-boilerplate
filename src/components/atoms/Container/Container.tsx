import React from 'react';
import { StyledDiv } from "./Container.styled"


export interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => <StyledDiv>
    {children}
</StyledDiv>

export default Container