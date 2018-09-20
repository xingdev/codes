function Register() {
  this.routes = []
}

Register.prototype.regist = function (obj, key, fn) {
  this.routes.push({
    obj: obj,
    key: key,
    fn: fn
  })

}

Register.prototype.build = function () {
  this.routes.forEach((route) => {
    observer(route.obj, route.key, route.fn)
  })
}

function observer(obj, key, callback) {
  var old = obj[key]
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return old
    },
    set: function (now) {
      if (now !== old) {
        callback(old, now)
      }
      old = now
    }
  })
}

var obj = {
  name: 'foo',
  age: 20
}
const register = new Register()

register.regist(obj, 'name', function (old, now) {
  console.log('name changed===>', now)
})

register.regist(obj, 'age', function () {
  console.log('age changed')
})

register.build()

obj.name = 'hhhh'

obj.age = '30'

