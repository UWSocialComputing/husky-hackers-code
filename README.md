# husky-hackers-code

## Backend Setup
1. If you don’t have Python installed, [install it from here](https://www.python.org/downloads/)

2. If you don't have conda installed, [install it from here](https://conda.io/projects/conda/en/stable/user-guide/install/download.html)

3. Clone this repository

4. Navigate into the project directory

   ```bash
   $ cd husky-hackers-code
   ```

5. Create a conda environment

   ```bash
   $ conda create --name dublease python=3.10
   $ conda activate dublease
   ```

6. Install the requirements from requirements.txt

   ```bash
   $ pip install -r backend/requirements.txt
   ```

7. Make a copy of the example environment variables

   ```bash
   $ cp .env.example .env
   ```

8. Add your MongoDB username and password to the newly created .env file

9. Setup the database using the following commands: 

   ```bash
   $ brew tap mongodb/brew
   $ brew install mongodb-community
   $ brew services start mongodb-community
   $ python backend/db.py
   ```

10. Run the API

   ```bash
   $ python3 backend/app.py
   ```

## Frontend Setup
1.  Navigate into the frontend project directory

   ```bash
   $ cd husky-hackers-code/frontend/dublease
   ```

2. If you haven't installed Next.js yet, you can install it locally in your project using npm

    ```bash
    npm install next
    ```

3. Install any dependencies

    ```bash
    npm i
    ```

4. Run the development server

    ```bash
    npm run dev
    ```
5. Access the development server at [http://localhost:3000](http://localhost:3000)
