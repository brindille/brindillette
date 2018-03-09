# brindillette

This is an experimental serverless version of [brindille](https://github.com/brindille/brindille). It's meant to be used for really simple pages with no routing or templating (for now).

It uses:
- [stylus](http://learnboost.github.io/stylus/)
- [babel](https://babeljs.io/)
- [browserify](http://browserify.org/)
- [browsersync](http://browsersync.io/)

## Install

Clone this repository and install the dependencies

```bash
git clone https://github.com/brindille/brindillette.git ./my-project
cd my-project
rm -rf ./.git
npm install
```

## File structure

Organise your files in a component structure: JavaScript and styles for a component should be in the same folder. (ex: `/src/layouts/header`.)
Then, they will be build in the `/build` folder.

Images, fonts and other assets have to be in the `/assets/{images,fonts}` folders.


## Ressources

- [Component documentation](https://github.com/brindille/brindille-component/blob/master/README.md)
- [Full brindille boilerplate](https://github.com/brindille/brindille)
- [Other brindille modules](https://github.com/brindille)

## Tasks

### Dev

Builds CSS & JS files and launches browsersync

```bash
npm start
```

### Production

Build the files and minify them.

```bash
npm run build
```

## License

MIT
