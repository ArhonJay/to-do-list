# To-Do List

Collaboration works by ComsciCuties :))

## Getting Started

To contribute to this project, follow these steps:

### 1. Fork the Repository

First, fork the repository on GitHub by clicking the "Fork" button on the repository page.

### 2. Clone the Forked Repository

Clone the forked repository to your local machine:

```sh
git clone <forked-repository-url>
```

Replace <forked-repository-url> with the URL of your forked repository.

### 3. Initialize Git

Navigate to the cloned directory and initialize Git:

```sh
cd to-do-list
git init
```

### 4. Modify `task.json` file

Open the `task.json` file and add your tasks in the following format:

```sh
[
  {
    "text": "Eat breakfast",
    "completed": false
  },
  {
    "text": "Sleep well",
    "completed": true
  },
  {
    "text": "Your new task here",
    "completed": false
  }
]
```

### 5. Add Changes

Add the changes to the staging area:

```sh
git add . 
```

### 6. Commit Changes

Commit the changes with a meaningful message:

```sh
git commit -m "Added new tasks to task.json"
```

### 7. Push Changes

Push the changes to your forked repository:

```sh
git push origin main
```

### 7. Create a Pull Request

Go to the original repository on GitHub and create a pull request from your forked repository. Provide a meaningful description of the changes you made.