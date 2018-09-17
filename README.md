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

## Github-less files

Direct building from the source will produce a similar page to my product but with following content trimmed. You can manually add entries in corresponding `.yaml` or content in `.nunjucks` files.

- Links in the "Link exchange" modal. Data of which are in `src/template/friends.yaml`
- Site information. Data of which are in `src/template/site.yaml`
- External services like Google Analytics. Snippets of which are in dedicated files in `src/template/services/`. For example, `google_analytics.nunjucks`

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
