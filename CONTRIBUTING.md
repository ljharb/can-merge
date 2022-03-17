## For Contributors:

### Installing `can-merge`

In your local clone, create a `.env` file and add:

```bash
GITHUB_TOKEN = <github access token>
```

Run the following commands:

```bash
npm install
npm link
```

Add CLI arguments as needed (see [Usage](#usage))

```bash
node .
```

Navigate to another repository on your computer, and run:

```bash
can-merge
```

You should be able to drop into the CLI, generate a token, and play around in the can-merge interface.

### Testing 
`can-merge` uses the test framework [tape](https://github.com/substack/tape). 

To run all tests for `can-merge`, run: 

```
npm test 
```
Or

```
npm run tests-only
```

There are multiple ways to run a test in isolation:

```
npx tape test/*test.js
```

```
node test/utils/*test.js
```

All of these methods will produce a TAP output, a Test Anything Protocol. This output can be very helpful when writing new tests for future features for `can-merge`. The TAP output produces a more thorough response to help diagnose breakages. You can read more about it [here](https://testanything.org/).

<img width="939" alt="Screen Shot 2022-03-17 at 1 11 41 PM" src="https://user-images.githubusercontent.com/26771302/158856335-c92a1572-847e-45cb-9e2b-3efa0b6ee70c.png">


You may pipe in `tap-spec`, in order to pretty up the output, and format the TAP output like Mocha's spec reporter in several ways: 

```
npx tape test/filterPullRequest.js | node_modules/.bin/tap-spec
```

```
npx tape test/filterPullRequest.js | npx tap-spec
```

<img width="934" alt="Screen Shot 2022-03-17 at 1 10 59 PM" src="https://user-images.githubusercontent.com/26771302/158856384-6e3c21ac-9b63-4297-bbbb-d5b71a384318.png">

If `tap-spec` is not your thing, there is also `faucet` a npm dependency, found [here](https://www.npmjs.com/package/faucet). It is a human-readable TAP summarizer. 

To get the `faucet` command, do:

```
npm install -g faucet 
```

Then just run the test file as above, with faucet piped in:

```
npx tape test/evaluateCommitStatus.js | faucet 
```
<img width="939" alt="Screen Shot 2022-03-17 at 3 04 14 PM" src="https://user-images.githubusercontent.com/26771302/158877152-7a5c7551-0194-44c0-9c46-63039275b18f.png">

Or give `faucet` a command of files:

```
faucet test/evaluateCommitStatus.js
```

<img width="934" alt="Screen Shot 2022-03-17 at 3 04 43 PM" src="https://user-images.githubusercontent.com/26771302/158877312-490fe33e-eb0d-4c2e-ae13-adca208ac818.png">
