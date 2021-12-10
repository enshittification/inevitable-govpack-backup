/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/editor/blocks/issue-archive.js":
/*!******************************************************!*\
  !*** ./assets/js/src/editor/blocks/issue-archive.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ \"@wordpress/server-side-render\");\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\n * WordPress dependencies\n */\n\n\n\n\n/*\n * import { ServerSideRender } from '@wordpress/editor'\n *    is deprecated.\n * Use\n *    import ServerSideRender from @wordpress/server-side-render\n * instead. But it only has a default export, not a named export,\n * so you can't use braces.\n */\n\n\n/**\n * @param {Object} props The component properties.\n */\n\nfunction Edit(props) {\n  var ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({\n    ref: ref\n  });\n  var post = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {\n    return select('core/editor').getCurrentPost();\n  });\n  var unsavedChanges = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {\n    return select('core/editor').getPostEdits();\n  });\n\n  if (props.attributes.id === 0) {\n    props.setAttributes({\n      id: post.id\n    });\n  }\n\n  if (unsavedChanges.hasOwnProperty('govpack_issue_tax')) {\n    props.setAttributes({\n      issue: unsavedChanges.govpack_issue_tax\n    });\n  } else if (post.hasOwnProperty('govpack_issue_tax')) {\n    props.setAttributes({\n      issue: post.govpack_issue_tax\n    });\n  }\n\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {\n    block: \"govpack/issue-archive\",\n    attributes: props.attributes\n  }));\n}\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('govpack/issue-archive', {\n  apiVersion: 2,\n  title: 'Govpack Issue Archive',\n  icon: 'groups',\n  category: 'embed',\n  keywords: ['govpack'],\n  attributes: {\n    id: {\n      type: 'number',\n      \"default\": 0\n    },\n    issue: {\n      type: 'array',\n      \"default\": []\n    }\n  },\n  supports: {\n    customClassName: false\n  },\n  edit: Edit,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack://Govpack/./assets/js/src/editor/blocks/issue-archive.js?");

/***/ }),

/***/ "./assets/js/src/editor/blocks/issue.js":
/*!**********************************************!*\
  !*** ./assets/js/src/editor/blocks/issue.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ \"@wordpress/server-side-render\");\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_issue_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/issue-selector */ \"./assets/js/src/editor/components/issue-selector.js\");\n\n\n/**\n * WordPress dependencies\n */\n\nvar __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n\n\n\n/*\n * import { ServerSideRender } from '@wordpress/editor'\n *    is deprecated.\n * Use\n *    import ServerSideRender from @wordpress/server-side-render\n * instead. But it only has a default export, not a named export,\n * so you can't use braces.\n */\n\n\n\n/**\n * @param {Object} props The component properties.\n */\n\nfunction Edit(props) {\n  var ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({\n    ref: ref\n  });\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {\n    title: __('Govpack Issue', 'govpack')\n  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_issue_selector__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    props: props\n  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {\n    block: \"govpack/issue\",\n    attributes: props.attributes\n  }));\n}\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('govpack/issue', {\n  apiVersion: 2,\n  title: 'Govpack Issue',\n  icon: 'groups',\n  category: 'embed',\n  keywords: ['govpack'],\n  attributes: {\n    id: {\n      type: 'number',\n      \"default\": 0\n    }\n  },\n  edit: Edit,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack://Govpack/./assets/js/src/editor/blocks/issue.js?");

/***/ }),

/***/ "./assets/js/src/editor/blocks/profile.js":
/*!************************************************!*\
  !*** ./assets/js/src/editor/blocks/profile.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ \"@wordpress/server-side-render\");\n/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_profile_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/profile-selector */ \"./assets/js/src/editor/components/profile-selector.js\");\n\n\n/**\n * WordPress dependencies\n */\n\nvar __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n\n\n\n/*\n * import { ServerSideRender } from '@wordpress/editor'\n *    is deprecated.\n * Use\n *    import ServerSideRender from @wordpress/server-side-render\n * instead. But it only has a default export, not a named export,\n * so you can't use braces.\n */\n\n\n\n/**\n * @param {Object} props The component properties.\n */\n\nfunction Edit(props) {\n  /**\n   * @param {string} value The selected format.\n   */\n  function updateFormat(value) {\n    props.setAttributes({\n      format: value\n    });\n  }\n\n  var ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({\n    ref: ref\n  });\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {\n    title: __('Govpack Profile', 'govpack')\n  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_profile_selector__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    props: props\n  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {\n    label: \"Format\",\n    selected: props.attributes.format,\n    options: [{\n      value: 'full',\n      label: 'Full'\n    }, {\n      value: 'mini',\n      label: 'Mini'\n    }, {\n      value: 'wiki',\n      label: 'Wiki'\n    }],\n    onChange: updateFormat\n  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {\n    block: \"govpack/profile\",\n    attributes: props.attributes\n  }));\n}\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('govpack/profile', {\n  apiVersion: 2,\n  title: 'Govpack',\n  icon: 'groups',\n  category: 'embed',\n  keywords: ['govpack'],\n  attributes: {\n    id: {\n      type: 'number',\n      \"default\": 0\n    },\n    format: {\n      type: 'string',\n      \"default\": 'full'\n    }\n  },\n  edit: Edit,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack://Govpack/./assets/js/src/editor/blocks/profile.js?");

