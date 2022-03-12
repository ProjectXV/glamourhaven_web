# GlamourHaven
A web application that aims at making booking of appointments to salons easier.

# Technologies
## Frontend Technologies
| Technology | Version | Use |
| -------- | ----------- | ------------- |
| `JavaScript` | ... | Programming Language |
| `React` | v17.0.2 | Frontend Framework |
| `NodeJs` | > v14 | Environment |
| `Chakra UI` | v1.8.6 | UI library |
| `Redux JS Toolkit` | v1.8.0 | State management |
| `Vite` | v2.6.8 | Code Bundler |

## Backend Technologies
| Technology | Version | Use |
| -------- | ----------- | ---------- |
| `Django` | v4.3 | Backend Framework |
| `Python` | v3.10 | Programing Language |
| `DJANGO REST FRAMEWORK` | ... | Framework for building APIs |

# Contributing to The Project
 - For detailed information on how to go about contributing to this project, refer to this [guide](docs/CONTRIBUTING.md) to get step by step instructions on how to clone and fork this repo in preparation for contributing
 - For detailed information on how to go about the design and style guide to this project. Check out the [Styling Guide](docs/STYLING.md)
 - For detailed information on the backend API endpoints, refer to this [documentation](docs/APIs.md)

# Setting up the Frontend

## Environment Setup

 - Linting has been set up for staged commits in the repository.
 - We're using `eslint` for js linting, and `prettier` for code formating. 
 - Please make it a point to install `eslint` and `prettier` plugins on vscode to aid in your coding process.
 - Your code has to be properly formatted and have the correct syntax for you to be able to commit your changes. 
 - Make sure you attend to all warnings and errors before you commit your code

## Getting Started.
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
 - After ensuring you've installed nodejs install [yarn](https://www.npmjs.com/package/yarn).
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
 - You're all set. Happy coding😁

### **Building**

```bash
yarn build
```

To remove dist folder

 ```bash
 yarn clean
 ```

To remove all node_modules

 ```bash
 yarn clean-fresh
 ```

## Things to note as you contribute
 - Any page you code has to be responsive.
 - Write clear and concise commit messages.
 - Always run `yarn` after pulling code from the upstream repository.
 - Always, **Always** make pull requests to the **dev** branch, not the main branch. All pull requests to the main branch will not be merged.
 - Please, always test your code and make sure it works correctly before making a pull request
 - Run `yarn format` to format your code before you commit
 - Run `yarn lint` to lint all files in the frontend project directory

# Setting up Backend
instructions on how to run the backend server:

 - open the project folder (Glamourhaven/backend) in `vs code` or `cmd terminal` on your local machine
 - if you are using vscode open the vscode terminal

 - run this command to install a virtual environment:
      ```bash
      virtualenv venv
      ```

 - Activate the virtual environment from the directory you have installed the `venv`, in our case the current directory
 - For Linux:
      ```bash
      . venv/bin/activate 
      ```
      
  - For Windows OS:
  
      ```bash
      . venv/scripts/activate 
      ```    

  - create a `.env` file in the settings folder and add:
    ```bash
      SECRET_KEY=django-insecure-2_qc*r!+#jy8b(r1603zbbu(bmcqp6@0g#lr-v*zj0wykcu$c6
      EMAIL_HOST_USER=glamourhavens@gmail.com
      EMAIL_HOST_PASSWORD=zreehnpyewwxozrp
    ```
    then save

 - run the following command to install `django` in your virtual environment
 
   ```bash
   pip install django 
   ```
   
  (might say requirement satisfied)
      
- while in the backend directory, run the following command to install all necessary packages

   ```bash
   pip install -r requirements.txt 
   ```
   
 - remember to run migrations as below after installing them
 
   ```bash
   python manage.py makemigrations 
   ```   

 - next run the commands below to migrate models to the database
 
   ```bash
   python manage.py migrate 
   ```

 - next command will run the server
  ```bash
   python manage.py runserver
   ```
 - You're all set and ready to code😁
