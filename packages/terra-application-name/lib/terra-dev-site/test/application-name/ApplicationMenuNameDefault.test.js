'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraImage = require('terra-image');

var _terraImage2 = _interopRequireDefault(_terraImage);

var _ApplicationMenuName = require('../../../ApplicationMenuName');

var _ApplicationMenuName2 = _interopRequireDefault(_ApplicationMenuName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: 'green', width: '100%' } },
    _react2.default.createElement(_ApplicationMenuName2.default, {
      id: 'default',
      title: 'Title',
      accessory: _react2.default.createElement(_terraImage2.default, { alt: 'terra accessory', variant: 'rounded', src: 'https://github.com/cerner/terra-core/raw/master/terra.png', height: '26px', width: '26px' })
    })
  );
};