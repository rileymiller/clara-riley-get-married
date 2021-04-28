import { lighten, saturate } from 'polished';
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import config from '../../website-config';
import * as rsvp from '../../rsvp/rsvp.json';
// import { gu } from 'date-fns/locale';
import { EmotionCanvasTheme } from '@workday/canvas-kit-react-common';
import { Radio, RadioGroup } from '@workday/canvas-kit-react-radio';
import FormField from '@workday/canvas-kit-react-form-field';

type RSVPGuests = {
  names: string[]
  accessCode: string
  plusOne: boolean
};

export const RSVPForm: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [guests] = useState(rsvp.guests);
  const [rsvpGuests, setRSVPGuests] = useState<RSVPGuests>();

  const getGuestInviteFromAccessCode = (accessCode: string) =>
    guests.filter(invite => invite.accessCode === accessCode);

  const handleSubmit = (e: React.MouseEvent) => {
    console.log(guests);
    e.preventDefault();
    const guest = getGuestInviteFromAccessCode(accessCode)[0];
    if (guest) {
      setRSVPGuests(guest);
    } else {
      alert(`Not found`);
    }
  };

  return (
    <>
      {!rsvpGuests && <AccessCodeNote>Enter the Access Code on the Back of Your RSVP Card</AccessCodeNote>}
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
        {!rsvpGuests &&
          <form
            noValidate
            css={RSVPFormStyles}
            className="RSVP-form"
          >
            <FormGroup className="form-group">
              <RSVPEmail
                className="RSVP-email"
                type="email"
                placeholder="Access Code (e.g. D49)"
                onChange={e => setAccessCode(e.currentTarget.value)}
              />
            </FormGroup>
            <RSVPFormButton type="submit" onClick={handleSubmit}>
              <span>RSVP</span>
            </RSVPFormButton>

          </form>}

        {rsvpGuests?.names.length && <VerifiedGuestForm names={rsvpGuests.names} wasAllotedPlusOne={rsvpGuests.plusOne} />}

      </div>
    </>
  );
};

type RSVPAnswer = 'accepts' | 'declines';

type GuestResponse = {
  name: string
  rsvp: RSVPAnswer
  onChange: (rsvp: RSVPAnswer) => void
};

const initializeRsvpGuestToGuestResponse = (names: string[]): GuestResponse[] => names.map(name => {
  const [rsvpChoice, setRSVP] = useState<RSVPAnswer>('accepts');

  const onChange = (value: RSVPAnswer) => {
    setRSVP(value);
  };

  return {
    name,
    rsvp: rsvpChoice,
    onChange,
  };
});

const VerifiedGuestForm = ({ names, wasAllotedPlusOne }: { names: string[], wasAllotedPlusOne?: boolean }) => {
  const guests = initializeRsvpGuestToGuestResponse(names);
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [plusOne, setPlusOne] = useState('');
  const [isBringingPlusOne, setIsBringingPlusOne] = useState('no');
  const onSubmit = () => {
    console.log(`guests: ${JSON.stringify(guests)} \nDietary Restrictions: ${dietaryRestrictions}\n Plus One: ${plusOne}`);
  };

  const isComing = () => Boolean(guests.filter(guest => guest.rsvp === 'accepts').length);

  return (
    <section css={
      css`
        color: black;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;

        width:100%;
      `
    }
    >
      {guests.map(guest => {
        return (
          <GuestRSVPControl key={guest.name} name={guest.name} rsvp={guest.rsvp} onChange={guest.onChange} />
        );
      })}
      {(wasAllotedPlusOne && isComing()) && <PlusOneControl isBringingPlusOne={isBringingPlusOne} setPlusOne={setPlusOne} setIsBringingPlusOne={setIsBringingPlusOne} />}
      {isComing() &&
        <>
          <p css={css`font-size: 1.4rem !important;margin: 2rem!important;`}>Please note any dietary restrictions below.</p>
          <textarea
            css={css`
        width: 70%;
        font-size: 1.4rem;
        line-height: 1em;
        min-height: 8em;
        padding: 1.5rem;
        background: ${colors.royalty.ivory};
        border: solid .2rem ${colors.royalty.blue};
        border-radius: .4rem;
        resize: none;
        outline: ${lighten('-0.1', colors.royalty.blue)};
        :focus, :active {
          border-color: ${lighten('-0.1', colors.royalty.blue)};
          background: #e7f1fe;
          transition: background 0.35s ease-in-out;
        }
        @media (max-width: 500px) {
          width: 100%;
        }
      `} rows={4}
            value={dietaryRestrictions}
            onChange={e => setDietaryRestrictions(e.target.value)}
          />
        </>}
      <RSVPFormButton css={css`margin-top: 1.4rem;`} type="submit" onClick={onSubmit}>
        <span>Submit</span>
      </RSVPFormButton>
    </section>
  );
};

type PlusOneOption = 'yes' | 'no';
type PlusOneControlProps = {
  // plusOne: string
  setPlusOne: (person: string) => void
  isBringingPlusOne: string
  setIsBringingPlusOne: (choice: PlusOneOption) => void
};

const PlusOneControl = (props: PlusOneControlProps) => {
  return (
    <>
      <h3
        // key={guest}
        css={css`
        font-weight: bold;
        `}
      >
        Will you be bringing a plus one?
      </h3>
      <div css={[RadioLabelStyles]}>
        <RadioGroup value={props.isBringingPlusOne} onChange={value => props.setIsBringingPlusOne(value as PlusOneOption)}>
          <Radio key="yes" style={{ fontFamily: 'Andina Regular' }} id="1" value="yes" label="Yes" disabled={false} />
          <Radio key="no" style={{ fontFamily: 'Andina Regular' }} id="2" value="no" label="No" disabled={false} />
        </RadioGroup>
      </div>
      {
        props.isBringingPlusOne === 'yes' &&
        <FormGroup className="form-group">
          <RSVPEmail
            className="RSVP-plusOne"
            type="text"
            placeholder="Name of Plus One"
            disabled={props.isBringingPlusOne !== 'yes'}
            onChange={e => props.setPlusOne(e.currentTarget.value)}
          />
        </FormGroup>
      }
    </>
  );
};

type GuestRSVPControlProps = {
  name: string
  rsvp: RSVPAnswer
  onChange: (rsvp: RSVPAnswer) => void
};

const GuestRSVPControl = (props: GuestRSVPControlProps) => {
  // const [value, setValue] = useState('accepts');
  const onChange = (value: string | number) => {
    // setValue(value as string);
    props.onChange(value as RSVPAnswer);
  };

  return (
    <div css={css`display:flex; justify-content: center;flex-direction:column; align-items: center; margin-bottom: 0.4rem;`}>
      <h3
        // key={guest}
        css={css`
        font-weight: bold;
        `}
      >
        {props.name}
      </h3>
      <div css={[RadioLabelStyles]}>
        <RadioGroup value={props.rsvp} onChange={onChange}>
          <Radio key={`${props.name}-yes`} style={{ fontFamily: 'Andina Regular' }} id="1" value="accepts" label="Accepts with Pleasure" disabled={false} />
          <Radio key={`${props.name}-no`} style={{ fontFamily: 'Andina Regular' }} id="2" value="declines" label="Declines with Regret" disabled={false} />
        </RadioGroup>
      </div>
    </div>
  );
};

const RadioLabelStyles = css`
    label {
    font-family: 'Raleway';
  }
`;

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

