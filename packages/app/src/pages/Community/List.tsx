// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

// FIXME - this is temporary to pass tests when `yarn run test` is run
// import type { ValidatorEntry } from '@w3ux/validator-assets'
type ValidatorSupportedChains =
  | 'polkadot'
  | 'kusama'
  | 'westend'
  | 'tangle-mainnet'
  | 'tangle-testnet'
interface ValidatorEntry {
  name: string
  icon: string
  bio: string
  email?: string
  x?: string
  website?: string
  validators: Partial<Record<ValidatorSupportedChains, string[]>>
}
// declare const ValidatorCommunity: ValidatorEntry[]
// end temporary fix above

import { useCommunity } from 'contexts/Community'
import { useNetwork } from 'contexts/Network'
import { useEffect, useState } from 'react'
import { PageRow } from 'ui-structure'
import { Item } from './Item'
import { ItemsWrapper } from './Wrappers'
import { useCommunitySections } from './context'

export const List = () => {
  const { network } = useNetwork()
  const { scrollPos } = useCommunitySections()
  const { validatorCommunity } = useCommunity()

  const [entityItems, setEntityItems] = useState<ValidatorEntry[]>(
    validatorCommunity.filter((v) => v.validators[network] !== undefined)
  )

  useEffect(() => {
    setEntityItems(
      validatorCommunity.filter((v) => v.validators[network] !== undefined)
    )
  }, [network])

  useEffect(() => {
    window.scrollTo(0, scrollPos)
  }, [scrollPos])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: scrollPos ? 0 : 0.5,
        staggerChildren: scrollPos ? 0 : 0.025,
      },
    },
  }

  return (
    <PageRow yMargin>
      <ItemsWrapper variants={container} initial="hidden" animate="show">
        {entityItems.map((item, index: number) => (
          <Item key={`community_item_${index}`} item={item} actionable />
        ))}
      </ItemsWrapper>
    </PageRow>
  )
}