/***/ }),

/***/ "./assets/js/src/editor/components/issue-selector.js":
/*!***********************************************************!*\
  !*** ./assets/js/src/editor/components/issue-selector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\n * WordPress dependencies\n */\n\nvar __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n\n\n\nvar IssueSelector = function IssueSelector(_ref) {\n  var props = _ref.props;\n  // prettier-ignore\n  var issues = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {\n    return select('core').getEntityRecords('postType', 'govpack_issues', {\n      per_page: 100\n    });\n  });\n\n  var issuesMapped = function issuesMapped() {\n    if (issues) {\n      var mapped = issues.map(function (issue) {\n        return {\n          value: issue.id,\n          label: issue.title.rendered\n        };\n      });\n      return mapped;\n    }\n  };\n  /**\n   * Handle issue selection.\n   *\n   * @param {number} issueId The selected Issue.\n   */\n\n\n  var handleSelect = function handleSelect(issueId) {\n    if (!issueId) {\n      return;\n    }\n\n    props.setAttributes({\n      id: Number(issueId)\n    });\n  };\n\n  var OutputControl = function OutputControl() {\n    var label = __('Select an issue', 'govpack');\n\n    var options = issuesMapped();\n\n    if (!options) {\n      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null);\n    }\n\n    if (options.length === 0) {\n      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {\n        tagName: 'p',\n        value: __('No issues have been created', 'govpack')\n      });\n    }\n\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ComboboxControl, {\n      label: label,\n      options: options,\n      value: props.attributes.id,\n      onChange: handleSelect,\n      isLoading: false,\n      allowReset: true // Required as it was originally mistakenly implemented as a required prop: https://github.com/WordPress/gutenberg/issues/29566\n      ,\n      onFilterValueChange: function onFilterValueChange() {}\n    });\n  };\n\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(OutputControl, null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IssueSelector);\n\n//# sourceURL=webpack://Govpack/./assets/js/src/editor/components/issue-selector.js?");

/***/ }),

/***/ "./assets/js/src/editor/components/profile-selector.js":
/*!*************************************************************!*\
  !*** ./assets/js/src/editor/components/profile-selector.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\n/**\n * WordPress dependencies\n */\n\nvar __ = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__;\n\n\n\n\nvar ProfileSelector = function ProfileSelector(_ref) {\n  var props = _ref.props;\n  // prettier-ignore\n  var profiles = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {\n    return select('core').getEntityRecords('postType', 'govpack_profiles', {\n      per_page: 100\n    });\n  });\n\n  var profilesMapped = function profilesMapped() {\n    if (profiles) {\n      var mapped = profiles.map(function (profile) {\n        return {\n          value: profile.id,\n          label: \"\".concat(profile.cmb2.id.first_name, \" \").concat(profile.cmb2.id.last_name)\n        };\n      });\n      return mapped;\n    }\n  };\n  /**\n   * Handle profile selection.\n   *\n   * @param {number} profileId The selected Profile.\n   */\n\n\n  var handleSelect = function handleSelect(profileId) {\n    if (!profileId) {\n      return;\n    }\n\n    props.setAttributes({\n      id: Number(profileId)\n    });\n  };\n\n  var OutputControl = function OutputControl() {\n    var label = __('Select a profile', 'govpack');\n\n    var options = profilesMapped();\n\n    if (!options) {\n      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null);\n    }\n\n    if (options.length === 0) {\n      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {\n        tagName: 'p',\n        value: __('No profiles have been created', 'govpack')\n      });\n    }\n\n    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ComboboxControl, {\n      label: label,\n      options: options,\n      value: props.attributes.id,\n      onChange: handleSelect,\n      isLoading: false,\n      allowReset: true\n    });\n  };\n\n  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(OutputControl, null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileSelector);\n\n//# sourceURL=webpack://Govpack/./assets/js/src/editor/components/profile-selector.js?");

/***/ }),

/***/ "./assets/js/src/editor/index.js":
/*!***************************************!*\
  !*** ./assets/js/src/editor/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_issue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/issue.js */ \"./assets/js/src/editor/blocks/issue.js\");\n/* harmony import */ var _blocks_issue_archive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/issue-archive.js */ \"./assets/js/src/editor/blocks/issue-archive.js\");\n/* harmony import */ var _blocks_profile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/profile.js */ \"./assets/js/src/editor/blocks/profile.js\");\n\n\n\n\n//# sourceURL=webpack://Govpack/./assets/js/src/editor/index.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/src/editor/index.js");
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;