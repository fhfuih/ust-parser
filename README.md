# UST::parser

A simple navigation page for HKUST students

## Front-end Libraries

- jQuery
- Semantic-ui (v2.3.1, higher versions break scrolling on mobile devices)

CDNJS is used

## Build

This project uses nunjucks and gulp to build distribution automatically.

Clone the project to your computer

```
git clone https://github.com/fhfuih/ust-parser.git
cd ust-parser
```

Install node.js and install dependencies by

```
npm install
```

Then you can build distributions by

```
gulp
```

which loads data, minifies everything and copies resources into the folder `dist`.

## Templating

Upon using nunjucks template engine, you can easily add/remove entries by editing `src/template/data.yaml`, without touching any HTML/CSS/JS codes. Documentation is written at the top of the file.

## To-do

- [x] Search bar
- [x] Favicon
- [ ] Fully offline version (if possible)
- [x] Put links and data inside a `yaml` and use some fancy build tools
- [ ] More links if needed

## Notes

In case of animation lagging (especially on mobile phone), use Chrome :see_no_evil:

## License

MIT
