<!-- markdown-link-check-disable -->

[![Polkadot - App](https://img.shields.io/badge/Polkadot-App-E6007A?logo=polkadot&logoColor=E6007A)](https://staking.polkadot.cloud) ![ci](https://github.com/polkadot-cloud/polkadot-staking-dashboard/actions/workflows/ci.yml/badge.svg) [![License](https://img.shields.io/badge/License-GPL3.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)

<!-- markdown-link-check-enable -->

# Polkadot Staking Dashboard

<img width="1479" alt="Screenshot 2024-10-06 at 13 56 44" src="https://github.com/user-attachments/assets/d8edbbae-3cf0-4330-bac3-280e74f5d3cc">

## Contributing Community Assets

### Validator Operators

To showcase a validator operator on staking dashboard, submit a PR to [**`@w3ux/w3ux-library`**](https://github.com/w3ux/w3ux-library/tree/main). The operator will then be available in the **`@w3ux/validator-assets`** NPM package. [Full instructions](https://github.com/w3ux/w3ux-library/tree/main/library/validator-assets).

## URL Variable Support

Polkadot Staking Dashboard supports URL variables that can be used to direct users to specific configurations of the app, such as landing on a specific language or on a specific network. Variables are added at the end of the hash portion of URL.

The currently supported URL variables are as follows:

- **n**: Controls the default network to connect to upon visiting the dashboard. Supported values are `polkadot`, `kusama`, `westend`, `tangle-mainnet`, and `tangle-testnet`.
- **l**: Controls the default to use upon visiting the dashboard. Supported values are `en` and `cn`.
- **a**: Controls the account to connect to upon visiting the dashboard. Ignored if the account is not present in the initial imported accounts.

URL variables take precedence over saved values in local storage, and will overwrite current configurations. URL variables will update (if present) as a user switches configurations in-app, such as changing the network or language.

### Example URL:

The following URL will load Tangle Mainnet and use the Chinese localisation resource:

```
staking.polkadot.cloud/#/overview?n=tangle-mainnet&l=cn
```

## Presentations

- 29/06/2023: [[Video] Polkadot Decoded 2023: The Next Step of the Polkadot UX Journey](https://www.youtube.com/watch?v=s78SZZ_ZA64)
- 30/06/2022: [[Video] Polkadot Decoded 2022: Polkadot Staking Dashboard Demo](https://youtu.be/H1WGu6mf1Ls)

## Repository Transfer History

**17/06/2024:** Moved from `paritytech/polkadot-staking-dashboard`.

## Contributors

- Install NVM
- Install Node.js defined in .nvmrc

  ```bash
  nvm install
  nvm use
  ```

- Install Yarn

  ```bash
  npm install -g yarn
  npm install -g corepack
  yarn set version 4.1.1
  corepack enable
  corepack prepare yarn@v4.1.1 --activate
  ```

- Install dependencies

  ```bash
  yarn
  yarn run lint
  ```

- Install debugging plugin

  ```bash
  npm i -D vite-plugin-terminal
  ```

- Run development. Note: Must pass linting or may get errors

  ```bash
  yarn run dev
  ```

- Clear build

  ```bash
  yarn run clear
  ```

- Clear dependencies
  ```bash
  yarn run reset
  ```
