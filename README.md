# Electron Development Kit

Easily Test, Build and Distribute Electron Apps.

### Installation
- Install the dependencies.
[Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are required.

```sh
npm install
# Use -g for global use from CLI
npm install electron-packager -g
# electron-packager is recommended globally.
npm install electron-prebuilt -g
# electron-prebuilt is required globally.
npm install electron-packager-interactive -g
# electron-packager-interactive is required globally to use 'npm run build:options'
```

##### This will install the following:
- [electron-prebuilt](https://www.npmjs.com/package/electron-prebuilt) - "Install electron prebuilt binaries for the command-line use using NPM."
- [electron-packager](https://www.npmjs.com/package/electron-packager) - "Package and distribute your Electron app with OS-specific bundles (.app, .exe etc) via JS or CLI."
- [electron-packager-interactive](https://github.com/Urucas/electron-packager-interactive) - "An interactive implementation of [electron-packager](https://www.npmjs.com/package/electron-packager)."
- [electron-builder](https://www.npmjs.com/package/electron-builder) - "Complete solution to build ready for distribution and 'auto update' Electron App installers."
  - [electron-builder Options](https://github.com/electron-userland/electron-builder/wiki/Options) - "Custom options for the installers."

---

### Open Electron App
This will open in a temporary Electron app.

```sh
npm run open
```

> This will not create/save any .app or .exe files, it will just open your Electron file in a preview electron app.

---
### Exporting for Windows & OSX
This will save your .app or .exe files into /dist/

```sh
npm run build [app name]
```

> Remember: This will automatically overwrite your previous build files if they have the same folder name.

You can also run the following for build options that utilizes the [electron-packager-interactive](https://github.com/electron-userland/electron-packager) module.

```sh
npm run build:options
```

> Be aware that electron-packager-interactive defaults to is an older version of Electron when exporting.


---
### Creating an Installer
This will save .app, .zip (of .app) & .dmg installers into /dist/

```sh
npm run dist
```

> Right now, you can only build Windows .exe files on Windows machines, and OSX .app / .dmg files from OSX machines. It's possible to do both from one platform, but [requires some reworking of electron-builder](https://discuss.atom.io/t/creating-windows-installer-on-mac/22004/4).

---

### Required Images/Icons

Be sure to look at the package.json file to see the required icons/images for building/distributing.
* build/icon.icns
* build/loading.gif
* build/background.jpg

> For example, on OSX, you cannot create a DMG with electron-builder without having a background image stored in your 'build' folder.

---

### Learning More About Electron
Be aware that some resources may be out of date, but the concepts remain the same.
* [Packaging and Distributing Electron Desktop Apps](https://www.youtube.com/watch?v=dz5SnmBzBXc)
* [Nativefier](https://github.com/jiahaog/nativefier) - Wrap any web page natively without even thinking, into multi-platform apps.
* [Awesome Electron](https://github.com/sindresorhus/awesome-electron) - A great resource for tons of Electron projects.
* [Nylas/N1](https://github.com/nylas/n1) - One of the more popular apps build with Electron.
* [Electron.Rocks](http://electron.rocks) - A frequently updated blog on all things Electron.
