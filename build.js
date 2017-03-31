System.register("app/template.html", [], function (_export, _context) {
  "use strict";

  var __useDefault;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("default", "<div>Hello</div>");
    }
  };
});
System.register('app/main.ts', ['./template.html'], function (_export, _context) {
    "use strict";

    var template;

    _export('default', function () {
        console.log(template);
    });

    return {
        setters: [function (_templateHtml) {
            template = _templateHtml.default;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=build.js.map