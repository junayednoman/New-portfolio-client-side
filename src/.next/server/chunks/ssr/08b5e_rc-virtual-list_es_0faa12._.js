module.exports = {

"[project]/node_modules/rc-virtual-list/es/Filler.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
/**
 * Fill component to provided the scroll content real height.
 */ var Filler = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(_ref, ref) {
    var height = _ref.height, offsetY = _ref.offsetY, offsetX = _ref.offsetX, children = _ref.children, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize, innerProps = _ref.innerProps, rtl = _ref.rtl, extra = _ref.extra;
    var outerStyle = {};
    var innerStyle = {
        display: 'flex',
        flexDirection: 'column'
    };
    if (offsetY !== undefined) {
        // Not set `width` since this will break `sticky: right`
        outerStyle = {
            height: height,
            position: 'relative',
            overflow: 'hidden'
        };
        innerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, innerStyle), {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            transform: "translateY(".concat(offsetY, "px)")
        }, rtl ? 'marginRight' : 'marginLeft', -offsetX), "position", 'absolute'), "left", 0), "right", 0), "top", 0));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        style: outerStyle
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: function onResize(_ref2) {
            var offsetHeight = _ref2.offsetHeight;
            if (offsetHeight && onInnerResize) {
                onInnerResize();
            }
        }
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        style: innerStyle,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
        ref: ref
    }, innerProps), children, extra)));
});
Filler.displayName = 'Filler';
const __TURBOPACK__default__export__ = Filler;

})()),
"[project]/node_modules/rc-virtual-list/es/Item.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Item": ()=>Item
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function Item(_ref) {
    var children = _ref.children, setRef = _ref.setRef;
    var refFunc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(node) {
        setRef(node);
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.cloneElement(children, {
        ref: refFunc
    });
}

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useChildren.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useChildren
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/Item.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
    var getKey = _ref.getKey;
    return list.slice(startIndex, endIndex + 1).map(function(item, index) {
        var eleIndex = startIndex + index;
        var node = renderFunc(item, eleIndex, {
            style: {
                width: scrollWidth
            },
            offsetX: offsetX
        });
        var key = getKey(item);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
            key: key,
            setRef: function setRef(ele) {
                return setNodeRef(item, ele);
            }
        }, node);
    });
}

})()),
"[project]/node_modules/rc-virtual-list/es/utils/algorithmUtil.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */ __turbopack_esm__({
    "findListDiffIndex": ()=>findListDiffIndex,
    "getIndexByStartLoc": ()=>getIndexByStartLoc
});
function getIndexByStartLoc(min, max, start, index) {
    var beforeCount = start - min;
    var afterCount = max - start;
    var balanceCount = Math.min(beforeCount, afterCount) * 2;
    // Balance
    if (index <= balanceCount) {
        var stepIndex = Math.floor(index / 2);
        if (index % 2) {
            return start + stepIndex + 1;
        }
        return start - stepIndex;
    }
    // One is out of range
    if (beforeCount > afterCount) {
        return start - (index - afterCount);
    }
    return start + (index - beforeCount);
}
function findListDiffIndex(originList, targetList, getKey) {
    var originLen = originList.length;
    var targetLen = targetList.length;
    var shortList;
    var longList;
    if (originLen === 0 && targetLen === 0) {
        return null;
    }
    if (originLen < targetLen) {
        shortList = originList;
        longList = targetList;
    } else {
        shortList = targetList;
        longList = originList;
    }
    var notExistKey = {
        __EMPTY_ITEM__: true
    };
    function getItemKey(item) {
        if (item !== undefined) {
            return getKey(item);
        }
        return notExistKey;
    }
    // Loop to find diff one
    var diffIndex = null;
    var multiple = Math.abs(originLen - targetLen) !== 1;
    for(var i = 0; i < longList.length; i += 1){
        var shortKey = getItemKey(shortList[i]);
        var longKey = getItemKey(longList[i]);
        if (shortKey !== longKey) {
            diffIndex = i;
            multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
            break;
        }
    }
    return diffIndex === null ? null : {
        index: diffIndex,
        multiple: multiple
    };
}

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useDiffItem.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useDiffItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$algorithmUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/utils/algorithmUtil.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function useDiffItem(data, getKey, onDiff) {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(data), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), prevData = _React$useState2[0], setPrevData = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), diffItem = _React$useState4[0], setDiffItem = _React$useState4[1];
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        var diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$algorithmUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findListDiffIndex"])(prevData || [], data || [], getKey);
        if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
            onDiff === null || onDiff === void 0 || onDiff(diff.index);
            setDiffItem(data[diff.index]);
        }
        setPrevData(data);
    }, [
        data
    ]);
    return [
        diffItem
    ];
}

})()),
"[project]/node_modules/rc-virtual-list/es/utils/isFirefox.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var isFF = (typeof navigator === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
const __TURBOPACK__default__export__ = isFF;

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = function(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight) {
    // Do lock for a wheel when scrolling
    var lockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var lockTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function lockScroll() {
        clearTimeout(lockTimeoutRef.current);
        lockRef.current = true;
        lockTimeoutRef.current = setTimeout(function() {
            lockRef.current = false;
        }, 50);
    }
    // Pass to ref since global add is in closure
    var scrollPingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        top: isScrollAtTop,
        bottom: isScrollAtBottom,
        left: isScrollAtLeft,
        right: isScrollAtRight
    });
    scrollPingRef.current.top = isScrollAtTop;
    scrollPingRef.current.bottom = isScrollAtBottom;
    scrollPingRef.current.left = isScrollAtLeft;
    scrollPingRef.current.right = isScrollAtRight;
    return function(isHorizontal, delta) {
        var smoothOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var originScroll = isHorizontal ? // Pass origin wheel when on the left
        delta < 0 && scrollPingRef.current.left || // Pass origin wheel when on the right
        delta > 0 && scrollPingRef.current.right // Pass origin wheel when on the top
         : delta < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
        delta > 0 && scrollPingRef.current.bottom;
        if (smoothOffset && originScroll) {
            // No need lock anymore when it's smooth offset from touchMove interval
            clearTimeout(lockTimeoutRef.current);
            lockRef.current = false;
        } else if (!originScroll || lockRef.current) {
            lockScroll();
        }
        return !lockRef.current && originScroll;
    };
};

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useFrameWheel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$isFirefox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/utils/isFirefox.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, horizontalScroll, /***
 * Return `true` when you need to prevent default event
 */ onWheelDelta) {
    var offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    var nextFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Firefox patch
    var wheelValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isMouseScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Scroll status sync
    var originScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
    function onWheelY(e, deltaY) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cancel(nextFrameRef.current);
        // Do nothing when scroll at the edge, Skip check when is in scroll
        if (originScroll(false, deltaY)) return;
        // Skip if nest List has handled this event
        var event = e;
        if (!event._virtualHandled) {
            event._virtualHandled = true;
        } else {
            return;
        }
        offsetRef.current += deltaY;
        wheelValueRef.current = deltaY;
        // Proxy of scroll events
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$isFirefox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
            event.preventDefault();
        }
        nextFrameRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            // Patch a multiple for Firefox to fix wheel number too small
            // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
            var patchMultiple = isMouseScrollRef.current ? 10 : 1;
            onWheelDelta(offsetRef.current * patchMultiple, false);
            offsetRef.current = 0;
        });
    }
    function onWheelX(event, deltaX) {
        onWheelDelta(deltaX, true);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$isFirefox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) {
            event.preventDefault();
        }
    }
    // Check for which direction does wheel do. `sx` means `shift + wheel`
    var wheelDirectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var wheelDirectionCleanRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function onWheel(event) {
        if (!inVirtual) return;
        // Wait for 2 frame to clean direction
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cancel(wheelDirectionCleanRef.current);
        wheelDirectionCleanRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
            wheelDirectionRef.current = null;
        }, 2);
        var deltaX = event.deltaX, deltaY = event.deltaY, shiftKey = event.shiftKey;
        var mergedDeltaX = deltaX;
        var mergedDeltaY = deltaY;
        if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
            mergedDeltaX = deltaY;
            mergedDeltaY = 0;
            wheelDirectionRef.current = 'sx';
        }
        var absX = Math.abs(mergedDeltaX);
        var absY = Math.abs(mergedDeltaY);
        if (wheelDirectionRef.current === null) {
            wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
        }
        if (wheelDirectionRef.current === 'y') {
            onWheelY(event, mergedDeltaY);
        } else {
            onWheelX(event, mergedDeltaX);
        }
    }
    // A patch for firefox
    function onFireFoxScroll(event) {
        if (!inVirtual) return;
        isMouseScrollRef.current = event.detail === wheelValueRef.current;
    }
    return [
        onWheel,
        onFireFoxScroll
    ];
}

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useGetSize.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useGetSize": ()=>useGetSize
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function useGetSize(mergedData, getKey, heights, itemHeight) {
    var _React$useMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return [
            new Map(),
            []
        ];
    }, [
        mergedData,
        heights.id,
        itemHeight
    ]), _React$useMemo2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useMemo, 2), key2Index = _React$useMemo2[0], bottomList = _React$useMemo2[1];
    var getSize = function getSize(startKey) {
        var endKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : startKey;
        // Get from cache first
        var startIndex = key2Index.get(startKey);
        var endIndex = key2Index.get(endKey);
        // Loop to fill the cache
        if (startIndex === undefined || endIndex === undefined) {
            var dataLen = mergedData.length;
            for(var i = bottomList.length; i < dataLen; i += 1){
                var _heights$get;
                var item = mergedData[i];
                var key = getKey(item);
                key2Index.set(key, i);
                var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
                bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
                if (key === startKey) {
                    startIndex = i;
                }
                if (key === endKey) {
                    endIndex = i;
                }
                if (startIndex !== undefined && endIndex !== undefined) {
                    break;
                }
            }
        }
        return {
            top: bottomList[startIndex - 1] || 0,
            bottom: bottomList[endIndex]
        };
    };
    return getSize;
}

})()),
"[project]/node_modules/rc-virtual-list/es/utils/CacheMap.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/classCallCheck.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/createClass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/ function() {
    function CacheMap() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$classCallCheck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, CacheMap);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, "maps", void 0);
        // Used for cache key
        // `useMemo` no need to update if `id` not change
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this, "id", 0);
        this.maps = Object.create(null);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$createClass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(CacheMap, [
        {
            key: "set",
            value: function set(key, value) {
                this.maps[key] = value;
                this.id += 1;
            }
        },
        {
            key: "get",
            value: function get(key) {
                return this.maps[key];
            }
        }
    ]);
    return CacheMap;
}();
const __TURBOPACK__default__export__ = CacheMap;

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useHeights.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useHeights
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/Dom/findDOMNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$CacheMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/utils/CacheMap.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function useHeights(getKey, onItemAdd, onItemRemove) {
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(0), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), updatedMark = _React$useState2[0], setUpdatedMark = _React$useState2[1];
    var instanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    var heightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$CacheMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]());
    var collectRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    function cancelRaf() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cancel(collectRafRef.current);
    }
    function collectHeight() {
        var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        cancelRaf();
        var doCollect = function doCollect() {
            instanceRef.current.forEach(function(element, key) {
                if (element && element.offsetParent) {
                    var htmlElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$Dom$2f$findDOMNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(element);
                    var offsetHeight = htmlElement.offsetHeight;
                    if (heightsRef.current.get(key) !== offsetHeight) {
                        heightsRef.current.set(key, htmlElement.offsetHeight);
                    }
                }
            });
            // Always trigger update mark to tell parent that should re-calculate heights when resized
            setUpdatedMark(function(c) {
                return c + 1;
            });
        };
        if (sync) {
            doCollect();
        } else {
            collectRafRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doCollect);
        }
    }
    function setInstanceRef(item, instance) {
        var key = getKey(item);
        var origin = instanceRef.current.get(key);
        if (instance) {
            instanceRef.current.set(key, instance);
            collectHeight();
        } else {
            instanceRef.current.delete(key);
        }
        // Instance changed
        if (!origin !== !instance) {
            if (instance) {
                onItemAdd === null || onItemAdd === void 0 || onItemAdd(item);
            } else {
                onItemRemove === null || onItemRemove === void 0 || onItemRemove(item);
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return cancelRaf;
    }, []);
    return [
        setInstanceRef,
        collectHeight,
        heightsRef.current,
        updatedMark
    ];
}

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useMobileTouchMove
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
    var touchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var touchXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    var touchYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    var elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Smooth scroll
    var intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* eslint-disable prefer-const */ var cleanUpEvents;
    var onTouchMove = function onTouchMove(e) {
        if (touchedRef.current) {
            var currentX = Math.ceil(e.touches[0].pageX);
            var currentY = Math.ceil(e.touches[0].pageY);
            var offsetX = touchXRef.current - currentX;
            var offsetY = touchYRef.current - currentY;
            var _isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
            if (_isHorizontal) {
                touchXRef.current = currentX;
            } else {
                touchYRef.current = currentY;
            }
            var scrollHandled = callback(_isHorizontal, _isHorizontal ? offsetX : offsetY, false, e);
            if (scrollHandled) {
                e.preventDefault();
            }
            // Smooth interval
            clearInterval(intervalRef.current);
            if (scrollHandled) {
                intervalRef.current = setInterval(function() {
                    if (_isHorizontal) {
                        offsetX *= SMOOTH_PTG;
                    } else {
                        offsetY *= SMOOTH_PTG;
                    }
                    var offset = Math.floor(_isHorizontal ? offsetX : offsetY);
                    if (!callback(_isHorizontal, offset, true) || Math.abs(offset) <= 0.1) {
                        clearInterval(intervalRef.current);
                    }
                }, 16);
            }
        }
    };
    var onTouchEnd = function onTouchEnd() {
        touchedRef.current = false;
        cleanUpEvents();
    };
    var onTouchStart = function onTouchStart(e) {
        cleanUpEvents();
        if (e.touches.length === 1 && !touchedRef.current) {
            touchedRef.current = true;
            touchXRef.current = Math.ceil(e.touches[0].pageX);
            touchYRef.current = Math.ceil(e.touches[0].pageY);
            elementRef.current = e.target;
            elementRef.current.addEventListener('touchmove', onTouchMove, {
                passive: false
            });
            elementRef.current.addEventListener('touchend', onTouchEnd, {
                passive: true
            });
        }
    };
    cleanUpEvents = function cleanUpEvents() {
        if (elementRef.current) {
            elementRef.current.removeEventListener('touchmove', onTouchMove);
            elementRef.current.removeEventListener('touchend', onTouchEnd);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (inVirtual) {
            listRef.current.addEventListener('touchstart', onTouchStart, {
                passive: true
            });
        }
        return function() {
            var _listRef$current;
            (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener('touchstart', onTouchStart);
            cleanUpEvents();
            clearInterval(intervalRef.current);
        };
    }, [
        inVirtual
    ]);
}

})()),
"[project]/node_modules/rc-virtual-list/es/hooks/useScrollTo.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>useScrollTo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/warning.js [app-ssr] (ecmascript) <export default as warning>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
    var scrollRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), syncState = _React$useState2[0], setSyncState = _React$useState2[1];
    // ========================== Sync Scroll ==========================
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (syncState && syncState.times < MAX_TIMES) {
            // Never reach
            if (!containerRef.current) {
                setSyncState(function(ori) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, ori);
                });
                return;
            }
            collectHeight();
            var targetAlign = syncState.targetAlign, originAlign = syncState.originAlign, index = syncState.index, offset = syncState.offset;
            var height = containerRef.current.clientHeight;
            var needCollectHeight = false;
            var newTargetAlign = targetAlign;
            var targetTop = null;
            // Go to next frame if height not exist
            if (height) {
                var mergedAlign = targetAlign || originAlign;
                // Get top & bottom
                var stackTop = 0;
                var itemTop = 0;
                var itemBottom = 0;
                var maxLen = Math.min(data.length - 1, index);
                for(var i = 0; i <= maxLen; i += 1){
                    var key = getKey(data[i]);
                    itemTop = stackTop;
                    var cacheHeight = heights.get(key);
                    itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
                    stackTop = itemBottom;
                }
                // Check if need sync height (visible range has item not record height)
                var leftHeight = mergedAlign === 'top' ? offset : height - offset;
                for(var _i = maxLen; _i >= 0; _i -= 1){
                    var _key = getKey(data[_i]);
                    var _cacheHeight = heights.get(_key);
                    if (_cacheHeight === undefined) {
                        needCollectHeight = true;
                        break;
                    }
                    leftHeight -= _cacheHeight;
                    if (leftHeight <= 0) {
                        break;
                    }
                }
                // Scroll to
                switch(mergedAlign){
                    case 'top':
                        targetTop = itemTop - offset;
                        break;
                    case 'bottom':
                        targetTop = itemBottom - height + offset;
                        break;
                    default:
                        {
                            var scrollTop = containerRef.current.scrollTop;
                            var scrollBottom = scrollTop + height;
                            if (itemTop < scrollTop) {
                                newTargetAlign = 'top';
                            } else if (itemBottom > scrollBottom) {
                                newTargetAlign = 'bottom';
                            }
                        }
                }
                if (targetTop !== null) {
                    syncScrollTop(targetTop);
                }
                // One more time for sync
                if (targetTop !== syncState.lastTop) {
                    needCollectHeight = true;
                }
            }
            // Trigger next effect
            if (needCollectHeight) {
                setSyncState((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, syncState), {}, {
                    times: syncState.times + 1,
                    targetAlign: newTargetAlign,
                    lastTop: targetTop
                }));
            }
        } else if (("TURBOPACK compile-time value", "development") !== 'production' && (syncState === null || syncState === void 0 ? void 0 : syncState.times) === MAX_TIMES) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(false, 'Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.');
        }
    }, [
        syncState,
        containerRef.current
    ]);
    // =========================== Scroll To ===========================
    return function(arg) {
        // When not argument provided, we think dev may want to show the scrollbar
        if (arg === null || arg === undefined) {
            triggerFlash();
            return;
        }
        // Normal scroll logic
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cancel(scrollRef.current);
        if (typeof arg === 'number') {
            syncScrollTop(arg);
        } else if (arg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(arg) === 'object') {
            var index;
            var align = arg.align;
            if ('index' in arg) {
                index = arg.index;
            } else {
                index = data.findIndex(function(item) {
                    return getKey(item) === arg.key;
                });
            }
            var _arg$offset = arg.offset, offset = _arg$offset === void 0 ? 0 : _arg$offset;
            setSyncState({
                times: 0,
                index: index,
                offset: offset,
                originAlign: align
            });
        }
    };
}

})()),
"[project]/node_modules/rc-virtual-list/es/ScrollBar.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/raf.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function getPageXY(e, horizontal) {
    var obj = 'touches' in e ? e.touches[0] : e;
    return obj[horizontal ? 'pageX' : 'pageY'];
}
var ScrollBar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(function(props, ref) {
    var prefixCls = props.prefixCls, rtl = props.rtl, scrollOffset = props.scrollOffset, scrollRange = props.scrollRange, onStartMove = props.onStartMove, onStopMove = props.onStopMove, onScroll = props.onScroll, horizontal = props.horizontal, spinSize = props.spinSize, containerSize = props.containerSize, style = props.style, propsThumbStyle = props.thumbStyle;
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), dragging = _React$useState2[0], setDragging = _React$useState2[1];
    var _React$useState3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState3, 2), pageXY = _React$useState4[0], setPageXY = _React$useState4[1];
    var _React$useState5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(null), _React$useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState5, 2), startTop = _React$useState6[0], setStartTop = _React$useState6[1];
    var isLTR = !rtl;
    // ========================= Refs =========================
    var scrollbarRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    var thumbRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    // ======================= Visible ========================
    var _React$useState7 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(false), _React$useState8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState7, 2), visible = _React$useState8[0], setVisible = _React$useState8[1];
    var visibleTimeoutRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    var delayHidden = function delayHidden() {
        clearTimeout(visibleTimeoutRef.current);
        setVisible(true);
        visibleTimeoutRef.current = setTimeout(function() {
            setVisible(false);
        }, 3000);
    };
    // ======================== Range =========================
    var enableScrollRange = scrollRange - containerSize || 0;
    var enableOffsetRange = containerSize - spinSize || 0;
    // ========================= Top ==========================
    var top = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (scrollOffset === 0 || enableScrollRange === 0) {
            return 0;
        }
        var ptg = scrollOffset / enableScrollRange;
        return ptg * enableOffsetRange;
    }, [
        scrollOffset,
        enableScrollRange,
        enableOffsetRange
    ]);
    // ====================== Container =======================
    var onContainerMouseDown = function onContainerMouseDown(e) {
        e.stopPropagation();
        e.preventDefault();
    };
    // ======================== Thumb =========================
    var stateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef({
        top: top,
        dragging: dragging,
        pageY: pageXY,
        startTop: startTop
    });
    stateRef.current = {
        top: top,
        dragging: dragging,
        pageY: pageXY,
        startTop: startTop
    };
    var onThumbMouseDown = function onThumbMouseDown(e) {
        setDragging(true);
        setPageXY(getPageXY(e, horizontal));
        setStartTop(stateRef.current.top);
        onStartMove();
        e.stopPropagation();
        e.preventDefault();
    };
    // ======================== Effect ========================
    // React make event as passive, but we need to preventDefault
    // Add event on dom directly instead.
    // ref: https://github.com/facebook/react/issues/9809
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        var onScrollbarTouchStart = function onScrollbarTouchStart(e) {
            e.preventDefault();
        };
        var scrollbarEle = scrollbarRef.current;
        var thumbEle = thumbRef.current;
        scrollbarEle.addEventListener('touchstart', onScrollbarTouchStart, {
            passive: false
        });
        thumbEle.addEventListener('touchstart', onThumbMouseDown, {
            passive: false
        });
        return function() {
            scrollbarEle.removeEventListener('touchstart', onScrollbarTouchStart);
            thumbEle.removeEventListener('touchstart', onThumbMouseDown);
        };
    }, []);
    // Pass to effect
    var enableScrollRangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    enableScrollRangeRef.current = enableScrollRange;
    var enableOffsetRangeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef();
    enableOffsetRangeRef.current = enableOffsetRange;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        if (dragging) {
            var moveRafId;
            var onMouseMove = function onMouseMove(e) {
                var _stateRef$current = stateRef.current, stateDragging = _stateRef$current.dragging, statePageY = _stateRef$current.pageY, stateStartTop = _stateRef$current.startTop;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cancel(moveRafId);
                var rect = scrollbarRef.current.getBoundingClientRect();
                var scale = containerSize / (horizontal ? rect.width : rect.height);
                if (stateDragging) {
                    var offset = (getPageXY(e, horizontal) - statePageY) * scale;
                    var newTop = stateStartTop;
                    if (!isLTR && horizontal) {
                        newTop -= offset;
                    } else {
                        newTop += offset;
                    }
                    var tmpEnableScrollRange = enableScrollRangeRef.current;
                    var tmpEnableOffsetRange = enableOffsetRangeRef.current;
                    var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
                    var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
                    newScrollTop = Math.max(newScrollTop, 0);
                    newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
                    moveRafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
                        onScroll(newScrollTop, horizontal);
                    });
                }
            };
            var onMouseUp = function onMouseUp() {
                setDragging(false);
                onStopMove();
            };
            window.addEventListener('mousemove', onMouseMove, {
                passive: true
            });
            window.addEventListener('touchmove', onMouseMove, {
                passive: true
            });
            window.addEventListener('mouseup', onMouseUp, {
                passive: true
            });
            window.addEventListener('touchend', onMouseUp, {
                passive: true
            });
            return function() {
                window.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('touchmove', onMouseMove);
                window.removeEventListener('mouseup', onMouseUp);
                window.removeEventListener('touchend', onMouseUp);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$raf$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cancel(moveRafId);
            };
        }
    }, [
        dragging
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(function() {
        delayHidden();
        return function() {
            clearTimeout(visibleTimeoutRef.current);
        };
    }, [
        scrollOffset
    ]);
    // ====================== Imperative ======================
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            delayHidden: delayHidden
        };
    });
    // ======================== Render ========================
    var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
    var containerStyle = {
        position: 'absolute',
        visibility: visible ? null : 'hidden'
    };
    var thumbStyle = {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 99,
        cursor: 'pointer',
        userSelect: 'none'
    };
    if (horizontal) {
        // Container
        containerStyle.height = 8;
        containerStyle.left = 0;
        containerStyle.right = 0;
        containerStyle.bottom = 0;
        // Thumb
        thumbStyle.height = '100%';
        thumbStyle.width = spinSize;
        if (isLTR) {
            thumbStyle.left = top;
        } else {
            thumbStyle.right = top;
        }
    } else {
        // Container
        containerStyle.width = 8;
        containerStyle.top = 0;
        containerStyle.bottom = 0;
        if (isLTR) {
            containerStyle.right = 0;
        } else {
            containerStyle.left = 0;
        }
        // Thumb
        thumbStyle.width = '100%';
        thumbStyle.height = spinSize;
        thumbStyle.top = top;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: scrollbarRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(scrollbarPrefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, containerStyle), style),
        onMouseDown: onContainerMouseDown,
        onMouseMove: delayHidden
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", {
        ref: thumbRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("".concat(scrollbarPrefixCls, "-thumb"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, thumbStyle), propsThumbStyle),
        onMouseDown: onThumbMouseDown
    }));
});
if ("TURBOPACK compile-time truthy", 1) {
    ScrollBar.displayName = 'ScrollBar';
}
const __TURBOPACK__default__export__ = ScrollBar;

})()),
"[project]/node_modules/rc-virtual-list/es/utils/scrollbarUtil.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getSpinSize": ()=>getSpinSize
});
var MIN_SIZE = 20;
function getSpinSize() {
    var containerSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var scrollRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var baseSize = containerSize / scrollRange * containerSize;
    if (isNaN(baseSize)) {
        baseSize = 0;
    }
    baseSize = Math.max(baseSize, MIN_SIZE);
    return Math.floor(baseSize);
}

})()),
"[project]/node_modules/rc-virtual-list/es/List.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RawList": ()=>RawList,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/extends.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/typeof.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectSpread2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/slicedToArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/rc-resize-observer/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useEvent.js [app-ssr] (ecmascript) <export default as useEvent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-util/es/hooks/useLayoutEffect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Filler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/Filler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useChildren.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useDiffItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useDiffItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useFrameWheel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useGetSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useGetSize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useHeights$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useHeights.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useMobileTouchMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/hooks/useScrollTo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$ScrollBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/ScrollBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$scrollbarUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/utils/scrollbarUtil.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
var _excluded = [
    "prefixCls",
    "className",
    "height",
    "itemHeight",
    "fullHeight",
    "style",
    "data",
    "children",
    "itemKey",
    "virtual",
    "direction",
    "scrollWidth",
    "component",
    "onScroll",
    "onVirtualScroll",
    "onVisibleChange",
    "innerProps",
    "extraRender",
    "styles"
];
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var EMPTY_DATA = [];
var ScrollStyle = {
    overflowY: 'auto',
    overflowAnchor: 'none'
};
function RawList(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls, className = props.className, height = props.height, itemHeight = props.itemHeight, _props$fullHeight = props.fullHeight, fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight, style = props.style, data = props.data, children = props.children, itemKey = props.itemKey, virtual = props.virtual, direction = props.direction, scrollWidth = props.scrollWidth, _props$component = props.component, Component = _props$component === void 0 ? 'div' : _props$component, onScroll = props.onScroll, onVirtualScroll = props.onVirtualScroll, onVisibleChange = props.onVisibleChange, innerProps = props.innerProps, extraRender = props.extraRender, styles = props.styles, restProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props, _excluded);
    // =============================== Item Key ===============================
    var getKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(function(item) {
        if (typeof itemKey === 'function') {
            return itemKey(item);
        }
        return item === null || item === void 0 ? void 0 : item[itemKey];
    }, [
        itemKey
    ]);
    // ================================ Height ================================
    var _useHeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useHeights$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getKey, null, null), _useHeights2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useHeights, 4), setInstanceRef = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], heightUpdatedMark = _useHeights2[3];
    // ================================= MISC =================================
    var useVirtual = !!(virtual !== false && height && itemHeight);
    var containerHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return Object.values(heights.maps).reduce(function(total, curr) {
            return total + curr;
        }, 0);
    }, [
        heights.id,
        heights.maps
    ]);
    var inVirtual = useVirtual && data && (Math.max(itemHeight * data.length, containerHeight) > height || !!scrollWidth);
    var isRTL = direction === 'rtl';
    var mergedClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prefixCls, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, "".concat(prefixCls, "-rtl"), isRTL), className);
    var mergedData = data || EMPTY_DATA;
    var componentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var fillerInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // =============================== Item Key ===============================
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useState, 2), offsetTop = _useState2[0], setOffsetTop = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useState3, 2), offsetLeft = _useState4[0], setOffsetLeft = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false), _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useState5, 2), scrollMoving = _useState6[0], setScrollMoving = _useState6[1];
    var onScrollbarStartMove = function onScrollbarStartMove() {
        setScrollMoving(true);
    };
    var onScrollbarStopMove = function onScrollbarStopMove() {
        setScrollMoving(false);
    };
    var sharedConfig = {
        getKey: getKey
    };
    // ================================ Scroll ================================
    function syncScrollTop(newTop) {
        setOffsetTop(function(origin) {
            var value;
            if (typeof newTop === 'function') {
                value = newTop(origin);
            } else {
                value = newTop;
            }
            var alignedTop = keepInRange(value);
            componentRef.current.scrollTop = alignedTop;
            return alignedTop;
        });
    }
    // ================================ Legacy ================================
    // Put ref here since the range is generate by follow
    var rangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        start: 0,
        end: mergedData.length
    });
    var diffItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var _useDiffItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useDiffItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedData, getKey), _useDiffItem2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useDiffItem, 1), diffItem = _useDiffItem2[0];
    diffItemRef.current = diffItem;
    // ========================== Visible Calculation =========================
    var _React$useMemo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        if (!useVirtual) {
            return {
                scrollHeight: undefined,
                start: 0,
                end: mergedData.length - 1,
                offset: undefined
            };
        }
        // Always use virtual scroll bar in avoid shaking
        if (!inVirtual) {
            var _fillerInnerRef$curre;
            return {
                scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
                start: 0,
                end: mergedData.length - 1,
                offset: undefined
            };
        }
        var itemTop = 0;
        var startIndex;
        var startOffset;
        var endIndex;
        var dataLen = mergedData.length;
        for(var i = 0; i < dataLen; i += 1){
            var _item = mergedData[i];
            var key = getKey(_item);
            var cacheHeight = heights.get(key);
            var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            // Check item top in the range
            if (currentItemBottom >= offsetTop && startIndex === undefined) {
                startIndex = i;
                startOffset = itemTop;
            }
            // Check item bottom in the range. We will render additional one item for motion usage
            if (currentItemBottom > offsetTop + height && endIndex === undefined) {
                endIndex = i;
            }
            itemTop = currentItemBottom;
        }
        // When scrollTop at the end but data cut to small count will reach this
        if (startIndex === undefined) {
            startIndex = 0;
            startOffset = 0;
            endIndex = Math.ceil(height / itemHeight);
        }
        if (endIndex === undefined) {
            endIndex = mergedData.length - 1;
        }
        // Give cache to improve scroll experience
        endIndex = Math.min(endIndex + 1, mergedData.length - 1);
        return {
            scrollHeight: itemTop,
            start: startIndex,
            end: endIndex,
            offset: startOffset
        };
    }, [
        inVirtual,
        useVirtual,
        offsetTop,
        mergedData,
        heightUpdatedMark,
        height
    ]), scrollHeight = _React$useMemo.scrollHeight, start = _React$useMemo.start, end = _React$useMemo.end, fillerOffset = _React$useMemo.offset;
    rangeRef.current.start = start;
    rangeRef.current.end = end;
    // ================================= Size =================================
    var _React$useState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState({
        width: 0,
        height: height
    }), _React$useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_React$useState, 2), size = _React$useState2[0], setSize = _React$useState2[1];
    var onHolderResize = function onHolderResize(sizeInfo) {
        setSize({
            width: sizeInfo.offsetWidth,
            height: sizeInfo.offsetHeight
        });
    };
    // Hack on scrollbar to enable flash call
    var verticalScrollBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var horizontalScrollBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var horizontalScrollBarSpinSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$scrollbarUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpinSize"])(size.width, scrollWidth);
    }, [
        size.width,
        scrollWidth
    ]);
    var verticalScrollBarSpinSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$utils$2f$scrollbarUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSpinSize"])(size.height, scrollHeight);
    }, [
        size.height,
        scrollHeight
    ]);
    // =============================== In Range ===============================
    var maxScrollHeight = scrollHeight - height;
    var maxScrollHeightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(maxScrollHeight);
    maxScrollHeightRef.current = maxScrollHeight;
    function keepInRange(newScrollTop) {
        var newTop = newScrollTop;
        if (!Number.isNaN(maxScrollHeightRef.current)) {
            newTop = Math.min(newTop, maxScrollHeightRef.current);
        }
        newTop = Math.max(newTop, 0);
        return newTop;
    }
    var isScrollAtTop = offsetTop <= 0;
    var isScrollAtBottom = offsetTop >= maxScrollHeight;
    var isScrollAtLeft = offsetLeft <= 0;
    var isScrollAtRight = offsetLeft >= scrollWidth;
    var originScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useOriginScroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
    // ================================ Scroll ================================
    var getVirtualScrollInfo = function getVirtualScrollInfo() {
        return {
            x: isRTL ? -offsetLeft : offsetLeft,
            y: offsetTop
        };
    };
    var lastVirtualScrollInfoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(getVirtualScrollInfo());
    var triggerScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(params) {
        if (onVirtualScroll) {
            var nextInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, getVirtualScrollInfo()), params);
            // Trigger when offset changed
            if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
                onVirtualScroll(nextInfo);
                lastVirtualScrollInfoRef.current = nextInfo;
            }
        }
    });
    function onScrollBar(newScrollOffset, horizontal) {
        var newOffset = newScrollOffset;
        if (horizontal) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(function() {
                setOffsetLeft(newOffset);
            });
            triggerScroll();
        } else {
            syncScrollTop(newOffset);
        }
    }
    // When data size reduce. It may trigger native scroll event back to fit scroll position
    function onFallbackScroll(e) {
        var newScrollTop = e.currentTarget.scrollTop;
        if (newScrollTop !== offsetTop) {
            syncScrollTop(newScrollTop);
        }
        // Trigger origin onScroll
        onScroll === null || onScroll === void 0 || onScroll(e);
        triggerScroll();
    }
    var keepInHorizontalRange = function keepInHorizontalRange(nextOffsetLeft) {
        var tmpOffsetLeft = nextOffsetLeft;
        var max = !!scrollWidth ? scrollWidth - size.width : 0;
        tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
        tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
        return tmpOffsetLeft;
    };
    var onWheelDelta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useEvent$3e$__["useEvent"])(function(offsetXY, fromHorizontal) {
        if (fromHorizontal) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(function() {
                setOffsetLeft(function(left) {
                    var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
                    return keepInHorizontalRange(nextOffsetLeft);
                });
            });
            triggerScroll();
        } else {
            syncScrollTop(function(top) {
                var newTop = top + offsetXY;
                return newTop;
            });
        }
    });
    // Since this added in global,should use ref to keep update
    var _useFrameWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useFrameWheel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(useVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, !!scrollWidth, onWheelDelta), _useFrameWheel2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$slicedToArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
    // Mobile touch move
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useMobileTouchMove$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(useVirtual, componentRef, function(isHorizontal, delta, smoothOffset, e) {
        var event = e;
        if (originScroll(isHorizontal, delta, smoothOffset)) {
            return false;
        }
        // Fix nest List trigger TouchMove event
        if (!event || !event._virtualHandled) {
            if (event) {
                event._virtualHandled = true;
            }
            onRawWheel({
                preventDefault: function preventDefault() {},
                deltaX: isHorizontal ? delta : 0,
                deltaY: isHorizontal ? 0 : delta
            });
            return true;
        }
        return false;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        // Firefox only
        function onMozMousePixelScroll(e) {
            // scrolling at top/bottom limit
            var scrollingUpAtTop = isScrollAtTop && e.detail < 0;
            var scrollingDownAtBottom = isScrollAtBottom && e.detail > 0;
            if (useVirtual && !scrollingUpAtTop && !scrollingDownAtBottom) {
                e.preventDefault();
            }
        }
        var componentEle = componentRef.current;
        componentEle.addEventListener('wheel', onRawWheel, {
            passive: false
        });
        componentEle.addEventListener('DOMMouseScroll', onFireFoxScroll, {
            passive: true
        });
        componentEle.addEventListener('MozMousePixelScroll', onMozMousePixelScroll, {
            passive: false
        });
        return function() {
            componentEle.removeEventListener('wheel', onRawWheel);
            componentEle.removeEventListener('DOMMouseScroll', onFireFoxScroll);
            componentEle.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
        };
    }, [
        useVirtual,
        isScrollAtTop,
        isScrollAtBottom
    ]);
    // Sync scroll left
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (scrollWidth) {
            var newOffsetLeft = keepInHorizontalRange(offsetLeft);
            setOffsetLeft(newOffsetLeft);
            triggerScroll({
                x: newOffsetLeft
            });
        }
    }, [
        size.width,
        scrollWidth
    ]);
    // ================================= Ref ==================================
    var delayHideScrollBar = function delayHideScrollBar() {
        var _verticalScrollBarRef, _horizontalScrollBarR;
        (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
        (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
    };
    var _scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useScrollTo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(componentRef, mergedData, heights, itemHeight, getKey, function() {
        return collectHeight(true);
    }, syncScrollTop, delayHideScrollBar);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useImperativeHandle(ref, function() {
        return {
            nativeElement: containerRef.current,
            getScrollInfo: getVirtualScrollInfo,
            scrollTo: function scrollTo(config) {
                function isPosScroll(arg) {
                    return arg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$typeof$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(arg) === 'object' && ('left' in arg || 'top' in arg);
                }
                if (isPosScroll(config)) {
                    // Scroll X
                    if (config.left !== undefined) {
                        setOffsetLeft(keepInHorizontalRange(config.left));
                    }
                    // Scroll Y
                    _scrollTo(config.top);
                } else {
                    _scrollTo(config);
                }
            }
        };
    });
    // ================================ Effect ================================
    /** We need told outside that some list not rendered */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$util$2f$es$2f$hooks$2f$useLayoutEffect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function() {
        if (onVisibleChange) {
            var renderList = mergedData.slice(start, end + 1);
            onVisibleChange(renderList, mergedData);
        }
    }, [
        start,
        end,
        mergedData
    ]);
    // ================================ Extra =================================
    var getSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useGetSize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetSize"])(mergedData, getKey, heights, itemHeight);
    var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
        start: start,
        end: end,
        virtual: inVirtual,
        offsetX: offsetLeft,
        offsetY: fillerOffset,
        rtl: isRTL,
        getSize: getSize
    });
    // ================================ Render ================================
    var listChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$hooks$2f$useChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mergedData, start, end, scrollWidth, offsetLeft, setInstanceRef, children, sharedConfig);
    var componentStyle = null;
    if (height) {
        componentStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
        if (useVirtual) {
            componentStyle.overflowY = 'hidden';
            if (scrollWidth) {
                componentStyle.overflowX = 'hidden';
            }
            if (scrollMoving) {
                componentStyle.pointerEvents = 'none';
            }
        }
    }
    var containerProps = {};
    if (isRTL) {
        containerProps.dir = 'rtl';
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ref: containerRef,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectSpread2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, style), {}, {
            position: 'relative'
        }),
        className: mergedClassName
    }, containerProps, restProps), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$resize$2d$observer$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        onResize: onHolderResize
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(Component, {
        className: "".concat(prefixCls, "-holder"),
        style: componentStyle,
        ref: componentRef,
        onScroll: onFallbackScroll,
        onMouseEnter: delayHideScrollBar
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$Filler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        prefixCls: prefixCls,
        height: scrollHeight,
        offsetX: offsetLeft,
        offsetY: fillerOffset,
        scrollWidth: scrollWidth,
        onInnerResize: collectHeight,
        ref: fillerInnerRef,
        innerProps: innerProps,
        rtl: isRTL,
        extra: extraContent
    }, listChildren))), inVirtual && scrollHeight > height && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$ScrollBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: verticalScrollBarRef,
        prefixCls: prefixCls,
        scrollOffset: offsetTop,
        scrollRange: scrollHeight,
        rtl: isRTL,
        onScroll: onScrollBar,
        onStartMove: onScrollbarStartMove,
        onStopMove: onScrollbarStopMove,
        spinSize: verticalScrollBarSpinSize,
        containerSize: size.height,
        style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
        thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb
    }), inVirtual && scrollWidth > size.width && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$ScrollBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        ref: horizontalScrollBarRef,
        prefixCls: prefixCls,
        scrollOffset: offsetLeft,
        scrollRange: scrollWidth,
        rtl: isRTL,
        onScroll: onScrollBar,
        onStartMove: onScrollbarStartMove,
        onStopMove: onScrollbarStopMove,
        spinSize: horizontalScrollBarSpinSize,
        containerSize: size.width,
        horizontal: true,
        style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
        thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb
    }));
}
var List = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(RawList);
List.displayName = 'List';
const __TURBOPACK__default__export__ = List;

})()),
"[project]/node_modules/rc-virtual-list/es/index.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$List$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/rc-virtual-list/es/List.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rc$2d$virtual$2d$list$2f$es$2f$List$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];

})()),

};

//# sourceMappingURL=08b5e_rc-virtual-list_es_0faa12._.js.map