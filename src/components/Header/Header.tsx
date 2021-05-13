import React from 'react';
import Button from '../Button/Button';
import { Icon, Title, Container } from "../atoms"

export interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}



export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <Container>
      <div>
        <Icon />
        <Title fontWeight={800} fontSize={20} lineHeight={1} margin='6px 0 6px 10px' verticalAlign="top" >Acme</Title>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button variant="primary" size="small" marginLeft={10} onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </Container>
  </header>
);
