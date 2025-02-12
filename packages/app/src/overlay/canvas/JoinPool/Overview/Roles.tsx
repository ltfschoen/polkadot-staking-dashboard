// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { useHelp } from 'contexts/Help'
import { CardWrapper } from 'library/Card/Wrappers'
import { useTranslation } from 'react-i18next'
import { ButtonHelp } from 'ui-buttons'
import type { OverviewSectionProps } from '../types'
import { AddressesWrapper, HeadingWrapper } from '../Wrappers'
import { AddressSection } from './AddressSection'

export const Roles = ({ bondedPool }: OverviewSectionProps) => {
  const { t } = useTranslation('pages')
  const { openHelp } = useHelp()

  return (
    <div>
      <CardWrapper className="canvas secondary">
        <HeadingWrapper>
          <h3>
            {t('pools.roles')}
            <ButtonHelp marginLeft onClick={() => openHelp('Pool Roles')} />
          </h3>
        </HeadingWrapper>

        <AddressesWrapper>
          {bondedPool.roles.root && (
            <AddressSection
              address={bondedPool.roles.root}
              label={t('pools.root')}
            />
          )}
          {bondedPool.roles.nominator && (
            <AddressSection
              address={bondedPool.roles.nominator}
              label={t('pools.nominator')}
            />
          )}
          {bondedPool.roles.bouncer && (
            <AddressSection
              address={bondedPool.roles.bouncer}
              label={t('pools.bouncer')}
            />
          )}
          {bondedPool.roles.depositor && (
            <AddressSection
              address={bondedPool.roles.depositor}
              label={t('pools.depositor')}
            />
          )}
        </AddressesWrapper>
      </CardWrapper>
    </div>
  )
}
