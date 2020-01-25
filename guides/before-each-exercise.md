Before Each Exercise
--

When you are about to begin an exercise, make sure that your local files are up-to-date with any changes from the instructors. You'll be creating a new branch for each exercise that should include these changes.

If you get stuck while creating a new branch, be sure to notify an instructor right away.

1. In your terminal, navigate to your `lfz-mod-4-lessons` directory.
2. Check `git status` to ensure that you don't have any uncommitted changes. You should have nothing to commit and a **clean working tree before continuing**.
    ```bash
    git status
    ```
3. Check out the `master` branch.
    ```bash
    git checkout master
    ```
4. Pull any available updates from the upstream LearningFuze repository.
    ```bash
    git pull upstream master
    ```
5. Check out a new branch for the exercise. **The _real_ name of this new branch is the name of the exercise.**
    ```bash
    git checkout -b name-of-exercise
    ```
