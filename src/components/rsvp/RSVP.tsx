import { lighten } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import { RSVPForm } from './RSVPForm';

export interface RSVPProps {
  title: string;
}

export const RSVP: React.FC<RSVPProps> = props => {
  return (
    <RSVPFormSection>
      <h3 css={RSVPFormTitle}>RSVP to {props.title}</h3>
      <p>before Saturday May 29, 2021</p>
      <AccessCodeNote>Enter the Access Code on the Back of Your RSVP Card</AccessCodeNote>
      <RSVPForm />
    </RSVPFormSection>
  );
};

const RSVPFormSection = styled.section`
  margin: 1em;
  padding: 6.5vw 7vw 8vw;
  border: ${lighten('0.1', colors.lightgrey)} 1px solid;
  text-align: center;
  background: ${colors.royalty.ivory};
  border-radius: 3px;

  p {
    margin-bottom: 0.2em 0 1em;
    /* color: var(--midgrey); */
    color: ${colors.royalty.blue};
    font-size: 2.1rem;
    line-height: 1.55em;
  }

  @media (max-width: 650px) {
    p {
      font-size: 1.6rem;
    }
  }

  .form-group {
    flex-grow: 1;
  }
`;

const AccessCodeNote = styled.p`
  font-size: 2rem;
`;

const RSVPFormTitle = css`
  margin: 0 0 3px 0;
  padding: 0;
  color: ${colors.royalty.blue};
  font-size: 3.5rem;
  line-height: 1;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 2.4rem;
  }
`;