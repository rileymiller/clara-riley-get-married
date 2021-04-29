import { lighten } from 'polished';
import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import { RSVPForm } from './RSVPForm';
import { useToast } from '../toasts/useToast';

export interface RSVPProps {
  title: string;
}

export const RSVP: React.FC<RSVPProps> = props => {
  const toastContainerRef = useRef(null);
  const { throwToast, ToastManager } = useToast({
    containerRef: toastContainerRef.current!,
  });

  return (
    <RSVPFormSection
      ref={toastContainerRef}
    >
      <ToastManager />
      <h3 css={RSVPFormTitle}>RSVP to {props.title}</h3>
      <p>Please respond before Saturday May 29, 2021</p>
      <RSVPForm throwToast={throwToast} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 2rem;
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
