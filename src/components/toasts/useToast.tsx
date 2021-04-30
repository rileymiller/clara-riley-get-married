import React, { useEffect, useRef, useState } from 'react';

import { Popper } from '@workday/canvas-kit-react-popup';
import Toast from '@workday/canvas-kit-react-toast';
import { exclamationCircleIcon } from '@workday/canvas-system-icons-web';
import { colors as canvasColors } from '@workday/canvas-kit-react-core';
import { colors } from '../../styles/colors';
import { css } from '@emotion/react';
type ToastManagerProps = {
  containerRef: Element
};

type ToastProps = {
  // children: string & React.ReactNode
  message: string
  actionText?: string
  handleAction?: () => void
  handleToastClose: () => void
};
const SuccessToast = (props: ToastProps) => (
  <Toast
    css={css`
      z-index:1001;
    `}
    actionText={props.actionText} onActionClick={props.handleAction}
    onClose={props.handleToastClose}
  >
    {props.message}
  </Toast>
);

const ErrorToast = (props: ToastProps) => (
  <Toast
    css={css`
      z-index:1001;
    `}
    actionText={props.actionText} iconColor={canvasColors.cinnamon500} icon={exclamationCircleIcon}
    onActionClick={props.handleAction}
    onClose={props.handleToastClose}
  >
    {props.message}
  </Toast>
);
const reloadWindow = () => window.location.reload();

type ToastType = 'success' | 'error';
export type ThrowToastProps = {
  message: string, actionText?: string, type?: ToastType, onActionClick?: () => void,
  //  children: string | React.ReactNode
};
export const useToast = (
  { containerRef }:
  ToastManagerProps) => {
  const [open, setToastOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [actionText, setActionText] = React.useState('');
  // const [handleActionClick, setHandleActionClick] = React.useState<void>();
  // const [children, setChildren] = React.useState<Rac()
  const [type, setType] = React.useState<'success' | 'error'>('success');

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const throwToast = ({ message, actionText, type = 'success', onActionClick,
    //  children
  }: ThrowToastProps) => {
    setMessage(message);
    setActionText(actionText ?? '');
    setType(type);
    setToastOpen(true);
    // setHandleActionClick(reloadWindow);
    // setChildren(children);
  };

  const isSuccess = type === 'success';

  const ToastManager = () => (
    <div>
      <Popper placement="top" open={open} anchorElement={containerRef} >
        {
          isSuccess ?
            <SuccessToast
              message={message}
              actionText={actionText}
              handleToastClose={handleToastClose}
              handleAction={reloadWindow}
            /> :
            <ErrorToast
              message={message}
              actionText={actionText}
              handleToastClose={handleToastClose}
              handleAction={reloadWindow}
            />
        }
      </Popper>
    </div>
  );

  return { throwToast, ToastManager };
};
