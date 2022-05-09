const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Adrian Gabardo',
  authorAddress: 'adrian.gabardo@argenti.com.au',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@adriangabardo/projen-poc',
  repositoryUrl: 'git@github.com:adriangabardo/projen-poc.git',
  mutableBuild: true,
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmAccess: NpmAccess.RESTRICTED,
  publishToNuget: {
    dotNetNamespace: 'adriangabardo.projen.poc',
    packageId: 'projen.poc',
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.release.publisher.publishToNuget({
  nugetApiKeySecret: 'NPM_TOKEN',
});

project.synth();
