import { lighten, saturate } from 'polished';
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import config from '../../website-config';

export const RSVPForm: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const handleSubmit = (e: MouseEvent) => {
    console.log('submit')
    e.preventDefault()
    alert(accessCode);
  };

  return (
    <form
      noValidate
      css={RSVPFormStyles}
      // action={config.mailchimpAction}
      // method="post"
      // id="mc-embedded-RSVP-form"
      // name="mc-embedded-RSVP-form"
      className="RSVP-form"
    // target="_blank"
    >
      {/* This is required for the form to work correctly  */}
      <FormGroup className="form-group">
        <RSVPEmail
          className="RSVP-email"
          type="email"
          // name={config.mailchimpEmailFieldName}
          // id={config.mailchimpEmailFieldName}
          placeholder="Access Code (e.g. D49)"
          onChange={e => setAccessCode(e.currentTarget.value)}
        />
      </FormGroup>
      {/* <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name={config.mailchimpName} tabIndex={-1} />
      </div> */}
      <RSVPFormButton type="submit" onSubmit={handleSubmit}>
        <span>RSVP</span>
      </RSVPFormButton>
    </form>
  );
};

const RSVPFormStyles = css`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 460px;

  @media (max-width: 500px) {
    flex-direction: column;

    .form-group {
      flex-direction: column;
      width: 100%;
    }
  }
`;

const RSVPEmail = styled.input`
  display: block;
  padding: 10px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.royalty.blue)} 0.15em solid;
  background: ${colors.royalty.ivory};
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 1.8rem;
  line-height: 1em;
  font-weight: normal;
  user-select: text;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;

  :focus {
    border-color: ${lighten('-0.1', colors.royalty.blue)};
    background: #e7f1fe;
    transition: background 0.35s ease-in-out;
  }
`;

const RSVPFormButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 0 0 10px;
  padding: 0 20px;
  height: 43px;
  outline: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 39px;
  font-weight: 400;
  text-align: center;
  background: ${colors.royalty.pink};
  border-radius: 5px;

  -webkit-font-smoothing: subpixel-antialiased;

  :active,
  :focus,
  :hover {
    background: ${saturate('-0.1', lighten('-0.09', colors.royalty.pink))};
    transition: background 0.35s ease-in-out;
  }
  @media (max-width: 500px) {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

