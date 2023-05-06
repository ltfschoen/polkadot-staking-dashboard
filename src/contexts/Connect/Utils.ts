// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import Keyring from '@polkadot/keyring';
import { localStorageOrDefault } from '@polkadotcloud/utils';
import type { ExtensionAccount } from 'contexts/Extensions/types';
import type { Network } from 'types';
import type { ExternalAccount, ImportedAccount, LedgerAccount } from './types';

// extension utils

// adds an extension to local `active_extensions`
export const addToLocalExtensions = (id: string) => {
  const localExtensions = localStorageOrDefault<string[]>(
    `active_extensions`,
    [],
    true
  );
  if (Array.isArray(localExtensions)) {
    if (!localExtensions.includes(id)) {
      localExtensions.push(id);
      localStorage.setItem(
        'active_extensions',
        JSON.stringify(localExtensions)
      );
    }
  }
};

// removes extension from local `active_extensions`
export const removeFromLocalExtensions = (id: string) => {
  let localExtensions = localStorageOrDefault<string[]>(
    `active_extensions`,
    [],
    true
  );
  if (Array.isArray(localExtensions)) {
    localExtensions = localExtensions.filter((l: string) => l !== id);
    localStorage.setItem('active_extensions', JSON.stringify(localExtensions));
  }
};

// check if an extension exists in local `active_extensions`.
export const extensionIsLocal = (id: string) => {
  // connect if extension has been connected to previously
  const localExtensions = localStorageOrDefault<string[]>(
    `active_extensions`,
    [],
    true
  );
  let foundExtensionLocally = false;
  if (Array.isArray(localExtensions)) {
    foundExtensionLocally =
      localExtensions.find((l: string) => l === id) !== undefined;
  }
  return foundExtensionLocally;
};

// account utils

// gets local `activeAccount` for a network
export const getActiveAccountLocal = (network: Network) => {
  const keyring = new Keyring();
  keyring.setSS58Format(network.ss58);
  let _activeAccount = localStorageOrDefault(
    `${network.name}_active_account`,
    null
  );
  if (_activeAccount !== null) {
    _activeAccount = keyring.addFromAddress(_activeAccount).address;
  }
  return _activeAccount;
};

// gets local ledger accounts, formatting their addresses
// using active network ss58 format.
export const getLocalLedgerAccounts = (
  network: Network,
  activeNetworkOnly = false
) => {
  let localLedgerAccounts = localStorageOrDefault<LedgerAccount[]>(
    'ledger_accounts',
    [],
    true
  ) as LedgerAccount[];
  if (activeNetworkOnly) {
    localLedgerAccounts = localLedgerAccounts.filter(
      (l: LedgerAccount) => l.network === network.name
    );
  }
  return localLedgerAccounts;
};

// gets local external accounts, formatting their addresses
// using active network ss58 format.
export const getLocalExternalAccounts = (
  network: Network,
  activeNetworkOnly = false
) => {
  let localExternalAccounts = localStorageOrDefault<ExternalAccount[]>(
    'external_accounts',
    [],
    true
  ) as ExternalAccount[];
  if (activeNetworkOnly) {
    localExternalAccounts = localExternalAccounts.filter(
      (l: ExternalAccount) => l.network === network.name
    );
  }
  return localExternalAccounts;
};

// gets accounts that exist in local `external_accounts`
export const getInExternalAccounts = (
  accounts: ExtensionAccount[],
  network: Network
) => {
  const localExternalAccounts = getLocalExternalAccounts(network, true);

  return (
    localExternalAccounts.filter(
      (a: ExternalAccount) =>
        (accounts || []).find(
          (b: ExtensionAccount) => b.address === a.address
        ) !== undefined
    ) || []
  );
};

// removes supplied accounts from local `external_accounts`.
export const removeLocalExternalAccounts = (
  network: Network,
  accounts: ExternalAccount[]
) => {
  let localExternalAccounts = getLocalExternalAccounts(network, true);
  localExternalAccounts = localExternalAccounts.filter(
    (a: ExternalAccount) =>
      accounts.find(
        (b: ImportedAccount) =>
          b.address === a.address && a.network === network.name
      ) === undefined
  );
  localStorage.setItem(
    'external_accounts',
    JSON.stringify(localExternalAccounts)
  );
};
