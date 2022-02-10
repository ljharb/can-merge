## For Contributors:

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
