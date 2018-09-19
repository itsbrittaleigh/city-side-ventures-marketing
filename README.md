# cityside-ventures

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Edit content

Access `yourwebsite.com/admin`, e.g. `localhost:3000/admin`.

## Manage dynamic routes

When you use Netlify CMS' `folder` type, you actually create dynamic routes. For example, when creating a blog, you render different content files with the same template. And for the blog to know which content to render, it looks at the url and gets the specific content file. That's a dynamic route.

So if you create a `folder` type with Netlify CMS, add the folder as glob to the `dynamicRoutes` variable in the `nuxt.config.js`.

## Deploys

Deploys are triggered automatically for the live site when pushing to `master`.

The development branch can be accessed at [here](https://development.citysideventures.com). Deploys to development are automatically triggered when pushing to `development`.
