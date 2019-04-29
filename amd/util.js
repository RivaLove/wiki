define(function () {
  var util = {
    getFormatDate: function (data, type) {
      if (type === 1) {
        return '2019-05-01'
      }
      if (type === 2) {
        return '2019年5月1日'
      }
    }
  }
  return util
})