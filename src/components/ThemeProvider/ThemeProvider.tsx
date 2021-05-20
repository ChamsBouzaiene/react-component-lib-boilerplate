import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import PropTypes from 'prop-types';

interface Props {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => (
    <StyledThemeProvider theme={darkTheme}>{children}</StyledThemeProvider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
