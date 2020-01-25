After Each Exercise
--

When you have completed an exercise you'll want to send your solution to the instructors for review.

### Commit and Push to GitHub

To turn in your solution, you'll commit your changes, push them to GitHub, and submit a Pull Request. If you get stuck while committing or pushing your work, be sure to notify an instructor right away.

1. In your terminal, navigate to **the root** of your `lfz-mod-4-lessons` directory. You can verify your current location with the `pwd` command. It should output:
    ```bash
    /home/dev/lfz/lfz-mod-4-lessons
    ```
1. Check your local repository for **unstaged** changes.
    ```bash
    git status
    ```
1. Stage the exercise you'd like to commit.
    ```bash
    git add exercises/example-exercise
    ```
1. Check the **staged** changes before committing.
    ```bash
    git status
    ```
1. Commit the changes with a meaningful message.
    ```bash
    git commit -m "Completed example exercise."
    ```
1. Push the new commit(s) to your fork of `lfz-mod-4-lessons` on GitHub. **The _real_ name of this new branch is the name of the exercise.**
    ```bash
    git push origin example-exercise
    ```

### Open a Pull Request on GitHub

Now that your solution has been uploaded to GitHub, it's time to notify the instructors by submitting a Pull Request. If you get stuck while opening a Pull Request, be sure to notify an instructor right away.

1. Visit your fork of the `lfz-mod-4-lessons` repository on GitHub and click the **Pull Requests** tab.
1. In the **Pull Requests** tab, click the **New Pull Request** button.
1. Configure the Pull Request:
    - Select **`Learning-Fuze/lfz-mod-4-lessons`** as the `base` repository.
    - Select **`student-reviews`** as the `base` branch.
    - Select your fork as the `head` repository.
        > For example, if your GitHub username is **ltorvalds**, then your `head` repository is **`ltorvalds/lfz-mod-4-lessons`**.
    - Select your exercise branch as the `compare` branch.
        > For example, if the exercise you are completing is named **`example-lesson`**, then your `compare` branch is **`example-lesson`**.
1. Click the **Create Pull Request** button and give your Pull Request a title that makes it easy to identify who it's from and what it's for.
    > For example, if your full name is **Linus Torvalds** and the exercise is named **Example Exercise**, then your Pull Request title should be **Example Exercise | Linus Torvalds**.
1. Click the **Create Pull Request** button. Done!
