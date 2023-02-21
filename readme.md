# =nil; Foundation website

Deployed to [nil.foundation](https://nil.foundation) on GitHub Pages.


## Authoring content

The website is made with [Jekyll](https://jekyllrb.com),
which is a static site generator.
To conveniently build the blog on your machine you'll need Docker.
It's [available for download](https://docs.docker.com/get-docker/)
on any platform.

Jekyll can run in server mode where it constantly rebuilds the blog when 
source files change, and also serves in on localhost. It is convenient for
working on the content locally. Run the Jekyll server with:

```bash
docker compose up
```

On the first run, it will need to build an image with Jekyll and other
dependencies, which takes some time. Further on, it will start in seconds.

Now open the website at [localhost:22050](http://localhost:22050).

## Development

For development purposes, you can build the image yourself:

```bash
docker build \
  --platform=linux/amd64 \
   -t nilfoundation/jekyll-builder:main .
```

And then run `jekyll serve` or other command in it:

```bash
docker run --rm -it \
  --platform=linux/amd64 \
  -v "$(pwd):/srv/jekyll" \
  -p 22050:22050 \
  nilfoundation/jekyll-builder:main bash -c "jekyll serve --port 22050".
```

Docker images built for all Jekyll-based projects in `=nil;` share the same
name `nilfoundation/jekyll-builder`, but use different tags.
Port numbers are also unique to avoid clashes when working on several projects
in the same time.

Note that the running platform is explicitly fixed as `linux/amd64` in both
this readme and the docker-compose.yml file.
This is done to avoid portability issues on `linux/aarch64`,
like when running in Docker Desktop on Apple Silicon machines.
