// Copyright 2024 @polkadot-cloud/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Base } from 'api/base'
import type { ChainId } from 'common-types'

import terminal from 'virtual:terminal' // eslint-disable-line

export class ValidatorsEntries extends Base {
  constructor(network: ChainId) {
    super(network)
  }

  async fetch() {
    const res = await this.unsafeApi.query.Staking.Validators.getEntries({
      at: 'best',
    })

    terminal.log('validators: ', res)

    return res
  }
}
