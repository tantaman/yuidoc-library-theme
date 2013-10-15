var util = require('util');

function extend(obj, value) {
  for(var key in value) {
    if(value.hasOwnProperty(key)) {
      obj[key] = value[key];
    }
  }
}

var createFrame = function(object) {
  var obj = {};
  extend(obj, object);
  return obj;
}

function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

module.exports = {
    eachthat: function(arr, prop, value, options) {
        var fn = options.fn, inverse = options.inverse;
        var context = arr;
        var i = 0, ret = "", data;

        // if (isFunction(context)) { context = context.call(this); }

        if (options.data) {
          data = createFrame(options.data);
        }

        if(context && typeof context === 'object') {
          if (context instanceof Array) {
            for(var j = context.length; i<j; i++) {
                if (context[i][prop] != value)
                    continue;
              if (data) {
                data.index = i;
                data.first = (i === 0)
                data.last  = (i === (context.length-1));
              }
              ret = ret + fn(context[i], { data: data });
            }
          } else {
            for(var key in context) {
              if(context.hasOwnProperty(key)) {
                if (context[key][prop] != value)
                    continue;
                if(data) { data.key = key; }
                ret = ret + fn(context[key], {data: data});
                i++;
              }
            }
          }
        }

        if(i === 0){
          ret = inverse(this);
        }

        return ret;
    },

    stripTag: function(str) {
        if (!str) return '';
        var start = str.indexOf('>');
        var end = str.lastIndexOf('<');

        return new SafeString(str.substring(start+1, end));
    },

    acronym: function(camel) {
        if (!camel) return '';

        var result = '';
        for (var i = 0; i < camel.length; ++i) {
            if (camel[i] == camel[i].toUpperCase())
                result += camel[i].toLowerCase();
        }

        return result
    },

    sep: function(index, sep) {
        if (index > 0)
            return sep;
        return '';
    },

    dump: function(obj) {
        console.log(util.inspect(obj, {showHidden: false, depth: null}));
        return '';
    }
};
