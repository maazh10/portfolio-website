---
title: 'Blogging? The Why and The How ✨'
description: 'My first blog'
pubDate: 'Nov 17 2024'
heroImage: '/1/blog-1.jpg'
---

# Why?

If I'm ever lying awake in bed at night or sitting idle on my couch on a Sunday morning, there’s usually a lot of interesting thoughts or ideas going around in my mind. It might be a personal dilemma, a world issue, a problem I’m envisioning but can’t seem to find a breakthrough for, my next big project idea, or something else entirely.

There are times when I have found that sharing a thought with someone who might have an interest or an alternative perspective on it, helps spark an intellectual discussion. This often leads to better insights into the original thought, which I find beneficial. For this reason, I often refer back to recent ideas or thoughts when I’m conversing with a friend, family member, or a colleague.

I was never particularly big on writing when I was in school—I used to despise those long creative writing assignments in English class. But as I’ve grown older, I’ve learned to appreciate the written form of communication. I’ve found that I can organize and convey my thoughts much more coherently when I write compared to when I speak.  

Getting ideas out of my head and into written words also helps clear my mental space and gives me a new perspective. For example, when tackling a complex problem, instead of overwhelming my brain with information, I’ve found it helpful to write out the context, sketch possible approaches, or explain the issue to someone else. This technique has often led to breakthroughs for me in the past.  

I have a wide range of interests and an endless curiosity to learn and educate myself about new things. I also find joy in sharing knowledge with others in areas where I might have some expertise.  

Combining these goals with the spare time I occasionally find on weekends, I decided to start this blog. I want to use this space to share interesting thoughts, opinions, ideas, solutions—whatever comes to mind.  

I don't want this blog to be confined to any single topic. It could be technical or non-technical. I might write about some random interests of mine like photography or basketball, share anecdotes from a movie I watched recently, or even explore the lyrics of a song I love.  

The possibilities are endless, but my primary aim is simple:  
- To educate, inspire, or add value to even a single person’s life.  
- To use this platform as a way to explore new topics and educate myself on things I wouldn’t normally dive into.

<br><br>

# How?

Now onto the more interesting bit. As this is my first blog post, I thought it would be fitting to start off by writing about an interesting technical problem I had to solve to get this blog up and running.

As an aspiring web developer, I love some new technical challenges and keeping myself busy with fun projects and problems.

### Context

I developed and deployed a personal portfolio website a couple of months ago which lives on the domain https://maazh.tech. This website was a standard React app, but I had built a custom CI/CD pipeline to build and deploy the web app on a Google Cloud VM. I used GitHub Actions to automate the build and deploy process.

Here's a general overview of the Github Workflow I used for the portfolio website:
- Log into Docker Hub
- Build Portfolio Docker image
- Push the Docker image to Docker Hub
- SSH into Google Cloud VM
- Pull the latest Docker image
- Take down the existing container
- Run the new container

The run step was managed through a `docker-compose.yml` which used `nginx` as a reverse proxy to serve the React app and `nginx-acme` to handle SSL certificates. This is what the old `docker-compose.yml` looked like:

```yaml
services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ...
  nginx-proxy-acme:
    image: nginxproxy/acme-companion
    container_name: nginx-proxy-acme
    volumes:
      - ...
    environment:
      - ...
    depends_on:
      - nginx-proxy
    volumes_from:
      - nginx-proxy 
  app:
    image: ghcr.io/GHCR_USERNAME/app:latest
    container_name: app
    restart: always
    expose:
      - 80
    environment:
      - VIRTUAL_HOST=maazh.tech
      - LETSENCRYPT_HOST=maazh.tech
```

Now as I started thinking about starting a blog, the obvious choice was to just add a route to my React app and start writing. But it didn't sit right in my head to use a bloated React app to serve a blog and write my posts in `JSX`. So I did some digging and looked for some web frameworks that used static site generation and markdown files for blog posts. I settled on a framework called AstroJS for my use case after playing around with a few others.

### The Challenge
Since I had decided to use a completely separate framework for my blog, I still wanted this app to seamlessly integrate with my existing portfolio website i.e. I wanted to serve the blog on the same domain as my portfolio website, maybe under a `/blog` route link on the React app would take the user to the Astro app. This was mainly a devops heavy challenge and I started thinking about how I could achieve this.

### Naive Approach
The most naive approach I thought of was to have these apps live completely separate from each other, i.e. separate git repos, separate CI/CD pipelines, separate deployments, etc. Next, I could use a subdomain routing like `blog.maazh.tech` to route to the Astro app. But both functionally and aesthetically, I wasn't a fan of this approach and it quite literally twice as expensive to maintain, since I would have to pay for two separate VMs, maintain multiples repos and pipelines, etc. Ideally, I wanted a solution where both apps would live under my old git repo, share the same CI/CD pipeline, and be deployed on the same VM. This sounded a lot more complex for obvious reasons, since the entire devops pipeline would have to be restructured, but the end result would be a lot cleaner and more importantly cheaper!

### The Solution
So after some more thinking, research, talking to a friend, and bouncing back some ideas with ChatGPT, I discovered that this problem was easily solved using `nginx` reverse proxy by simply defining which container to route to based on the path.

So to start off, I created a skeleton Astro app in my existing git repo under a directory called `blog` and moved all the contents of my old React app except the (`docker-compose.yml` and `README`) to a `portfolio` folder. I also setup a `Dockerfile` for the new Astro app. The new folder structure looked like this:

```
.
├── portfolio
│   ├── public
│   ├── src
│   ├── ...
│   ├── Dockerfile
│   ├── package.json
│   ├── ...
├── blog
│   ├── public
│   ├── src
│   ├── ...
│   ├── Dockerfile
│   ├── package.json
│   ├── ...
├── docker-compose.yml
├── README.md
```

Now, all I had to do was to update the `docker-compose.yml` adding a new service for the `blog` app and the key was to add a `VIRTUAL_PATH` environment variable under this service which would be used by `nginx` to route to the correct container based on the path. The updated `docker-compose.yml` looked like this:

```yaml
services:

  nginx-proxy:
    ...

  nginx-proxy-acme:
    ...

  portfolio:
    image: ghcr.io/GHCR_USERNAME/portfolio:latest
    container_name: portfolio
    restart: always
    expose:
      - 80
    environment:
      - VIRTUAL_HOST=maazh.tech
      - LETSENCRYPT_HOST=maazh.tech

  blog:
    image: ghcr.io/GHCR_USERNAME/blog:latest
    container_name: blog
    restart: always
    expose:
      - 80
    environment:
      - VIRTUAL_HOST=maazh.tech
      - VIRTUAL_PATH=/blog
```

Finally, I just had to update the CI/CD pipeline to also build and push the `blog` image to Docker Hub. Thus the new workflow added 2 additional steps:
- Log into Docker Hub
- Build the Portfolio Docker image
- **Build the Blog Docker image**
- Push the Portfolio Docker image to Docker Hub
- **Push the Blog Docker image to Docker Hub**
- SSH into Google Cloud VM
- Pull the latest Docker image
- Take down the existing container
- Run the new container

And that's it! I now have a fully functional blog that lives under the same domain as my portfolio website. If you head over to [maazh.tech](https://maazh.tech), you will land at the same old portfolio website I had but if you go to [maazh.tech/blog](https://maazh.tech/blog), you'll see the new blog built with AstroJS. 

This was already a super fun experience for me and I can't wait to start writing more posts and sharing my thoughts on here 😊
