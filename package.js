Package.describe({
  name: 'mgn:nconf',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'nconf packaged for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:managination/mgn-nconf.git',
  // Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
              "nconf": "0.7.1"
            });

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('mgn:nconf.js', 'server');
  api.export("nconf", "server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mgn:nconf');
  api.addFiles('mgn:nconf-tests.js');
});
