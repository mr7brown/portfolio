---
sidebar_label: "Getting Started with Git"
sidebar_position: 2
tags: [Git, Github, Unix, VS Code, HBO]
---

# Overview

One question frequently asked by aspiring technical writers is: How do I gain the requisite experience? And typically, responders say to join an open source project or something similar. While working on projects is a great way to gain experience, technical writers can also begin simply by setting up their own git-based environement—even if it just used to publish notes or a personal portfolio.

We will cover how to set up your environment in this article.

## Prerequisites

1. A text editor. The most popular editor and IDE is [Visual Studio Code](https://code.visualstudio.com/), but [Atom](https://atom.io/) and [Xcode](https://developer.apple.com/xcode/) are good options too.
1. [Github account](https://github.com/).
1. For MacOS, you will need [Xcode and Command Line Tools](https://developer.apple.com/xcode/resources/) as well as Git. To check if you have Command Line Tools installed, open a new [terminal window](https://www.wikihow.com/Open-a-Terminal-Window-in-Mac) and run:

```
# If you see a version number, you are good to go. Otherwise, follow the instructions for installing in the link above.
$ xcode-select -v
```

## Quick Note on the Terminal

Before working with Git, it is important to note that the terminal is a tool used to modify a computer's file system. Whenever working with it, be sure that you fully understand the how it works or you can cause major problems.

To ensure that you are working from a place that won't harm your computer, you should work from your `/desktop` or another folder. If you don't change to the desktop or another folder, you run the risk of making global changes to your file system, which can be a challenege to reverse.

To begin, open a new terminal window and run:

```
# Depending on your OS version, you may need to put a forward slash (/) before desktop
$ cd desktop
```

## Basic Commands

This section is an optional read. If you'd rather start using Git and creating a sandbox, feel free to skip to the next section.

For some, it is easier to understand the commands before using them. For others it is the opposite, but either way, you will frequently use these commands and the Git-workflow:

- `git init` - Initializes a blank repository. Essentially, this command is required before Git begins tracking and indexing.
- `git status` - Tells you the current state of the repository. For example, the command tells you:
  - If files need to be added.
  - If modifcations were made to a tracked file.
  - If a file was deleted.
- `git add` - This moves an untracked file from the `working directory` to the `index` where updates begin being tracked.
- `git commit` - Takes the added files and creates a new record for them, and updates the snapshot of the directory for future comparisons. This record is known as the `HEAD`.
- `git push` - This command takes the `Head` and pushes it to a web-based repository (such as Github).
- `git pull` - When working with a remote repo and part of a team that has multiple contributors, `git pull` is used to download any updates to the remote repo, and make those same updates to your local repository.

## Git Exercise

In this excercise, you will:

1. Create and initialize a local Git repo.
1. Create and modify new files.

### 1. Creating a Git Repository

As stated earlier, we will work from the Desktop for this tutorial.

1. Create a new project folder:

```
# Change terminal location to desktop
$ cd desktop
# Create a new project folder
$ mkdir new-git-repo
# Change terminal location to the new folder
$ cd new-git-repo
```

This takes you from your `/home` directory to the `home/desktop` directory, creates a new repository `<new-git-repo>`, and then changes your working directory to the new folder `home/desktop/new-git-repo` .

2. Check Git status

```
# This tells you the current status of the repo
$ git status
```

Since you have not initialized a Git repository, you will receive an error message (this is expected).

3. Initialize Git repository:

```
# This tells Git to begin indexing the folder and monitoring it for updates
$ git init
```

4. Check to be sure that Git is working

```
# This tells you the current status
$ git status
```

Since we have not created a file, the output is blank.

### 2. Adding Files to Git Repository

Before you can add a remote Github repository, you need to have at least one file in your `<new-git-repo>` repository.

1. Create a new file:

```
# The touch command creates a new file
$ touch notes.md
```

2. Check to make sure Git recognizes the new file:

```
# You should now see "notes.md" listed.
$ git status
```

3. Add the file so git can begin tracking the file:

```
$ git add notes.md
```

4. Commit the file to `HEAD`:

```
$ git commit -m "<enter descriptive message>"
```

Now that the repository contains a file, you can connect it to a remote repository.

### 3. Adding Github as a Remote Repository

If you have not created a [Github](https://github.com) account, do so now. Depending on your setup, you may also need to configure your [global settings](https://www.git-scm.com/book/en/v2/Customizing-Git-Git-Configuration).

1. From the Home Page of your Github account, click the **New** button.
1. Enter a name for the repo and then click _Create repository_.
1. Now you need to connect the local repository `<new-git-repo>` with the remote Github repository:

```
$ git remote add origin <url for remote repo>
$ git push - u origin master
```

### 4. Working with the Local and Remote Repositories

Now that the local repository `<git-new-repo>` is connected to your remote Github repository, you can `push` your content to a cloud-based storage location.

1. Open your text editor (Visual Studio Code, Atom, etc.).
2. Navigate to the desktop and open the `<new-git-repo>` folder.

   - If using Visual Studio Code, type **Cmd** + **o** to open finder.

You should now see the contents of the `<new-git-repo>`, which contains the blank `notes.md` file. If you edit the file by entering "Hello, World!" and save the file, Git will recognize that the file has changed.

To check this:

3. Navigat to your open terminal (be sure that your terminal is pointed to the `<new-git-repo>`) and run:

```
$ git status
```

4. `add` the modified file to the `index`:

```
$ git add notes.md
```

5. `commit` changes and update the `HEAD`:

```
$ git commit -m "<enter descriptive message>"
```

6. `push` changes to Github:

```
$ git push
```

That's it! Refresh your Github repository, then click on the `notes.md` file and you should see "Hello World!" displayed.

The process for creating, updating, and maintaining a repository genrally follows the flow in the exercise, and most of what is expected of technical writers in regards to Git and managing docs as code can be found in this post.
