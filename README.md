# New York Tech Zine Fair Website Repository

This is the New York Tech Zine Fair website repository. It uses [Jekyll](https://jekyllrb.com/) for content management and is deployed via [Github Pages](https://pages.github.com/).

### Contribution guidelines
1. [First time setup](#first-time-setup)
2. [Adding content to the blog locally](#adding-content-to-the-blog-locally)
3. [Pushing to the main repository](#pushing-to-the-main-repository) 
3. [Code structure](#code-structure)


## First time setup

### 1. Forking the repository
If you are planning on contributing to this website (new content for the blog, updates to the existing content, or code improvements,) start by creating a `Fork` of the repository under your own Github account. The `Fork` button is in the upper-right corner of the repository Github page.

The URL for the forked repository should look like this: `https://github.com/YOUR_GITHUB_USERNAME/ritughiya.github.io`. Once you have it, clone the repository locally, by running:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/ritughiya.github.io.git
```

The last step is to add the original repository as a remote, in order to be able to keep up to date with it. Go to the project directory and run:

```bash
git remote add upstream https://github.com/ritughiya/ritughiya.github.io.git
```

If you now run `git remote -v`, you should see 4 entries: two for your fork (`origin`), two for the original (`upstream`):
```
origin	git@github.com:YOUR_GITHUB_USERNAME/ritughiya.github.io.git (fetch)
origin	git@github.com:YOUR_GITHUB_USERNAME/ritughiya.github.io.git (push)
upstream	https://github.com/ritughiya/ritughiya.github.io (fetch)
upstream	https://github.com/ritughiya/ritughiya.github.io (push)
```


### 2. Getting the development environment set up

Follow the [Jekyll Installation Guide](https://jekyllrb.com/docs/installation/) in order to install Jekyll (and the Ruby dev environment) on your computer. 

Navigate to the project's main directory and install its dependencies by running `bundle install`.

You should now be ready to run the site locally. Execute `bundle exec jekyll serve`, and navigate to `127.0.0.1:4000` in your browser. 


## Adding content to the blog locally

Jekyll is meant for static, blog-aware websites and uses a combination of Markdown files for content, HTML files for templates & layouts, and CSS for styling. Adding a new blog post only involves creating and editing Markdown files. You can find a quick Markdown cheatsheet [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

All blogposts live under the `_posts` directory. The filename structure is `YEAR-MONTH-DAY-title.md` (e.g. `2018-11-27-in-conversation-with-wren-mcdonald.md`.) If you open an [existing post's .md file](https://raw.githubusercontent.com/CezarMocan/ritughiya.github.io/master/_posts/2018-11-27-in-conversation-with-wren-mcdonald.md), you will notice the following header:
```
---
layout: post
title:  "Wren McDonald on living in a cyberpunk world, zines as art objects and 90s nostalgia"
date:   2018-11-27 16:35:06 -0500
thumbnail: /assets/images/blog/wrenmcdonald1.jpg
author: "Neta Bomani"
---
```

The `layout: post` field should stay constant across all posts, as it instructs Jekyll to use the [blog post HTML template](https://github.com/ritughiya/ritughiya.github.io/blob/master/_layouts/post.html). All other fields will change from post to post. Make sure the image path in the `thumbnail` field matches exactly the name of the image under the `assets/images` folder. You can create any kind of subdirectory structure you want (e.g. one folder per blog post, etc.) This will be the image that appears on the [blog index page](http://techzinefair.org/blog).

Following the header is the content of the post, styled using Markdown syntax. We are currently using a small subset of it. The output of the examples here will look slightly different than the ones on the blog—in there, we're styling these components to respect the site design. But the Markdown syntax is the same.

1. Questions—bolded & italicized
```
*** bold & italic text ***
``` 
leads to

***bold & italic text***

2. Links
```
[This is a link to SP4RX](https://nobrow.net/shop/sp4rx/)
```
creates

[This is a link to SP4RX](https://nobrow.net/shop/sp4rx/).

3. Images
```
![This is the image alt-text](/assets/images/blog/wrenmcdonald1.jpg)
```
creates

![This is the image alt-text](/assets/images/blog/wrenmcdonald1.jpg)

4. Image captions
```
>Wren at the School of Visual Arts RisoLAB.
```
creates

>Wren at the School of Visual Arts RisoLAB. (*This one looks most different on the blog because of styling, but this is what we use to do image captions.*)

5. Section breaks
```
---
```

creates a section break (shorter, center-aligned line on the blog.)

---

You can use any other elements of the Markdown syntax, but there is a chance they will need custom styling. 

Once you add a new blogpost under this structure, it will show up in the list of posts at `localhost:4000/blog`, and its contents will be viewable when clicking on the post listing.

To learn more, check out the [oficial Jekyll documentation for blog posts](https://jekyllrb.com/docs/posts/).

## Pushing to the main repository
First of all, make sure to commit the changes you've made. In the main project directory, run: 

```
git add .
git commit -a -m "New blog post"
```

Now, we'll make sure our fork is up to date with the original repository by running:

```
git fetch upstream
git merge upstream/master
```

If everything went smoothly, run `git push origin master` in order to push the master branch of your fork to Github. 

The last step is to navigate to the Github page of your fork, and create a pull request to merge your changes into the original repository's master branch. (it's tiny, under the `Clone or download` green button.)
![PR](https://i.imgur.com/cf2vbeB.png)

Once you've created the pull request, Ritu or Taeyoon will review it, merge it into the main repository and deploy the blog updates to the live website. That's it!

## Code structure
