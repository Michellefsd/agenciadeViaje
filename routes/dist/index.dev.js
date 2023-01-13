"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _pagesController = require("../controller/pagesController.js");

var _opinionController = require("../controller/opinionController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', _pagesController.getHome);
router.get('/nosotros', _pagesController.getUs);
router.get('/viajes', _pagesController.getTravels);
router.get('/viajes/:slug', _pagesController.detailTravelPage);
router.get('/opiniones', _pagesController.getOpinions);
router.post('/opiniones', _opinionController.saveOpinion);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
