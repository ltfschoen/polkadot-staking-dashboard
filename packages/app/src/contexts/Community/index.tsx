// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { shuffle } from '@w3ux/utils'
// FIXME - this is temporary to pass tests when `yarn run test` is run
// import type { ValidatorEntry } from '@w3ux/validator-assets'
// import { ValidatorCommunity } from '@w3ux/validator-assets'
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
// FIXME - shouldn't be hard-coded
const ValidatorCommunity: ValidatorEntry[] = []
// end temporary fix above
import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import { defaultCommunityContext } from './defaults'
import type { CommunityContextInterface } from './types'

export const CommunityContext = createContext<CommunityContextInterface>(
  defaultCommunityContext
)

export const useCommunity = () => useContext(CommunityContext)

export const CommunityProvider = ({ children }: { children: ReactNode }) => {
  // Stores a randomised validator community dataset.
  const [validatorCommunity] = useState<ValidatorEntry[]>([
    ...shuffle(ValidatorCommunity ? ValidatorCommunity : []),
  ])

  return (
    <CommunityContext.Provider value={{ validatorCommunity }}>
      {children}
    </CommunityContext.Provider>
  )
}
