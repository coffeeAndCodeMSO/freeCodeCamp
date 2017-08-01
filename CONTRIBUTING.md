# Contribution Guidelines

#### Got some stuff you want to push up?

`git clone` the repo
`git checkout -b branchname`

Replace branchname with the name of you branch, say ed-working, i.e. `git checkout -b ed-working`

This compresses two commands into one, it makes a new branch `git branch ed-working` and then moves to that branch with 
`git checkout ed-working`

Make sure you are working from your created branch with `git branch`

Go all edity and stuff, write code change files, everything you do is tracked by git.  Once you are done:
1. `git add -A` || `git add .`
2. `git commit -m "some commit message in strings"`
3. `git push origin branchname` <- your branch __not__ `master`
