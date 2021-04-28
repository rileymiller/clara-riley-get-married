import { lighten, saturate } from 'polished';
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import config from '../../website-config';
import * as rsvp from '../../rsvp/rsvp.json';
// import { gu } from 'date-fns/locale';
import { Radio, RadioGroup } from '@workday/canvas-kit-react-radio';
import FormField from '@workday/canvas-kit-react-form-field';

type RSVPGuest = {
  names: string[]
  accessCode: string
  plusOne: boolean
};

export const RSVPForm: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [guests] = useState(rsvp.guests);
  const [rsvpGuest, setRSVPGuest] = useState<RSVPGuest>();

  const getGuestInviteFromAccessCode = (accessCode: string) =>
    guests.filter(invite => invite.accessCode === accessCode);

  const handleSubmit = (e: React.MouseEvent) => {
    console.log(guests);
    e.preventDefault();
    const guest = getGuestInviteFromAccessCode(accessCode)[0];
    if (guest) {
      // alert(JSON.stringify(guest));
      setRSVPGuest(guest);
    } else {
      alert(`Not found`);
    }
  };

  return (
    <>
      {!rsvpGuest && <AccessCodeNote>Enter the Access Code on the Back of Your RSVP Card</AccessCodeNote>}
      <div css={css`
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        width:60%;
        @media (max-width: 500px) {
                width: 100%;
        }
      `}
      >
        {!rsvpGuest &&
          <form
            noValidate
            css={RSVPFormStyles}
            className="RSVP-form"
          >
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
            <RSVPFormButton type="submit" onClick={handleSubmit}>
              <span>RSVP</span>
            </RSVPFormButton>

          </form>}

        {rsvpGuest &&
          <section css={
            css`
              color: black;
              display:flex;
              flex-direction: column;
              justify-content:center;
              align-items: center;

              width:100%;

              /* @media (max-width: 500px) {
                width: 100%;
              } */
            `
          }
          >
            {rsvpGuest.names.map(guest => {
              return (
                <GuestRSVPControl key={guest} guest={guest} />
              );
            })}
            <p css={css`font-size: 1.4rem !important;margin: 2rem!important;`}>Please note any dietary restrictions below.</p>
            <textarea
              css={css`
              width: 70%;
              font-size: 1.4rem;
              line-height: 1em;
              min-height: 8em;
              padding: 1.5rem;
              border-radius: .4rem;
              resize: none;
              outline: ${lighten('-0.1', colors.royalty.blue)};
              :focus {
                border-color: ${lighten('-0.1', colors.royalty.blue)};
                background: #e7f1fe;
                transition: background 0.35s ease-in-out;
              }
              @media (max-width: 500px) {
                width: 100%;
              }
            `} rows={4} />
            <RSVPFormButton css={css`margin-top: 1.4rem;`} type="submit" onClick={() => console.log(`bend the knee`)}>
              <span>Submit</span>
            </RSVPFormButton>
          </section>}
      </div>
    </>
  );
};

type GuestRSVPControlProps = {
  guest: string
};

const GuestRSVPControl = (props: GuestRSVPControlProps) => {
  const [value, setValue] = useState('accepts');

  return (
    <div css={css`display:flex; justify-content: center;flex-direction:column; align-items: center; margin-bottom: 0.4rem;`}>
      <h3
        // key={guest}
        css={css`font-weight: bold;`}
      >
        {props.guest}
      </h3>
      <RadioGroup value={value} onChange={value => setValue(value as string)}>
        <Radio key={`${props.guest}-yes`} id="1" value="accepts" label="Accepts with Pleasure" disabled={false} onChange={() => console.log('yes')} />
        <Radio key={`${props.guest}-no`} id="2" value="declines" label="Declines with Regret" disabled={false} onChange={() => console.log('no')} />
      </RadioGroup>
    </div>
  );
};

const AccessCodeNote = styled.p`
  font-size: 2rem;
`;

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
  /* max-width: 125px; */
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

