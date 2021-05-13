import React from 'react';
import { ThemedButton } from "./Button.styled"
import { SpaceProps, FontSizeProps } from 'styled-system'

export interface ButtonProps extends SpaceProps, FontSizeProps {
  /**
   * Is this the principal call to action on the page?
   */

  borderRadius?: 0 | 2 | 4 | 8


  variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'white';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  label,
  ...props
}) =>
  <ThemedButton variant={variant} size={size} {...props}>
    {label}
  </ThemedButton>

Button.defaultProps = {
  variant: 'primary',
  size: 'small',
  borderRadius: 2
}

export default Button

