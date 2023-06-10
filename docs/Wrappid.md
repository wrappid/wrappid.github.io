---
sidebar_position: 1
---
<h3>Wrapper Framework for Rapid development</h3>

`Wrappid` Framework is a wrapper framework built to enable rapid development of applications based on `React`, `React Native`, `Node`, `Express`, etc. Here, you **write code once** and use `Wrappid Toolkit` to build your web and mobile applications simultaneously.

`Wrappid` includes a repository of components, called the `CoreComponents`, for application developers to use. As application developers, you also have the flexibility to write your own components. By default the styling libraries used are `mui` for web and `react native paper` for mobile.

`Wrappid` also comes with a set of pre-coded business handling modules like app builder, user/role/permission management, authentication, authorization, error reporting, notifications (push/mail/sms/whatsapp), etc.

## Getting Started

Get started by **creating a new wrappid project**.
This getting started section will help you setup a basic `Wrappid` project environment. The easiest way is to use the `Wrappid Toolkit`.

Follow the below steps to get going.

1. Verify Pre-requisites
2. Install `Wrappid Toolkit`
3. One-time Initialisation
4. Setup `Wrappid` Project(s)


### 1. Verify Pre-requisites

First you need to verify that your system fulfills the pre-requisites. Listed below are the things required to be available in your system.

- Node.js - version 16
- npm - version 8

### 2. Install `Wrappid Toolkit`

To use `Wrappid Toolkit`, you need to install `Wrappid Toolkit` globally in your system.

> <br/>
>
> **_Note:_**
>
> _The `Wrappid Toolkit` is available in the GitHub npm pkg registry. You will have to setup scoped pkg registry as your npm runtime configuration._
>
> _Run the below commands to setup scoped pkg registry:_
>
> <!--C:\Users\Sam>-->
>
> ```terminal
> npm config set @wrappid:registry https://npm.pkg.github.com/wrappid
>
> npm config set //npm.pkg.github.com/:_authToken <WRAPPID_TOKEN>
> ```
>
> _Please fill [Wrappid Early Access Request form](https://forms.gle/NCUbSXvsX1v9QhD96) to get a valid_ `<WRAPPID_TOKEN>`. After filling the form you will receive the `<WRAPPID_TOKEN>` in your email.
>
> _The above mentioned_ `<WRAPPID_TOKEN>` _could only be used to read and download the `Wrappid Toolkit` package._
>
> <br/>

<br/>Run the below command to install `Wrappid Toolkit` globally in your system.

```terminal
npm install -g @wrappid/toolkit
```

Once the installation is done, verify the `Wrappid Toolkit` installation. Run the below command to verify you already have `Wrappid Toolkit` installed and check the installed version

```terminal
wrappid -V
```

This should show you the exact version of `Wrappid Toolkit` installed

```terminal
wrappid -V
v0.0.14
```

### 3. One-time Initialisation

Run the below command to install all dependencies `Wrappid Toolkit` uses

```terminal
wrappid install
```
<!-- The command installs all necessary dependencies you need with Wrappid -->

This one-time initialisation of `Wrappid Toolkit` follows the below steps:

- Install package dependencies
- Download & Install GitHub CLI or `gh` (if not already installed)
- Authenticate with GitHub A/c to use GitHub CLI or `gh`

#### 3.1. Install package dependencies

This is a automated process. You need not do anything.

#### 3.2. Download & Install GitHub CLI or `gh` (if not already installed)

This is a automated process but you will be prompted with GitHub CLI or `gh` installation. Kindly click Next -> Next -> ... -> Finish to complete the GitHub CLI or `gh` installation.

#### 3.3. Authenticate with GitHub A/c to use GitHub CLI or `gh`

When prompted, follow on-screen instructions to authenticate yourself with your GitHub A/c. It starts like:

<!-- <span style="color:orange"><code>GitHub CLI authenticating...</code></span> -->

```terminal
GitHub CLI authenticating...
? What account do you want to log into?  [Use arrows to move, type to filter]
> GitHub.com
  GitHub Enterprise Server
```

Select Github.com (generally already selected), Press Enter.

You'll be asked to authenticate yourself.  
Press `Y` and hit Enter if you are not authenticated or if you wish to re-authenticate, Otherwise press `N` and hit Enter.

<!-- Once the installation is done, verify the `gh` installation. Run the below command to verify you already have `gh` installed and check the installed version.
This should show you the exact version of `gh` installed. -->

<!--wrappid_user@system:~$-->

<!-- ```terminal
gh --version
gh version 2.28.0 (2023-04-25)
https://github.com/cli/cli/releases/tag/v2.28.0
``` -->

> <br/>
>
> **_Note:_**
>
> _If you get an error during the course of execution of the command (`wrappid install`), or find that `gh` isn't working, which generally looks like the below:_
>
> ```terminal
> 'gh' is not recognized as an internal or external command,
> operable program or batch file.
> ```
>
> _Close all terminals/cmd and open a fresh terminal/cmd and run `gh` or `gh --version` to confirm GitHub CLI installation._
>
> _If `gh` still doesn't work, go to the [official documentation of GitHub CLI](https://github.com/cli/cli#installation) and install `gh` manually._
>
> _After successfull installation of GitHub CLI or `gh`, run `wrappid install` again._
>
> _If you are still not taken to authentication instructions, run `gh auth login` and complete your authentication manually._
>
> [Know more about GitHub CLI](https://cli.github.com/manual)
>
> <br/>

### 4. Setup `Wrappid` Project

#### 1. Initialize a `Wrappid` project

Run the below command to initialize a default `Wrappid` project with default **wrappid template**

```terminal
wrappid init
```

This will create a `Wrappid` project with default project name `wrappid-app`

#### 2. Initialize a `Wrappid` project with specific project name.

Initialize a new Wrappid project using the **wrappid template**.

Run the below command to initialize a `Wrappid` project with a specified project name.

```terminal
wrappid init <project_name>
```

This will create 3 `Wrappid` projects with project names [`<project_name>-app`](#1. Frontend - `<wrappid>-app`), [`<project_name>-module`](#2. Backend - `<wrappid>-service`) and [`<project_name>-service`](#3. Modules - `<wrappid>-module`) 
<!-- This will create 3 `Wrappid` projects with default project names `wrappid-app`, `wrappid-module` and `wrappid-service` -->

## Start Your App

Run the development server for web:

```bash
cd wrappid-app
wrappid start web
```

Run the development server for mobile:

```bash
cd wrappid-app
wrappid start web
```

The `cd` command changes the directory you're working with. In order to work with your newly created Wrappid-App, you'll need to navigate the terminal there.

The `wrappid start <project-type>` command starts development server, ready for you to view at http://localhost:3000/. Make sure to keep the port free!
