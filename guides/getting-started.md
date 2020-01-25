Getting Started
--

To get started, you'll be creating a fork of the `Learning-Fuze/lfz-mod-4-lessons` repository and cloning **the fork** to your local machine.

### Fork the Repository on GitHub

Visit the [`Learning-Fuze/lfz-mod-4-lessons`](https://github.com/Learning-Fuze/lfz-mod-4-lessons) GitHub repository and click the **Fork** button. GitHub will create a copy of the repository under your own account.

### Clone Your Fork from GitHub

1. In your terminal, navigate to your `lfz/` directory.
2. Visit your fork of the `lfz-mod-4-lessons` repository on GitHub and copy its URL.
3. Use `git clone` to clone your fork into your local `lfz` directory.

### Add the LearningFuze Upstream Repository

Occasionally, updates to these lessons will be made available by instructors. Adding the original `Learning-Fuze/lfz-mod-4-lessons` to your local repo's remotes will make receiving the updates easy.

1. In your terminal, navigate to your `lfz-mod-4-lessons` repository.
2. Run the following command to add the original `Learning-Fuze/lfz-mod-4-lessons` as a remote repository named `upstream`.
    ```bash
    git remote add upstream https://github.com/Learning-Fuze/lfz-mod-4-lessons
    ```
3. Run the following command to confirm that `upstream` was added to your local repository.
    ```bash
    git remote -v
    ```

It should print out two remote repositories like so:

```
origin	https://github.com/your-username/lfz-mod-4-lessons.git (fetch)
origin	https://github.com/your-username/lfz-mod-4-lessons.git (push)
upstream	https://github.com/Learning-Fuze/lfz-mod-4-lessons.git (fetch)
upstream	https://github.com/Learning-Fuze/lfz-mod-4-lessons.git (push)
```

### Install JavaScript Dependencies.

Some exercises use Node.js to check your code before you turn them in. Run the following command in the root of your `lfz-mod-4-lessons` directory:

```bash
npm install
```

### Done!

You are ready to go! The instructors will let you know which exercise to start with.
