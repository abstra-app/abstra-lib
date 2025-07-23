# Banking

The banking module of abstra uses the openapi spec of totalbank to generate the client code.

The code was generated using openapi-generator python client. In `[monorepo]/abstra-lib/abstra_internals/services/banking/sdk` directory, run:

Install `openapi-generator` from [OpenApi Generator Installation guide](https://openapi-generator.tech/docs/installation). Install it using brew so the cli command `openapi-generator`is available (instead of `openapi-generator-cli`):

```bash
brew install openapi-generator
```

And then, run:

```bash
python generate_totalbank_api.py
```