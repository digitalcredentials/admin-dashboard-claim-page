# VC Claim Page
[![Release Branch](https://img.shields.io/badge/release_branch-main-green.svg)](https://github.com/digitalcredentials/admin-dashboard-claim-page/tree/main)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://github.com/digitalcredentials/admin-dashboard-claim-page/blob/main/LICENSE)

<p float="left">
  <img src="https://github.com/digitalcredentials/admin-dashboard/assets/2185016/9926ded7-40e9-4f18-a89a-bd788274903e" width="200" />
    <img src="https://github.com/digitalcredentials/admin-dashboard/assets/2185016/31882ce0-ce6e-4661-8c42-e64958accfc3" width="350" height="0" /> 
  <img src="https://github.com/digitalcredentials/admin-dashboard/assets/2185016/31882ce0-ce6e-4661-8c42-e64958accfc3" width="350" /> 
</p>


This open-source **VC Claim Page** is a joint effort between the [Digital Credentials Consortium at MIT](https://digitalcredentials.mit.edu/) and the [Learning Economy Foundation](https://www.learningeconomy.io). It works with the [Admin Dashboard](https://github.com/digitalcredentials/admin-dashboard) to provide enterprises, schools, and organizations with a straightforward way to issue Verifiable Credentials in bulk.

## Features of the admin-dashboard in general:

- **User Management**: Efficient user onboarding and management.
- **Credential Management**: Handle individual credentials—search, view, check status, and revoke.
- **Batch Management**: Manage groups of credentials, such as annual diploma issuances.
- **VC & Email Template Management**: Edit and store templates for credentials and emails.
- **White Label Ready**: Configurable branding options.
- **VC-API & CHAPI Integration**: Compatible with the Verifiable Credential API exchange endpoints and CHAPI.
- **Deployment**: Fully dockerized for ease of deployment.

## The claim page:

- **Claim Page**: Allows students to claim and download their credentials.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

[![Stargazers repo roster for @digitalcredentials/admin-dashboard](https://reporoster.com/stars/digitalcredentials/admin-dashboard-claim-page)](https://github.com/digitalcredentials/admin-dashboard-claim-page/stargazers)


### Claim Page

This app serves the webpage that users see when claiming a credential.

It typically runs as a docker service in a docker compose network.

The app is configured by default to run at the path `/claim`. We've done this to more easily the allow the service to run within a docker compose network served on port 80 from a single domain. If you'd like to change the path take a look at [./src/pages/index.astro] and [./astro.config.mjs]

Similarly the app makes calls back to the [admin-dashboard](https://github/digitalcredentials/admin-dashboard) API assuming that the api is running on the same server, on port 80, at `/api`. Or, if the claim page is running on localhost, it will call the dashboard api at localhost:3000/api. If you'd like to change these, take a look at [./src/pages/index.astro].

- **Environment Setup**:
    - A sample environment file is provided as `.env.sample`.
    - Copy `.env.sample` to `.env` and replace the dummy values with actual values for your setup.

## 🚀 Project Structure

The VC Claim page uses [Astro](https://astro.build). 

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev-local`       | Starts local dev server at `locahost:8080`       |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## License
MIT © [MIT](#)
