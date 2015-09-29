Package.describe({
  name: "okgrow:package-linter",
  summary: "Linting your package.js files since Meteor 1.1",
  version: "0.2.0",
  git: "https://github.com/okgrow/meteor-package-linter"
});

Package.onUse(function(api) {
  // Meteor releases below this version are not supported
  api.versionsFrom("1.2.0.2");

  // Core packages and 3rd party packages
  api.use("ddp");
  api.use("tracker");
  api.use("promise");


  // The files of this package
  api.addFiles("server/packageModel.js", ["server"]);
  api.addFiles("server/latestVersions.js", ["server"]);
  api.addFiles("server/linter.js", ["server"]);
  api.addFiles("server/methods.js", ["server"]);


  // The variables that become global for users of your package
  api.export("PackageLinter", ["server"]);
  api.export("PackageModel", ["server"]);
});


Npm.depends({
  "localeval": "15.2.3",
  "ddp": "0.11.0",
  "latest-version": "1.0.0",
  "semver": "5.0.3"
});


Package.onTest(function (api) {
  api.use("tinytest");
  api.use("grigio:babel");
  api.use("okgrow:package-linter");
  api.addFiles("tests/server/index.es6", ["server"]);
  api.addFiles("tests/server/latestVersion.es6", ["server"]);
});

/* Generated by okgrow:package-builder */
