;(function (name, definition) {
  // this is considered "safe":
  var hasDefine = typeof define === 'function';

  if (hasDefine) {
    // AMD Module or CMD Module
    define(definition);
  } else {
    // Assign to common namespaces or simply the global object (window)
    this[name] = definition();
  }
})('cursorPosition', function (require, exports, module) {
  // get/set the cursor position in the textarea or input elements

  var get = function (elem) {
    var position = -1;
    var range;
    if (elem.selectionStart) {
      // not ie
      position = elem.selectionStart;
    } else {
      // ie
      if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.moveStart("character", -elem.value.length);
        position = range.text.length;
      }
    }
    return position;
  };

  // 将文本框光标放置至指定位置
  var set = function (elem, i) {
    var range;
    if (elem.setSelectionRange) {
      // not ie
      elem.setSelectionRange(i, i);
    } else {
      //IE
      if (elem.createTextRange) {
        range = elem.createTextRange();
        range.move("character", i);
        range.select();
      }
    }
  };

  exports.get = get;
  exports.set = set;
});
