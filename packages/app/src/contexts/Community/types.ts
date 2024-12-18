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

export interface CommunityContextInterface {
  validatorCommunity: ValidatorEntry[]
}
