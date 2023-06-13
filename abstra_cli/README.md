[![pypi](https://img.shields.io/pypi/v/abstra-cli.svg)](https://pypi.python.org/pypi/abstra-cli) [![PyPI Downloads](https://img.shields.io/pypi/dm/abstra-cli.svg)](https://pypi.org/project/abstra-cli/) [![Code check](https://github.com/abstra-app/abstra-cli/actions/workflows/code_check.yml/badge.svg)](https://github.com/abstra-app/abstra-cli/actions/workflows/code_check.yml)

# Abstra CLI

Command Line Interface for Abstra Cloud

## Getting Started

### Authentication

You will need to be authenticated to run most commands.

1. Run command below:

```sh
abstra login
```

- Credentials are stored at `.abstra/credentials` path inside current directory.

- Alternatively you can set the `ABSTRA_API_TOKEN` environment variable.

- Alternatively you can run `abstra configure <token>` if you already have a token.

## CRUD Commands

The general structure of the commands follows the pattern below:

```sh
abstra <command> <resource> [<argument>...] [--<optional-argument-name> <optional-argument-value> ...]
```

The available commands are:

- `list`
- `add`
- `update`
- `remove`
- `play`
- `logs`

Remote resources can be:

- `forms`
- `hooks`
- `jobs`
- `files`
- `vars`
- `packages`
- `subdomain`
- `dash`

### List resources

List remote resources on your workspace.

```sh
abstra list RESOURCE{forms, hooks, jobs, files, vars, packages}
```

Examples:

```sh
abstra list packages

abstra list vars

abstra list files

abstra list forms

abstra list hooks

abstra list jobs

abstra list subdomain

# Saving cloud packages to a requirements.txt file
abstra list packages > requirements.txt

# Saving cloud environment variables to a .env file
abstra list vars > .env
```

### Add resource

Adds remote resources on your workspace.

```sh
abstra add RESOURCE [...OPTIONS]
```

The current options for each resource are:

#### `forms`:

- `--name` or `--n` or `--title`: string
- `--path`: string
- `--file` or `--f`: file_path\*
- `--code` or `--c`: string\*
- `--enabled`: boolean
- `--background`: image_path or string
- `--main-color`: string
- `--start-message`: string
- `--error-message`: string
- `--end-message`: string
- `--start-button-text`: string
- `--restart-button-text`: string
- `--timeout-message`: string
- `--logo-url`: string
- `--show-sidebar`: boolean
- `--log-messages`: boolean
- `--font-color`: string
- `--auto-start`: boolean
- `--allow-restart`: boolean
- `--welcome-title`: string
- `--brand-name`: string
- `--upsert`: boolean

\* Note: set either file or code, not both.

Examples:

```sh
abstra add form --name="my_form" -f main.py --background '#fffeee'

abstra add form --path=test -f test.py --enabled=False

abstra add form --name="Form Name" --code "from hackerforms import * \n\ndisplay('hello_world')" --background '#fffeee' --main-color red --start-message 'start message' --error-message 'error-message' --end-message 'end message' --start-button-text 'start button text' --show-sidebar --allow-restart
```

#### `hooks`

- `--name` or `--n` or `--title`: string
- `--path`: string
- `--file` or `--f`: file_path\*
- `--code` or `--c`: string\*
- `--enabled`: boolean
- `--upsert`: boolean

\* Note: set either file or code, but not both.

Examples:

```sh
abstra add hook --name="test hook" -f main.py --upsert

abstra add hook --path=test -f test.py --enabled=False
```

#### `jobs`

- `--name` or `--n` or `--title`: string
- `--identifier` or `--idt`: string
- `--schedule` or `--crontab`: string
- `--file` or `--f`: file_path
- `--code` or `--c`: string
- `--enabled`: boolean
- `--upsert`: boolean

\* Note: set either file or code, but not both.

Examples:

```sh
abstra add job --idt new-job --noenabled --name="Test Job" --upsert

abstra add job --idt daily --schedule="00 00 1 * *" --name="Every midnight"
```

#### `files`

- file_path[]: list of file or directory paths. Defaults to `.`

Examples:

```sh
abstra add files foo.txt bar.log

abstra add files foo/ ./
```

#### `vars`

- environment_variable[]: list of Key=Value env vars
- -f or \-\-file: file_path (ex. -f .env)

Examples:

```sh
abstra add vars ENVIRONMENT=production VERSION=1.0.0

abstra add vars -f .env

abstra add vars --file .env
```

#### `packages`

- package_name[]: list of packages with optional version (ex. numpy=1.0.1)
- -f or \-\-file: file_path (ex. --file requirements.txt). Defaults to `requirements.txt`

Examples:

```sh
abstra add packages pandas numpy=1.0.1 scipy>=1.0.1

abstra add packages -f requirements.txt

abstra add packages -r requirements.txt

abstra add packages --file requirements.txt

abstra add packages --requirement requirements.txt
```

### Update resource

Updates remote resources on your workspace.

_Currently only available for forms, hooks and jobs_

```sh
abstra update [IDENTIFIER OR PATH] [...OPTIONS]
```

The options for each resource are:

#### `forms`

- `form_path`: string (required parameter)
- `--name`: string
- `--path`: string
- `--file`: file_path
- `--code`: string
- `--enabled`: boolean
- `--background`: image_path or string
- `--main-color`: string
- `--start-message`: string
- `--error-message`: string
- `--end-message`: string
- `--start-button-text`: string
- `--restart-button-text`: string
- `--timeout-message`: string
- `--logo-url`: string
- `--show-sidebar`: boolean
- `--log-messages`: boolean
- `--font-color`: string
- `--auto-start`: boolean
- `--allow-restart`: boolean
- `--welcome-title`: string
- `--brand-name`: string

Examples:

```sh
abstra update form new-onboarding --name="Another name" --allow-restart
```

#### `jobs`:

- `identifier`: string (required parameter)
- `--name` or `--n` or `--title`: string
- `--identifier` or `--idt`: string
- `--schedule` or `--crontab`: string
- `--file` or `--f`: file_path
- `--code` or `--c`: string
- `--enabled`: boolean

Example:

```sh
abstra update job daily --schedule="00 00 5 * *"
```

#### `hooks`

- `hook_path`: string (required parameter)
- `--name` or `--n` or `--title`: string
- `--path`: string
- `--file` or `--f`: file_path
- `--code` or `--c`: string
- `--enabled`: boolean

Examples:

```sh
abstra update hook stripe-callback --enabled
```

#### `subdomain`

- `--name`: string (required parameter)

Examples:

```sh
abstra update subdomain new-subdomain-name
```

### Remove resource

Remove remote resources from your workspace.

```sh
abstra remove RESOURCE [...OPTIONS]
```

Examples:

```sh
abstra remove form sales-onboarding

abstra remove job monthly

abstra remove hook stripe-test

abstra remove files foo.txt bar.log

abstra remove vars ENVIRONMENT VERSION

abstra remove packages pandas numpy scipy
```

### Play resource

Run the resource on Abstra Cloud.
_Currently only available for forms._

```sh
abstra play RESOURCE [...OPTIONS]
```

Examples:

```sh
abstra play form b2b-ingestion
```

## Deploy Command

This command allows you to specify several resources in a JSON file and deploy them in one command (great for CI/CD workflows).  
The default path is `abstra.json` in the root directory.

```sh
abstra deploy [--file or -f]
```

Examples:

```sh
abstra deploy -f prod.json
```

The file shoud follow a structure similar to what you can pass in each resource add command (using deploy the upsert flag will be added).

Example file:

```json
{
  "forms": [
    {
      "name": "Main Form",
      "path": "main",
      "file": "forms/main.py"
    },
    {
      "name": "Secondary Form",
      "path": "secondary",
      "code": "forms/secondary.py",
      "enabled": false
    }
  ],
  "hooks": [
    {
      "name": "Test",
      "path": "test",
      "file": "hooks/test.py"
    },
    {
      "name": "Stripe",
      "path": "stripe",
      "file": "hooks/stripe.py"
    }
  ],
  "jobs": [
    {
      "name": "Monthly",
      "idt": "month",
      "file": "jobs/month.py",
      "schedule": "00 00 1 * *",
      "enabled": false
    },
    {
      "name": "Weekly",
      "idt": "week",
      "file": "jobs/week.py",
      "schedule": "00 00 * * 1"
    }
  ],
  "files": ["root.json", "files/"],
  "packages": {
    "file": "requirements.txt"
  },
  "vars": {
    "file": ".env"
  }
}
```

For packages and vars you can also specify manually:

```json
{
  "packages": ["pydash", "stripe==1.1.0"],
  "vars": ["ABSTRA_CLOUD=test", "STRIPE_KEY=foobar"]
}
```

## Logs Command

This command allows you to see the logs of one resource in your workspace.

```sh
abstra logs RESOURCE [...OPTIONS]
```

The options for each resource are:

#### `dash`

- `--path`: string (optional)
- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

Examples:

```sh
abstra logs dash --path my-dash --limit 10 --offset 0
```

#### `form`

- `--id`: string (optional)
- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

```sh
abstra logs form --limit 10 --offset 0
```

#### `hooks`

It lists all the logs in your workspace.

- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

```sh
abstra logs hooks  --limit 10 --offset 0
```

#### `hook`

- `--id` or `--log_id`: string
- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

```sh
abstra logs hook --id 6a7788c1-7eaf-46a6-93d5-13dfba962e90 --limit 10 --offset 0
```

#### `jobs`

It lists all the logs in your workspace.

- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

```sh
abstra logs jobs --limit 10 --offset 0
```

#### `job`

It lists all the logs within a specific job or a specific log.

- `--id` or `--log_id`: string
- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

```sh
abstra logs job --id 6a7788c1-7eaf-46a6-93d5-13dfba962e90 --limit 10 --offset 0
```

#### `workspace`

It lists the logs of all resources in your workspace.

- `--limit`: integer (optional, default to 20. To disable set to 0)
- `--offset`: integer (optional, default to 0)

```sh
abstra logs workspace
```

## Aliases

Some commands have aliases.

#### `upload`

```sh
# Alias for `abstra add files` with default argument `.`
abstra upload [FILES or DIRECTORIES, default: .]
```

#### `ls`

```sh
# Alias for `abstra list files`
abstra ls
```

#### `rm`

```sh
# Alias for `abstra remove files`
abstra rm
```

#### `install`

```sh
# Alias for `abstra add packages`
abstra install [PACKAGES]
```

## Ignoring files

You can ignore files placing a text file named `.abstraignore` at the target directory. The file `.abstraignore` itself will always be ignored.

Example:

```
__pycache__

tests/

*.ipynb
```
