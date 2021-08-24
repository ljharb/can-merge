# can-merge <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

`can-merge` is a command-line utility that enables you to check whether a certain pull request can actually be merged without navigating to the web UI. It uses the GitHub GraphQL API to fetch the latest state of the status checks that might be running and evaluates if the PR can be merged.

<!--It also has a watch mode that will continuously check for changes in the status checks and evaluate the state once all status checks have completed. This enables developers to run the tool and execute custom scripts when the PR is ready to land.-->

![animation showing usage](./.github/can-merge.gif)

## Installation

The `can-merge` tool requires the latest [Node.js](https://nodejs.org/) version 12 or above. We **recommend** using `npx` to run `can-merge`.

```sh
npx can-merge
```

However, to install it globally, run the following lines in your terminal:

```bash
npm install -g can-merge
```

**NOTE**: If you are using Linux, you may need prepend `sudo` before the `npm install` command.

## Usage

```txt
$ npx can-merge --help
Usage: npx can-merge -p <pr> [-r <repo>]

Options:
      --help        Show help                                          [boolean]
      --version     Show version number                                [boolean]
  -p, --pr          pull request                             [string] [required]
  -r, --repo        repository            [string] [default: "ljharb/can-merge"]
  -s, --sha      commit SHA                           [string] [default: "HEAD"]
  -t, --token       github access token                      [string] [required]
```

**NOTE**:
- Export your GitHub Personal Access Token and set it as `$GITHUB_TOKEN`, or pass it with the `-t` option.

The `can-merge` tool will exit with a non-zero exit code if the pull request is not mergeable or blocked. It will exit with the exit code 0 if the pull request can be merged. You can use this tool with other scripts and tool to perform actions based on the exit code of this tool.

For example, you can use the `can-merge` tool to check if a pull request can be merged before merging it using a custom shell script.

## CLI Reference

### `--help`

Shows the usage information as in [Usage](#usage) section.

### `--version`

Shows the semantic version number of the tool.

### `-p, --pr`

Used to specify the Pull Request number being used on [GitHub](https://github.com).

### `-r, --repo`

Used to specify the repository if there is no GitHub remote configured or if it is different from the repository you are currently in.

### `--sha`

Specify the [commit-ish](https://git-scm.com/docs/gitglossary#Documentation/gitglossary.txt-aiddefcommit-ishacommit-ishalsocommittish) to be used. Defaults to the current SHA.

<!--
### `--retryDelay`

 Used to specify the delay before polling the GitHub API for checking if the state of status checks have changed. To be used along with the `-w, --watch` option.
-->

### `-t, --token`

Used to specify the GitHub Personal Access Token needed to authenticate queries to the GitHub API.

<!--
### `-w, --watch`

Used to specify if the tool should keep polling for changes in the status checks untill all of them have completed.
-->

## License

[MIT License](./LICENSE)

[package-url]: https://npmjs.org/package/can-merge
[npm-version-svg]: https://versionbadg.es/ljharb/can-merge.svg
[deps-svg]: https://david-dm.org/ljharb/can-merge.svg
[deps-url]: https://david-dm.org/ljharb/can-merge
[dev-deps-svg]: https://david-dm.org/ljharb/can-merge/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/can-merge#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/can-merge.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/can-merge.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/can-merge.svg
[downloads-url]: https://npm-stat.com/charts.html?package=can-merge
[codecov-image]: https://codecov.io/gh/ljharb/can-merge/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/can-merge/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/can-merge
[actions-url]: https://github.com/ljharb/can-merge/actions
