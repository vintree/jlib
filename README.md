# jlib
    我们看看jlib是如何把js变强大的，废话少说，请下看！
    **Map**
> var map = new Map();

`map.put(k, v);//存放键值对`

`map.getValue(k);//得到value`

`map.getKey(v);//得到key`

`map.toArrayValue();//得到value数组`

`map.toArrayKey();//得到key数组`

`map.toJson();//Json化`

`map.size();//长度`

`map.remove(k);//删除指定key对应的value`

`map.toString();//string化`

**Array** 
>var array = new Array();

> //var array = [];只要是数组对象即可

`array.ix(v);//查找value对应的下标`

`array.ixAll(v)//查询所有对应value的下标`

`array.rmVal(v);//通过value删除对应数据`

`array.rmValAll(v)//通过value删除对应所有数据`

`array.rmIx(ix);//通过下标删除数据`

`array.unique();//去重`

`array.sort();//排序，加强版`

**Error**
>var error = new Error();

`error.init(o)//如果是null || o === undefined || o === NaN || o.length === 0 || o === 0 返回false，否则true`

**Type**
>var type = new Type();

`type.init(o)//返回参数类型，'Number'、'String'、'Array'、'Object'、如果都不是则由constructor返回类型`

`type.isArray(o)//判断Array类型，返回boo`

`type.isObject(o)//判断Object类型，返回boo`

`type.isNumber(o)//判断Number类型，返回boo`

`type.isString(o)//判断String类型，返回boo`

**Localstor**
>var localstor = new Localstor();

`localstor.init()//判断浏览器是否支持localStorage功能，返回boo`

`localstor.set(k, o)//设置键值对`

`localstor.get(k)//得到缓存数据`

`localstor.remove(k)//key对应的整条数据`

`localstor.clear()//清理缓存`

**Sessionstor**
>var sessionstor = new Sessionstor();

`sessionstor.init()//判断浏览器是否支持localStorage功能，返回boo`

`sessionstor.set(k, o)//设置键值对`

`sessionstor.get(k)//得到缓存数据`

`sessionstor.remove(k)//key对应的整条数据`

`sessionstor.clear()//清理缓存`



