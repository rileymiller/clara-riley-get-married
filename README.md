## Welcome
Here is the repo that Clara and I used to create our wedding site, hosted [here](https://clarasallriledup.com). We made use of Gatsby, Typescript, Styled Components, Emotion, and
a small Serverless stack run on AWS to record RSVP responses.

Some of the small UI tricks that were implemented to spruce up the site include:
* An implementation of [Josh Comeau's React Sparkle component](https://www.joshwcomeau.com/react/animated-sparkles-in-react/) featured throughout the site.
* A small countdown feature on the home page to show how many days were left until the wedding
* SVGs Animations on the [Save The Date](https://www.clarasallriledup.com/save-the-date/) page.

## Getting Started

Make sure you have `node` installed.


**Install Dependencies**
```
yarn
```

**Start Local Stack**
To start the local stack run:

```
yarn dev
```

and you should see the site running at [http://localhost:8000](http://localhost:8000)

## CI
Using GitHub Actions to deploy the site to an S3 bucket configured with Cloudfront for the CDN. Here's the link to our [workflow](https://github.com/rileymiller/clara-riley-get-married/blob/master/.github/workflows/main.yml).

## Hosting
Went through Google Domains to purchase [https://clarasallriledup.com](https://clarasallriledup.com).

We deploy our site to an S3 Bucket with a Cloudfront Configuration.

Here's a [link](https://www.rileymiller.dev/gatsby/deploy-gatsby-s3-gh-actions/#git-repo-on-github) to a blog I wrote with some steps on how to setup a Gatsby site to deploy to S3 via GitHub actions.