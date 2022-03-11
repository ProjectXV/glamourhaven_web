# GlamourHaven
A web application that aims at making booking of appointments to salons easier.

## Technologies
### Frontend Technologies
| Technology | Details |
| -------- | ----------- |
| `React` | .....|
| `NodeJs` | ..... |
| `Chakra UI` | ..... |
| `Redux` | ..... |
| `Vite` | v2.6.8 |

### Backend Technologies
| Technology | Details |
| -------- | ----------- |
| `Django` | .....|
| `Python` | ..... |

## Getting Started.

# Contributing to The Project
 - Refer to this [guide](docs/CONTRIBUTING.md) if it is your first time contributing to get step by step instructions on how to clone and fork this repo in preparation for        contributing.
 - For detailed information on how to go about the design and style guide to this project. Check out the [Styling Guide](docs/STYLING.md)

##Environment Setup

Linting has been set up for staged commits in the repository. We're using eslint for js linting, and prettier for code formating. 
Please make it a point to install eslint and prettier plugins on vscode to aid in your coding process.
Your code has to be properly formatted and have the correct syntax for you to be able to commit your changes. Make sure you attend to all warnings and errors before you commit your code

## Setting up the Frontend
 - Open `Git Bash` terminal inside root project folder
 - cd into the frontend folder by typing 

 ```bash
 cd client
 ```
 
 - Make sure you have nodejs installed by running the following command:

  ```bash
  node -v
  ```

 - If the output is not the version of your nodejs installation, install nodejs from [here](https://nodejs.org/en/download/)

 - After ensuring you've installed nodejs install [yarn](https://www.npmjs.com/package/yarn).if you have it then install the project's dependencies:

  ```bash
  yarn install
  ```
  
 - To install dependencies, run the following command:
 
     ```bash
    yarn install
    ```
    
## STARTING THE SERVER

 - To start the whole application server

  ```bash
  yarn dev
  ```

 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 - You're all set😌
 - Happy coding😁

### **Building**

```bash
yarn build
```

 - To remove dist folder

  ```bash
  yarn clean
  ```

 - To remove all node_modules

  ```bash
  yarn clean-fresh
  ```

## Things to note as you contribute
 - Always run `yarn` after pulling code from the upstream repository.
 - Always, **Always** make pull requests to the **dev** branch, not the main branch. All pull requests to the main branch will not be merged.
 - Please, always test your code and make sure it works correctly before making a pull request
 - Run `yarn format` to format your code before you commit
 - Run `yarn lint` to lint all files in the frontend project directory
