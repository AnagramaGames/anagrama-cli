#!/usr/bin/env node

// npm suppresses stdout from dependency scripts — use stderr so users actually see this
const log = (msg) => process.stderr.write(msg + "\n");
const isGlobal = process.env.npm_config_global === "true";

if (isGlobal) {
  log("");
  log("  \u2728 anagrama is ready! Just run: anagrama");
  log("");
} else {
  log("");
  log("  \u2728 anagrama installed!");
  log("");
  log("  Quick start:      npx anagrama");
  log("  Or install global: npm install -g anagrama");
  log("");
}
