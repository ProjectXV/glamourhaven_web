<!-- omit in toc -->

#### Contribution Guidelines

So here is a run down of how you would go about contributing:

- #### Fork your own copy of the Repository

  The first thing you will want to do is fork [this](https://github.com/ProjectXV/glamourhaven_web) repository

- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) the glamourhaven_web on your profile, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the link of your own GlobalHaven repository (the one you forked) by clicking on the green Code button.
  - Open the folder you want to work on your machine.
  - Open your favourite editor.
  - Open the terminal.
  - run `git clone [Link to your copy of the GlamourHaven repository]`.
    > The link should look like this : `https://github.com/<your username>/glamourhaven_web.git`

- #### Configure the upstream

  Now that you have the local copy of glamourhaven_web. There are a lot of developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

  - copy this link here `https://github.com/ProjectXV/glamourhaven_web.git`
  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/ProjectXV/glamourhaven_web.git`

  - #### Commiting your changes

  Now, you can start making changes and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup button component`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages, referencing your issue number with a close action.
    > e.g `git commit -m "adds signup button to the sign up page close #21"`
    >
    > What this mean is that, when your pull request is merged, Issue #21 is automatically closed.
  - run `git push origin [name of the repo you created]`
    > For the example above, you run
    >
    > `git push origin feat/signup`
    >
    > Which pushes your changes to your online copy, after which you then open a pull request.

- #### Opening Pull requests

    To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on your own copy of the glamourhaven_web repository.
  - You will see the option to open a pull request.
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  - Add comments where neccesary 

- #### Constantly update from upstream

  Now that you have your issues, you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid merge conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream dev`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

## Styleguides

We advocate for clean code and well structured codes. 
<!-- It is easier said than done, which is why there are linting configurations set up in the repository. -->
Endeavour to keep the code you write clean and maintainable. Software is not only a science, but also an art.
This is a link to the [figma](https://www.figma.com/file/c4tvjreesreb0W88mCR7pu/GlamourHaven-UI-Design?node-id=1%3A3) file as a guide for the UI design and functionalities of the application

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. 

Let's build this awesome application, shall we ?🎉

## Other Information

<!-- - Check if there are any linting errors by running `yarn check-format` before commiting your code. -->
- Please make sure your commit messages and pr titles give enough info about the changes you've made.

- ### Pull Requests

  - Take note of all instructions above
  - The main branch for development would be the **DEV** branch
  - Do not make a pull request with changes to the main branch
  - Create a branch in the format...Feat/(Task) e.g Feat/ Button Component and implement your work only in such branch
  - Whatever task it is that you do must be responsive on all screens
  - Make sure your commit messages and PR title are precise and meaningful, no..."it is now working" or "finally" commit messages
  - Add a screenshot of what it is that you've worked on for all screens...mobile, tab, desktop screens
  - Make sure your branch is up to date with the main branch and without conflicts before making your pull request.
  - Push your code as soon as you can [ASAP]
  - In the comment section of the pull request, document your work thoroughly(a helpful description)
  - Do `git fetch` at least twice a day to be up to date with the repo
  - Always do a git fetch or pull of the dev branch before you write code and before making your pull request
  - Your pull request must not change the work of others
  - Your work should be pixel perfect
