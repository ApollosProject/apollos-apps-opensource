const ApollosConfig = require.requireActual('@apollosproject/config');

const defaults = {
  BIBLE_API: {
    KEY: '123asdfasdfasdf',
  },
};

ApollosConfig.default.loadJs(defaults);

class dataSource {
  constructor() {
    this.config = null;
    this.loadJs = this.loadJs.bind(this);
  }

  initialize({ context }) {
    if (context?.church?.slug) {
      const config = new ApollosConfig.Config();
      config.loadJs(defaults);
      this.config = config;
      this.attachConfigToClass(this.config);
    }
  }

  loadJs(input) {
    this.config.loadJs(input);
    this.attachConfigToClass(this.config);
  }

  attachConfigToClass(config) {
    Object.keys({ ...config }).forEach((key) => {
      if (key !== 'config') {
        Object.defineProperty(this, key, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: config[key],
        });
      }
    });
  }
}

export { dataSource };
export default ApollosConfig;
