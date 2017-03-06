/**
 * mm-api-client
 * Money Mommy API Explorer.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: towyuan@outlook.com
 *
 * NOTE: This library is auto generated by the Open API Codegen program.
 * https://github.com/taoyuan/generator-oac.git
 * Do not edit the class manually.
 *
 */

const utils = require('./_utils');

/*jshint -W069 */
/**
 * @class Taobaoke
 * @alias module:api/Taobaoke
 * @param {Requestor} [requestor] - The project domain or options object. If object, see the object's optional properties.
 */
class Taobaoke {
  constructor(requestor) {
    this.requestor = requestor;
  }
  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @method
   * @path [POST] /Taobaokes
   * @name Taobaoke#create
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  create(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/Taobaokes';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @method
   * @path [PATCH] /Taobaokes
   * @name Taobaoke#patchOrCreate
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  patchOrCreate(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PATCH',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/Taobaokes';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace an existing model instance or insert a new one into the data source.
   *
   * @method
   * @path [PUT] /Taobaokes
   * @name Taobaoke#replaceOrCreate
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceOrCreate(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PUT',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/Taobaokes';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @method
   * @path [GET] /Taobaokes
   * @name Taobaoke#find
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @param {function} [cb] - Callback function
   */
  find(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      filter: opts['filter'],
    };

    const path = '/Taobaokes';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace an existing model instance or insert a new one into the data source.
   *
   * @method
   * @path [POST] /Taobaokes/replaceOrCreate
   * @name Taobaoke#replaceOrCreateViaPost
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceOrCreateViaPost(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/Taobaokes/replaceOrCreate';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * @method
   * @path [POST] /Taobaokes/upsertWithWhere
   * @name Taobaoke#upsertWithWhere
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {object} [opts.data] - An object of model property name/value pairs
   * @param {function} [cb] - Callback function
   */
  upsertWithWhere(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      where: opts['where'],
    };
    req.data = opts['data'];

    const path = '/Taobaokes/upsertWithWhere';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Check whether a model instance exists in the data source.
   *
   * @method
   * @path [GET] /Taobaokes/{id}/exists
   * @name Taobaoke#exists
   * @param {string} id - Model id
   * @param {function} [cb] - Callback function
   */
  exists(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling exists");
    }

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/Taobaokes/{id}/exists', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Check whether a model instance exists in the data source.
   *
   * @method
   * @path [HEAD] /Taobaokes/{id}
   * @name Taobaoke#existsViaHead
   * @param {string} id - Model id
   * @param {function} [cb] - Callback function
   */
  existsViaHead(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling existsViaHead");
    }

    const req = {
      method: 'HEAD',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/Taobaokes/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Find a model instance by {{id}} from the data source.
   *
   * @method
   * @path [GET] /Taobaokes/{id}
   * @name Taobaoke#findById
   * @param {string} id - Model id
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @param {function} [cb] - Callback function
   */
  findById(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling findById");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      filter: opts['filter'],
    };

    const path = utils.buildPath('/Taobaokes/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @method
   * @path [PUT] /Taobaokes/{id}
   * @name Taobaoke#replaceById
   * @param {string} id - Model id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceById(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling replaceById");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PUT',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = utils.buildPath('/Taobaokes/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Delete a model instance by {{id}} from the data source.
   *
   * @method
   * @path [DELETE] /Taobaokes/{id}
   * @name Taobaoke#deleteById
   * @param {string} id - Model id
   * @param {function} [cb] - Callback function
   */
  deleteById(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling deleteById");
    }

    const req = {
      method: 'DELETE',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/Taobaokes/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @method
   * @path [PATCH] /Taobaokes/{id}
   * @name Taobaoke#patchAttributes
   * @param {string} id - Taobaoke id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - An object of model property name/value pairs
   * @param {function} [cb] - Callback function
   */
  patchAttributes(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling patchAttributes");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PATCH',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = utils.buildPath('/Taobaokes/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @method
   * @path [POST] /Taobaokes/{id}/replace
   * @name Taobaoke#replaceByIdViaPost
   * @param {string} id - Model id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceByIdViaPost(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling replaceByIdViaPost");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = utils.buildPath('/Taobaokes/{id}/replace', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @method
   * @path [GET] /Taobaokes/findOne
   * @name Taobaoke#findOne
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @param {function} [cb] - Callback function
   */
  findOne(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      filter: opts['filter'],
    };

    const path = '/Taobaokes/findOne';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Update instances of the model matched by {{where}} from the data source.
   *
   * @method
   * @path [POST] /Taobaokes/update
   * @name Taobaoke#updateAll
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {object} [opts.data] - An object of model property name/value pairs
   * @param {function} [cb] - Callback function
   */
  updateAll(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      where: opts['where'],
    };
    req.data = opts['data'];

    const path = '/Taobaokes/update';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Count instances of the model matched by where from the data source.
   *
   * @method
   * @path [GET] /Taobaokes/count
   * @name Taobaoke#count
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {function} [cb] - Callback function
   */
  count(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      where: opts['where'],
    };

    const path = '/Taobaokes/count';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Create a change stream.
   *
   * @method
   * @path [POST] /Taobaokes/change-stream
   * @name Taobaoke#createChangeStreamViaPost
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.options] - options
   * @param {function} [cb] - Callback function
   */
  createChangeStreamViaPost(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.form = {
      options: opts['options'],
    };

    const path = '/Taobaokes/change-stream';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Create a change stream.
   *
   * @method
   * @path [GET] /Taobaokes/change-stream
   * @name Taobaoke#createChangeStream
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.options] - options
   * @param {function} [cb] - Callback function
   */
  createChangeStream(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      options: opts['options'],
    };

    const path = '/Taobaokes/change-stream';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * 汇报一条淘宝客数据
   *
   * @method
   * @path [PUT] /Taobaokes/report
   * @name Taobaoke#report
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.data] - data
   * @param {function} [cb] - Callback function
   */
  report(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PUT',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.form = {
      data: opts['data'],
    };

    const path = '/Taobaokes/report';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
}

module.exports = Taobaoke;