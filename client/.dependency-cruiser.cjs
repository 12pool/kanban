/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    // Layers rules
    {
      name: 'layer-violation for shared',
      comment:
        'Code in the Shared layer is not allowed to import code from the entities, widgets, pages, or app layers.',
      severity: 'error',
      from: { path: '^src/shared' },
      to: { path: '^(?!src/shared)' },
    },
    {
      name: 'layer-violation for widgets',
      comment:
        'Code in the widgets layer is only allowed to import code from the entities layer.',
      severity: 'error',
      from: { path: '^src/widgets' },
      to: {
        path: '^src/(?!entities|ui|shared|widgets|routes)',
        pathNot: '^src/widgets/[^/]+$',
      },
    },
    {
      name: 'layer-violation for pages',
      comment:
        'Code in the pages layer is not allowed to import code from any layer other than the widgets layer and and itself.',
      severity: 'error',
      from: { path: '^src/pages' },
      to: { path: '^(?!src/pages|^src/widgets|^src/ui)' },
    },
    {
      name: 'layer-violation for app',
      comment:
        'Code in the app layer is not allowed to import code from any layer other than the pages layer and itself.',
      severity: 'error',
      from: { path: '^src/app' },
      to: { path: '^(?!src/pages|^src/app|^src/routes)' },
    },

    // Segment rules
    {
      name: 'segment-violation for ui',
      comment:
        'Code in the ui segment is not allowed to import code from any segment other than utils, model, or ui.',
      severity: 'error',
      from: { path: '^src/(entities|shared)/.*/ui' },
      to: { path: '^src/(?!.*utils|.*model|.*ui)' },
    },
    {
      name: 'segment-violation for feature',
      comment:
        'Code in the feature segment is not allowed to import code from any segment other than api, ui, model, or feature.',
      severity: 'error',
      from: { path: '^src/(entities|shared)/.*/feature' },
      to: { path: '^src/(?!.*api|.*ui|.*model|.*feature)' },
    },
    {
      name: 'segment-violation for api',
      comment:
        'Code in the api segment is not allowed to import code from any segment other than model or api.',
      severity: 'error',
      from: { path: '^src/(entities|shared)/.*/api' },
      to: { path: '^src/(?!.*model|.*api)' },
    },
    {
      name: 'segment-violation for model',
      comment:
        'Code in the model segment is not allowed to import code from any segment other than model.',
      severity: 'error',
      from: { path: '^src/(entities|shared)/.*/model' },
      to: { path: '^src/(?!.*model)' },
    },
    {
      name: 'segment-violation for utils',
      comment:
        'Code in the utils segment is not allowed to import code from any segment other than utils.',
      severity: 'error',
      from: { path: '^src/(entities|shared)/.*/utils' },
      to: { path: '^src/(?!.*utils)' },
    },

    // Allow all imports within the same layer
    {
      name: 'layer-allowance',
      comment: 'Allow imports within the same layer.',
      severity: 'info',
      from: { path: '^src/(entities|widgets)/([^/]+)' },
      to: { path: '^src/(entities|widgets)/([^/]+)' },
    },

    // Prevent imports between different objects within the same layer, except for its own index file
    {
      name: 'intra-object-allowance',
      comment:
        'An object within a layer (entities, widgets) is allowed to import code from its own index file.',
      severity: 'info',
      from: { path: '^src/(entities|widgets)/([^/]+)/.*' },
      to: { path: '^src/(entities|widgets)/\\2/.*' },
    },
    {
      name: 'object-violation',
      comment:
        'An object within a layer (entities, widgets) is not allowed to import code from another object within the same layer.',
      severity: 'error',
      from: { path: '^src/(entities|widgets)/([^/]+)/.*' },
      to: {
        path: '^src/(entities|widgets)/([^/]+)/[^/]+$',
        pathNot: '^src/(entities|widgets)/[^/]+/index\\.ts$',
      },
    },

    {
      name: 'no-circular',
      severity: 'error',
      comment:
        'This dependency is part of a circular relationship. You might want to revise ' +
        'your solution (i.e. use dependency inversion, make sure the modules have a single responsibility) ',
      from: {},
      to: {
        circular: true,
      },
    },
    {
      name: 'no-deprecated-core',
      comment:
        'A module depends on a node core module that has been deprecated. Find an alternative - these are ' +
        "bound to exist - node doesn't deprecate lightly.",
      severity: 'warn',
      from: {},
      to: {
        dependencyTypes: ['core'],
        path: [
          '^(v8/tools/codemap)$',
          '^(v8/tools/consarray)$',
          '^(v8/tools/csvparser)$',
          '^(v8/tools/logreader)$',
          '^(v8/tools/profile_view)$',
          '^(v8/tools/profile)$',
          '^(v8/tools/SourceMap)$',
          '^(v8/tools/splaytree)$',
          '^(v8/tools/tickprocessor-driver)$',
          '^(v8/tools/tickprocessor)$',
          '^(node-inspect/lib/_inspect)$',
          '^(node-inspect/lib/internal/inspect_client)$',
          '^(node-inspect/lib/internal/inspect_repl)$',
          '^(async_hooks)$',
          '^(punycode)$',
          '^(domain)$',
          '^(constants)$',
          '^(sys)$',
          '^(_linklist)$',
          '^(_stream_wrap)$',
        ],
      },
    },
    {
      name: 'not-to-deprecated',
      comment:
        'This module uses a (version of an) npm module that has been deprecated. Either upgrade to a later ' +
        'version of that module, or find an alternative. Deprecated modules are a security risk.',
      severity: 'warn',
      from: {},
      to: {
        dependencyTypes: ['deprecated'],
      },
    },
    {
      name: 'no-non-package-json',
      severity: 'error',
      comment:
        "This module depends on an npm package that isn't in the 'dependencies' section of your package.json. " +
        "That's problematic as the package either (1) won't be available on live (2 - worse) will be " +
        'available on live with an non-guaranteed version. Fix it by adding the package to the dependencies ' +
        'in your package.json.',
      from: {},
      to: {
        dependencyTypes: ['npm-no-pkg', 'npm-unknown'],
      },
    },
    {
      name: 'not-to-unresolvable',
      comment:
        "This module depends on a module that cannot be found ('resolved to disk'). If it's an npm " +
        'module: add it to your package.json. In all other cases you likely already know what to do.',
      severity: 'error',
      from: {},
      to: {
        couldNotResolve: true,
      },
    },
    {
      name: 'no-duplicate-dep-types',
      comment:
        "Likely this module depends on an external ('npm') package that occurs more than once " +
        'in your package.json i.e. bot as a devDependencies and in dependencies. This will cause ' +
        'maintenance problems later on.',
      severity: 'warn',
      from: {},
      to: {
        moreThanOneDependencyType: true,
        // as it's pretty common to have a type import be a type only import
        // _and_ (e.g.) a devDependency - don't consider type-only dependency
        // types for this rule
        dependencyTypesNot: ['type-only'],
      },
    },

    /* rules you might want to tweak for your specific situation: */

    {
      name: 'not-to-spec',
      comment:
        'This module depends on a spec (test) file. The sole responsibility of a spec file is to test code. ' +
        "If there's something in a spec that's of use to other modules, it doesn't have that single " +
        'responsibility anymore. Factor it out into (e.g.) a separate utility/ helper or a mock.',
      severity: 'error',
      from: {},
      to: {
        path: '[.](spec|test)[.](js|mjs|cjs|ts|ls|coffee|litcoffee|coffee[.]md)$',
      },
    },
    {
      name: 'not-to-dev-dep',
      severity: 'error',
      comment:
        "This module depends on an npm package from the 'devDependencies' section of your " +
        'package.json. It looks like something that ships to production, though. To prevent problems ' +
        "with npm packages that aren't there on production declare it (only!) in the 'dependencies'" +
        'section of your package.json. If this module is development only - add it to the ' +
        'from.pathNot re of the not-to-dev-dep rule in the dependency-cruiser configuration',
      from: {
        path: '^(src)',
        pathNot:
          '[.](spec|test)[.](js|mjs|cjs|ts|ls|coffee|litcoffee|coffee[.]md)$',
      },
      to: {
        dependencyTypes: ['npm-dev'],
        // type only dependencies are not a problem as they don't end up in the
        // production code or are ignored by the runtime.
        dependencyTypesNot: ['type-only'],
        pathNot: ['node_modules/@types/'],
      },
    },
    {
      name: 'optional-deps-used',
      severity: 'info',
      comment:
        'This module depends on an npm package that is declared as an optional dependency ' +
        "in your package.json. As this makes sense in limited situations only, it's flagged here. " +
        "If you're using an optional dependency here by design - add an exception to your" +
        'dependency-cruiser configuration.',
      from: {},
      to: {
        dependencyTypes: ['npm-optional'],
      },
    },
    {
      name: 'peer-deps-used',
      comment:
        'This module depends on an npm package that is declared as a peer dependency ' +
        'in your package.json. This makes sense if your package is e.g. a plugin, but in ' +
        'other cases - maybe not so much. If the use of a peer dependency is intentional ' +
        'add an exception to your dependency-cruiser configuration.',
      severity: 'warn',
      from: {},
      to: {
        dependencyTypes: ['npm-peer'],
      },
    },
  ],
  options: {
    doNotFollow: {
      path: 'node_modules|src/vite-env.d.ts',
    },
    tsPreCompilationDeps: true,
    tsConfig: {
      fileName: 'tsconfig.json',
    },
    enhancedResolveOptions: {
      exportsFields: ['exports'],
      conditionNames: ['import', 'require', 'node', 'default'],
      mainFields: ['module', 'main', 'types', 'typings'],
    },
    reporterOptions: {
      dot: {
        collapsePattern: 'node_modules/(@[^/]+/[^/]+|[^/]+)',
      },
      archi: {
        collapsePattern:
          '^(packages|src|lib|app|bin|test(s?)|spec(s?))/[^/]+|node_modules/(@[^/]+/[^/]+|[^/]+)',
      },
      text: {
        highlightFocused: true,
      },
    },
  },
};
