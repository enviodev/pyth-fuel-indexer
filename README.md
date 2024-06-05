# Pyth Fuel Indexer

An indexer built using [Envio](https://envio.dev)

## Getting started

`pnpm i && pnpm dev`

## Issues

- The abi has been modified to remove the field of the struct that gets logged in GovernanceInstruction as it includes an edge case where the field name is 'module' which currently results in a reserved word conflict
