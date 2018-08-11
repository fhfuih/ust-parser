# UST::parser

A simple navigation page for HKUST students

## Depencencies

- jQuery
- Semantic-ui (v2.3.1, higher versions break scrolling on mobile devices)

## Build

This project uses gulp to build distribution automatically.

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

which simply minifies everything and copy resources into a single folder `dist`.

## To-do

- [x] Search bar
- [x] Favicon
- [ ] Fully offline version (if possible)
- [ ] Put links and data inside a `yaml` and use some fancy build tools
- [ ] More links if needed

## Notes

In case of animation lagging (especially on mobile phone), use Chrome :see_no_evil:

## License

MIT
