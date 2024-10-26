<p align="center"><img src="https://raw.githubusercontent.com/titaniumnetwork-dev/Ultraviolet-Static/main/public/uv.png" height="200"></p>

<h1 align="center">Ultraviolet-Static</h1>

Static files/assets used to spin up an Ultraviolet website.

## Install in [Ultraviolet-App](https://github.com/titaniumnetwork-dev/Ultraviolet-App.git)

See [Ultraviolet-App's Wiki](https://github.com/titaniumnetwork-dev/Ultraviolet-App/wiki/Customizing-your-frontend).

## Usage outside of Ultraviolet-App/Static hosting

### Ultraviolet scripts

This repository doesn't serve any Ultraviolet scripts. It has a `uv.config.js` to show how Ultraviolet is intended to work with this demo. Ultraviolet-App automatically merges our `uv.config.js` with the remaining UV scripts (`uv.sw.js`, `uv.client.js`, etc). **Some work has to be done in order to make this repository standalone.**

Here's how to get the remaining scripts for the purpose of hosting this repository:

1. Go to the [Ultraviolet releases](https://github.com/titaniumnetwork-dev/Ultraviolet/releases/)
2. Find the latest release
3. Download the latest tarball (eg. `titaniumnetwork-dev-ultraviolet-x.x.x.tgz`)
4. Open the tarball, navigate to the `dist` directory, and extract all the scripts with the exception of `uv.config.js` (we already have a configuration) into the `public/uv/` directory in this repository.
   You may see `.map` files. These are used for debugging. If they're too large, you can omit them without any errors.

   Do not copy `uv.config.js` from the archive!

