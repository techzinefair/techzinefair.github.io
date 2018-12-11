# New York Tech Zine Fair Website Repository

This is the New York Tech Zine Fair website repository. It uses [Jekyll](https://jekyllrb.com/) for content management and is deployed via [Github Pages](https://pages.github.com/).

### Contribution guidelines
1. [First time setup](#first-time-setup)
2. [Adding content to the blog](#adding-content-to-the-blog)
3. [Code structure](#code-structure)


## First time setup

### 1. Forking the repository
If you are planning on contributing to this website (new content for the blog, updates to the existing content, or code improvements,) start by creating a `Fork` of the repository under your own account. The `Fork` button is in the upper-right corner of the repository Github page.

The URL for the forked repository should look like this: `https://github.com/YOUR_GITHUB_USERNAME/ritughiya.github.io`. Once you have it, clone the repository locally, by running:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/ritughiya.github.io.git
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

The `layout: post` field should stay constant across all posts, it instructs Jekyll to use the [blog post HTML template](https://github.com/ritughiya/ritughiya.github.io/blob/master/_layouts/post.html). All other fields will change from post to post. Make sure the image path in the `thumbnail` field matches exactly the name of the image under the `assets` folder. You can create any kind of subdirectory structure you want (e.g. one folder per blog post, etc.) 

## Pushing new content to the main repository

## Code structure
