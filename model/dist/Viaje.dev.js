"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Viaje = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _db = _interopRequireDefault(require("../config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Viaje = _db["default"].define('viajes', {
  titulo: {
    type: _sequelize.Sequelize.STRING
  },
  precio: {
    type: _sequelize.Sequelize.STRING
  },
  fecha_ida: {
    type: _sequelize.Sequelize.DATE
  },
  fecha_vuelta: {
    type: _sequelize.Sequelize.DATE
  },
  imagen: {
    type: _sequelize.Sequelize.STRING
  },
  descripcion: {
    type: _sequelize.Sequelize.STRING
  },
  disponibles: {
    type: _sequelize.Sequelize.STRING
  },
  slug: {
    type: _sequelize.Sequelize.STRING
  }
});

exports.Viaje = Viaje;
//# sourceMappingURL=Viaje.dev.js.map
