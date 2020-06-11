import React from 'react';

import logoImg from '../../assets/logo.svg';
import overviewIcon from '../../assets/overview.svg';
import ticketsIcon from '../../assets/tickets.svg';
import vectorIcon from '../../assets/vector.svg';
import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="" />
        <h1>My finances</h1>
      </div>

      <ul>
        <li>
          <img src={overviewIcon} alt="" />
          <span>Overview</span>
        </li>
        <li>
          <img src={ticketsIcon} alt="" />
          <span>Tickets</span>
        </li>
        <li>
          <img src={vectorIcon} alt="" />
          <span>Ideas</span>
        </li>
      </ul>
    </Container>
  );
};

export default SideBar;
