import { lighten, saturate } from 'polished';
import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';
import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import config from '../../website-config';
import * as rsvp from '../../rsvp/rsvp.json';
// import { gu } from 'date-fns/locale';
import { EmotionCanvasTheme } from '@workday/canvas-kit-react-common';
import { Radio, RadioGroup } from '@workday/canvas-kit-react-radio';
import FormField from '@workday/canvas-kit-react-form-field';
import { Link } from 'gatsby';

import { postRSVP } from '../../api';

import { useToast, ThrowToastProps } from '../toasts/useToast';
import { Sparkles } from '../sparkle/Sparkles';

type RSVPGuests = {
  names: string[]
  accessCode: string
  plusOne: boolean
};
// const redirectYouFilthyAnimal = () => {
//   window.location.href = `https://www.youtube.com/watch?v=-nHNHIDduH4`;
// };

export const RSVPForm = ({ throwToast }: { throwToast: (props: ThrowToastProps) => void }) => {
  const [accessCode, setAccessCode] = useState('');
  const [guests] = useState(rsvp.guests);
  const [rsvpGuests, setRSVPGuests] = useState<RSVPGuests>();
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const getGuestInviteFromAccessCode = (accessCode: string) =>
    guests.filter(invite => invite.accessCode === accessCode);

  const handleAccessCodeSubmit = (e: React.MouseEvent) => {
    console.log(guests);
    e.preventDefault();
    const guest = getGuestInviteFromAccessCode(accessCode)[0];
    if (guest) {
      setRSVPGuests(guest);
    } else {
      // alert(`Not found`);
      throwToast({
        message: `Invalid Access Code.`,
        actionText: `https://www.youtube.com/watch?v=-nHNHIDduH4`,
        // onActionClick: redirectYouFilthyAnimal,
        type: `error`,
      });
    }
  };

  return (
    <>
      {!rsvpGuests && <AccessCodeNote>Enter the <Sparkles color={colors.royalty.pink}>Access Code</Sparkles> on the Back of Your RSVP Card</AccessCodeNote>}
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
        {!rsvpGuests && !hasSubmitted &&
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
            <RSVPFormButton type="submit" onClick={handleAccessCodeSubmit}>
              <span>RSVP</span>
            </RSVPFormButton>

          </form>}

        {rsvpGuests?.names.length && !hasSubmitted && <VerifiedGuestForm
          throwToast={throwToast}
          names={rsvpGuests.names}
          wasAllotedPlusOne={rsvpGuests.plusOne}
          setHasSubmitted={setHasSubmitted}
        />}
        {hasSubmitted &&
          <>
            <h3
              css={css`
            color: ${colors.royalty.blue};
          `}
            >
              Thank you! Your RSVP has been received.
              If you need to update your RSVP, return to this page and resubmit before May 29.
            </h3>
            <h3
              css={css`
            color: ${colors.royalty.blue};
          `}
            >
              If you are in need of a hotel room, please see our hotel block information on our <Link to="/travel">Travel</Link> page.
              Also, be sure to check out our <Link to="/faq">FAQ</Link> page.
            </h3>
            <h3
              css={css`
            color: ${colors.royalty.blue};
          `}
            >
              Finally, if you would like to submit any song requests to our DJ, you can do so <a target="_blank" rel="noreferrer" href="https://jdjclients.com/requests.asp?djidnumber=23469&month=6&day=19&year=2021&password=tncycwd">here</a>.
            </h3>
          </>}

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

const areComing = (guests: GuestResponse[]) => Boolean(guests.filter(guest => guest.rsvp === 'accepts').length);

const VerifiedGuestForm = ({ names, wasAllotedPlusOne, throwToast, setHasSubmitted }:
  { names: string[], wasAllotedPlusOne?: boolean, throwToast: (props: ThrowToastProps) => void, setHasSubmitted: (hasSubmitted: boolean) => void }) => {
  const guests = initializeRsvpGuestToGuestResponse(names);
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [plusOne, setPlusOne] = useState('');
  const [isBringingPlusOne, setIsBringingPlusOne] = useState('no');

  const [isUpdating, setIsUpdating] = useState(false);

  const onSubmit = async () => {
    setIsUpdating(true);
    const rsvpDTO = convertToRSVPDTO(guests, dietaryRestrictions, plusOne);
    console.log(`rsvpDTO: ${JSON.stringify(rsvpDTO)}`);

    type NewType = any;

    try {
      const result = await postRSVP(rsvpDTO);
      console.log(result);
      setIsUpdating(false);
      setHasSubmitted(true);

      if (areComing(guests)) {
        throwToast({
          message: `See you at the Wedding! 😆🎉💒👰💍🍾`,
          actionText: `Refresh to resubmit`,
        });
      } else {
        throwToast({
          message: `Sorry you won't be joining us. 😔`,
          actionText: `Refresh to resubmit`,
        });
      }
    } catch (e: NewType) {
      // throw a toast..
      throwToast({
        message: `There was an error recording your RSVP.`,
        actionText: `Click here to refresh`,
        type: `error`,
      });
      console.error(`Error Uploading: ${JSON.stringify(e)}`);
    }
  };

  return (
    <section
      css={
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
      {(wasAllotedPlusOne && areComing(guests)) && <PlusOneControl isBringingPlusOne={isBringingPlusOne} setPlusOne={setPlusOne} setIsBringingPlusOne={setIsBringingPlusOne} />}
      {areComing(guests) &&
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
      <RSVPFormButton disabled={isUpdating} css={css`margin-top: 1.4rem;`} type="submit" onClick={onSubmit}>
        <span>Submit</span>
      </RSVPFormButton>
    </section>
  );
};

type RSVPDTO = {
  id: string
  guests: string
  dietaryRestrictions: string
  plusOne: string
};

const convertToRSVPDTO = (guests: GuestResponse[], dietaryRestrictions: string, plusOne: string): RSVPDTO => {
  if (areComing(guests)) {
    return {
      id: guests[0].name,
      guests: JSON.stringify(convertToGuestDTO(guests)),
      dietaryRestrictions,
      plusOne,
    };
  }

  return {
    id: guests[0].name,
    guests: JSON.stringify(convertToGuestDTO(guests)),
    dietaryRestrictions: '',
    plusOne: '',
  };
};

type GuestDTO = {
  name: string
  isComing: boolean
};

const convertToGuestDTO = (guests: GuestResponse[]): GuestDTO[] => guests.map(guest => ({
  name: guest.name,
  isComing: convertIsComing(guest.rsvp),
}));

const convertIsComing = (rsvp: RSVPAnswer) => rsvp === 'accepts';

type PlusOneOption = 'yes' | 'no';
type PlusOneControlProps = {
  setPlusOne: (person: string) => void
  isBringingPlusOne: string
  setIsBringingPlusOne: (choice: PlusOneOption) => void
};

const PlusOneControl = (props: PlusOneControlProps) => {
  return (
    <>
      <h3
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
    font-family: "Raleway";
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

