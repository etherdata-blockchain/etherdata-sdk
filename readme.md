# Etherdata SDK

This repo contains all the source code for etherdata blockchain.
Currently, we support
- Kotlin / Java
- Typescript / javascript
- React UI

## File structure

- etd-sdk-generate: SDK generator. Will generate sdk based on the language and yaml file
- sdk: A list of yaml files which contains rpc method, input and output parameters
- schema: a Json schema for sdk yaml file. Will provide schema validation and auto-complete
- sdk-dist: Contains all the source code for etherdata in all supported languages
