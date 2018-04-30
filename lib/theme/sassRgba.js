'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sassRgba = sassRgba;

var _parseToRgb = require('polished/lib/color/parseToRgb');

var _parseToRgb2 = _interopRequireDefault(_parseToRgb);

var _rgba = require('polished/lib/color/rgba');

var _rgba2 = _interopRequireDefault(_rgba);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sassRgba(color, alpha) {
  return (0, _rgba2.default)(Object.assign((0, _parseToRgb2.default)(color), { alpha: alpha }));
}

exports.default = sassRgba;