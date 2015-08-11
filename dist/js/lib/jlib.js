/*
  libjs 2015.8.5
  V 0.0.2
*/
'use strict';
	//-----------map------------------

	function Map() {
		this.c = new Object();
	}

	//放置key，value
	Map.prototype.put = function(k, v) {
		this.c[k] = v;
		return this;
	}

	//得到key->value
	Map.prototype.getValue = function(k) {
		return this.c[k];
	}

	//得到value->keys
	Map.prototype.getKey = function(v) {
		for(var k in this.c) {
			if(this.c[k] === v) {
				return k;
			}
		}
	}

	//得到value列表
	Map.prototype.toArrayValue = function() {
		var l = [];
		for(var k in this.c) {
			l.push(this.c[k]);
		}
		return l;
	}

	//得到key列表
	Map.prototype.toArrayKey = function() {
		var l = [];
		for(var k in this.c) {
			l.push(k);
		}
		return l;
	}

	//得到JSON对象
	Map.prototype.toJson = function() {
		return JSON.parse(JSON.stringify(this.c));
	}

	//得到Map长度
	Map.prototype.size = function() {
		var s = 0;
		for(var k in this.c) {
			s++;
		}
		return s;
	}

	//删除key，value
	Map.prototype.remove = function(k) {
		delete this.c[k];
		return this.c;
	}

	//得到字符串
	Map.prototype.toString = function() {
		var s = '';
		for(var k in this.c) {
			s += k + '=' + this.c[k];
		}
		return s;
	}

	//-----------Array---------------

	//查询值位置
	Array.prototype.ix = function(v) {
		var l = this.length;
		for(var i = 0; i < l; i++) {
			if(this[i] === v) {
				return i;
			}
		}
		return -1;
	}

  //查询所有值位置
  Array.prototype.ixAll = function(v) {
		var l = this.length;
    var a = [];
		for(var i = 0; i < l; i++) {
			if(this[i] === v) {
        a.push(i);
			}
		}
		return a;
	}
  
	//删除value
	Array.prototype.rmVal = function(v) {
		var ix = this.indexOf(v);
		if(ix > -1) {
			this.splice(ix, 1);
		}
		return this;
	}
  
  //删除所有对应的value
  Array.prototype.rmValAll = function(v) {
		var ixs = this.ixAll(v);
    for(var i = ixs.length - 1; i >= 0; i--) {
      this.splice(ixs[i], 1);
    }
		return this;
	}
        
  //删除下标
  Array.prototype.rmIx = function(ix) {
    this.splice(ix, 1);
    return this;
  }
      
	//去重
	Array.prototype.unique = function() {
		var o = new Map(), len = this.length;
		for(var i = 0; i < len; i++) {
			if(!o.getValue[this[i]]) {
				o.put(this[i], this[i]);
			}
		}
		return o.toArrayValue();
	}
  
  //排序
  Array.prototype.sort = function() {
    var l = this.length, i, j, tmp;
      for(i = 1; i < l; i++) {
          tmp = this[i];
          j = i - 1;
          while(j >= 0 && tmp < this[j]) {
              this[j+1] = this[j];
              j--;
          }
          this[j+1] = tmp;
      }
      return this;	
  }
  
  //---------错误结果----------------
  function Error(){};
  Error.prototype.init = function(o) {
    if(o === null || o === undefined || o === NaN || o.length === 0 || o === 0 ){
      return undefined;
    }
    return true;
  }
  
  //---------类型判断----------------
  function Type(){};
  Type.prototype.init = function(o) {
    if(this.isNumber(o)) {
      return 'Number';
    }
    else if(this.isString(o)) {
      return 'String';
    }
    else if(this.isArray(o)) {
      return 'Array';
    }
    else if(this.isObject(o)) {
      return 'Object';
    }
    else{
      return o.constructor;
    }
  }

  //判断Array类型
  Type.prototype.isArray = function(o) {
    if(o && typeof o === 'object' && typeof o.length === 'number' && typeof o.splice === 'function' && (o.constructor === Array) && (o instanceof Array) && !(o.propertyIsEnumerable('length'))){
      return true;
    }
    return false;
  };

  //判断Object
  Type.prototype.isObject = function(o) {
    if(o && typeof o === 'object' && (o.constructor === Object) && (o instanceof Object)){
      return true;
    }
    return false;
  }

  //判断数字
  Type.prototype.isNumber = function(o) {
    if(typeof o === 'number' && (o.constructor === Number)) {
      return true;
    }
    return false;
  }

  //判断字符串
  Type.prototype.isString = function(o) {
    if(typeof o === 'string' && (o.constructor === String)) {
      return true;
    }
    return false;
  }
  
  //---------永久缓存--------------------
  function Localstor() {};
  //判断浏览器是否支持缓存
  Localstor.prototype.init = function() {
    if( !(('localStorage' in window) && window['localStorage'] != null) ) {
      console.log("该浏览器不支持，永久性离线缓存支持");
      return false;
    }
    return true;
  }

  //设置缓存
  Localstor.prototype.set = function(k,o) {
    localStorage.setItem(k, o);
  }

  //得到缓存
  Localstor.prototype.get = function(k) {
    return localStorage.getItem(k);
  }

  //删除缓存
  Localstor.prototype.remove = function(k) {
    localStorage.removeItem(k);
  }

  //删除所有永久性缓存
  Localstor.prototype.clear = function(k) {
    localStorage.clear();
  }

  //---------会话缓存--------------------
  function Sessionstor() {};
  //判断浏览器是否支持缓存
  Sessionstor.prototype.init = function() {
    if(('sessionStorage' in window) && window['sessionStorage'] != null) {
      console.log("该浏览器不支持，会话离线缓存支持");
      return false;
    }
    return true;
  }

  //设置缓存
  Sessionstor.prototype.set = function(k,o) {
    sessionStorage.setItem(k, o);
  }

  //得到缓存
  Sessionstor.prototype.get = function(k) {
    return sessionStorage.getItem(k);
  }

  //删除缓存
  Sessionstor.prototype.remove = function(k) {
    sessionStorage.removeItem(k);
  }

  //删除所有会话缓存
  Sessionstor.prototype.clear = function(k) {
    sessionStorage.clear();
  }
  
  //---------查询url----------------------------
  function getSearch() {
    var u = location.search; //获取url中"?"符后的字串
    var o = new Object();
    var str, strs;
     if (u.indexOf("?") != -1) {
       str = u.substr(1);
       strs = str.split("&");
       for(var i = 0; i < strs.length; i ++) {
         o[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
       }
     }
     return o;
  }

  









