# anagrama-cli

Terminal client for Anagrama.

## Setup

```bash
npm install
npm run build
npm link
```

## Login

```bash
anagrama login --url http://localhost:3000
```

This prints a URL and opens your browser. After you sign in, the CLI stores a token at `~/.anagrama/cli.json`.

## Play (daily Anagrama)

```bash
anagrama play
```

## Commands

- `anagrama login` – Link your account
- `anagrama logout` – Remove local token
- `anagrama whoami` – Show current login
- `anagrama play` – Play the daily Anagrama puzzle

## Config

Set `ANAGRAMA_URL` to point at your frontend (default is `http://localhost:3000`).

```bash
ANAGRAMA_URL=http://localhost:3000 anagrama play
```
