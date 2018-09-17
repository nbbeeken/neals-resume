# Neal's Resume

### Building
To build run the following command:

```sh
npm run build
```

To watch and live edit run the following command:

```sh
npm run watch
```

> Note: this only watches pug files
> changes to css or data files requires restart

To "watch" all files use this hack:
```bash
while true; do sleep 4; npm run build; done
```

```fish
while true
    sleep 4
    npm run build
end
```

### Structure

You can find the projects and experience content in `src/data/projects.js` and `src/data/experience.js`. The render in the order declared in the js array.

CSS modifications should only be made in `src/styles/neal.css`

Html structure is in `.pug` files in `src/sections` which are included into `src/index.pug`.
