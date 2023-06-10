---
sidebar_position: 1
---

# Toolkit - The Wrappid CLI
## `Wrappid Toolkit` Usage Documentation

Run the below command to find other `[command] [subcommand] [arguments] [options]` supported by the `Wrappid Toolkit`.

```bash
wrappid --help
```
## All commands for ref:
wrappid cli
```
wrappid [command] [subcommand] [arguments] [options]

This is a npm package to enable Wrappid Toolkit so that application developers can use the wrappid command line interface to handle Wrappid projects.

Options:
  -V, --version          output the version number
  -h, --help             display help for command

Commands:
  install                This command will install all the pre-requisite such as:
                         a. Install GitHub CLI
                         b. Authenticate with GitHub A/c using GitHub CLI
  list [options]         Show list of wrappid projects in current working directory.
  init <project-name>    This command will initialize app service module project using wrappid template.
  setup                  This command will setup web mobile project.
  start                  This command will start web mobile project.
  copy [options]         This command helps you to copy src and res to web and mobile runtime.
  include <module-name>  This command helps you to include module.
  add                    Include new modules into project directory (Not needed)

wrappid install

wrappid init app test - old
wrappid init service test - old
wrappid init test - old

wrappid init <projectname>
wrappid init <projectname> app
wrappid init <projectname> service

wrappid setup web
wrappid setup mobile
wrappid setup

wrappid start web --env=dev
wrappid start mobile --env=dev
wrappid start service --env=dev

wrappid copy web
wrappid copy mobile

wrappid add <modulename> - old

```