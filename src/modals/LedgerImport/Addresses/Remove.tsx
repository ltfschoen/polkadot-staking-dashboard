// Copyright 2023 @paritytech/polkadot-live authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ButtonMono, ButtonMonoInvert } from '@polkadotcloud/dashboard-ui';
import { useOverlay } from 'contexts/Overlay';
import { Identicon } from 'library/Identicon';
import type { ConfirmProps } from './types';
import { ConfirmWrapper } from './Wrappers';

export const Remove = ({ address }: ConfirmProps) => {
  const { setStatus } = useOverlay();

  // TODO: implement
  const removeAddress = (a: string) => {};

  return (
    <ConfirmWrapper>
      <Identicon value={address} size={60} />
      <h3>Remove Account</h3>
      <h5>{address}</h5>
      <div className="footer">
        <ButtonMonoInvert text="Cancel" onClick={() => setStatus(0)} />
        <ButtonMono
          text="Remove Account"
          onClick={() => {
            removeAddress(address);
            setStatus(0);
          }}
        />
      </div>
    </ConfirmWrapper>
  );
};
