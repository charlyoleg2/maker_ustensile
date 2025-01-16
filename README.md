maker\_ustensile
================


Presentation
------------

This repo is a maker-repository. It stores the parameters and the STL-files of some *ustensile-s*.
This repo uses the javascript packages [desi82-cli](https://www.npmjs.com/package/desi82-cli) and [desi82-uis](https://www.npmjs.com/package/desi82-uis) of the design-library [desi82](https://charlyoleg2.github.io/parame82/).


Requirements
------------

- [node](https://nodejs.org) > 22.00.0
- [npm](https://docs.npmjs.com/cli) > 11.0.0


### Optional requirements

- [OpenSCAD](https://openscad.org/)

For Ubuntu users, *OpenSCAD* is available on [snapcraft](https://snapcraft.io/openscad) and can be installed with:

```bash
sudo snap install openscad
```

Upgrade
-------

For working with the latest *desi82* version:

```bash
npm outdated
npm update --save
git commit -am 'npm update --save'
```


Dev
---

```bash
git clone https://github.com/charlyoleg2/maker_ustensile
cd maker_ustensile
npm install
npm run
npm run desi82-uis
npx desi82-uis
npx desi82-cli --help
./make_parts.js
```

Vocabulary
----------

- Design: A parametrizable 3D parts. Desginix is a collection of designs.
- Part or Reference: A particular parametrization of a design.
- Instance: The realization of a reference.


References for the maker\_ustensile
-----------------------------------

ID | Reference           | Design             | Nb of instances
---|---------------------|--------------------|----------------
1  | doorstop            | doorstop           | 1
2  | pencil\_holder      | pencil\_holder     | 1
3  | spiral\_B           | spiral             | 1
4  | spiral\_C           | spiral             | 1
5  | spiral\_D           | spiral             | 1
6  | lettreL             | lettreL            | 1
7  | surface\_B          | surface            | 1
8  | surface\_C          | surface            | 1
9  | surface\_D          | surface            | 1
10 | surface\_E          | surface            | 1
11 | gear\_wheel\_B      | gear\_wheel        | 1

Each reference has its own directory with its json-parametrization, scad-script and stl-file.


