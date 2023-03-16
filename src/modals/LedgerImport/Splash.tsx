// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ButtonSecondary } from '@polkadotcloud/dashboard-ui';
import { useLedgerHardware } from 'contexts/Hardware/Ledger';
import { useModal } from 'contexts/Modal';
import { ReactComponent as CrossSVG } from 'img/cross.svg';
import { ReactComponent as LogoSVG } from 'img/ledgerLogo.svg';
import { Title } from 'library/Modal/Title';
import { CustomHeaderWrapper } from 'modals/Wrappers';
import type { AnyFunction } from 'types';
import { determineStatusFromCodes } from './Utils';
import { SplashWrapper } from './Wrappers';

export const Splash = ({ pairDevice }: AnyFunction) => {
  const { replaceModalWith, setStatus } = useModal();
  const { getStatusCodes, isPaired } = useLedgerHardware();
  const statusCodes = getStatusCodes();

  return (
    <>
      <CustomHeaderWrapper>
        <h1>
          <ButtonSecondary
            text="Back"
            iconLeft={faChevronLeft}
            iconTransform="shrink-3"
            onClick={async () => replaceModalWith('Connect', {}, 'large')}
          />
        </h1>
        <button
          type="button"
          onClick={() => setStatus(2)}
          className="closeModal"
        >
          <CrossSVG style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>
      </CustomHeaderWrapper>
      <Title title="" />
      <SplashWrapper>
        <div className="icon">
          <LogoSVG style={{ transform: 'scale(0.6)' }} opacity={0.05} />
        </div>

        <div className="content">
          <h2>
            {isPaired !== 'paired'
              ? 'No Device Connected'
              : !statusCodes.length
              ? 'Checking...'
              : determineStatusFromCodes(statusCodes, false).title}
          </h2>
          {isPaired !== 'paired' ? (
            <>
              <h5>Re-connect your Ledger device and Try Again to continue.</h5>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ButtonSecondary
                  text="Try Again"
                  onClick={() => pairDevice()}
                  lg
                />
              </div>
            </>
          ) : null}
          <h5>
            {isPaired === 'paired'
              ? determineStatusFromCodes(statusCodes, false).subtitle
              : null}
          </h5>
        </div>
      </SplashWrapper>
    </>
  );
};
