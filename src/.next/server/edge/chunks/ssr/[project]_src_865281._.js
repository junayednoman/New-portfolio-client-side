(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/[project]_src_865281._.js", {

"[project]/src/services/auth/index.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getCurrentUser": ()=>getCurrentUser,
    "handleAuthMutation": ()=>handleAuthMutation,
    "logOut": ()=>logOut
});
(()=>{
    const e = new Error("Cannot find module '@/hooks/axiosInstance'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jwt-decode/build/esm/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/client/components/headers.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use server";
;
;
;
const handleAuthMutation = async (url, payload)=>{
    try {
        const { data } = await axiosInstance.post(url, payload);
        if (data?.success) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().set("accessToken", data?.data?.accessToken);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().set("refreshToken", data?.data?.refreshToken);
        }
        return data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Something went wrong");
    }
};
const getCurrentUser = async ()=>{
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().get("accessToken")?.value;
    let decodedUser = null;
    if (accessToken) {
        decodedUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["jwtDecode"])(accessToken);
        return {
            _id: decodedUser._id,
            name: decodedUser.name,
            email: decodedUser.email,
            role: decodedUser.role
        };
    }
    return decodedUser;
};
const logOut = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().delete("accessToken");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cookies"])().delete("refreshToken");
};

})()),
"[project]/src/middleware.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/auth/index.ts [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forget-password",
    "/auth/reset-password"
];
const roleBasedRoutes = {
    user: [
        /^\/author/
    ],
    admin: [
        /^\/admin/
    ]
};
async function middleware(request) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2f$index$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    const { pathname } = request.nextUrl;
    if (!user) {
        if (authRoutes.includes(pathname)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/auth/login?redirect=${pathname}`, request.url));
        }
    }
    if (user?.role && roleBasedRoutes[user?.role]) {
        if (pathname === "/profile") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        const routes = roleBasedRoutes[user?.role];
        if (routes.some((route)=>pathname.match(route))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url));
}
const config = {
    matcher: [
        "/author/:path*",
        "/admin/:path*",
        "/auth/:path*",
        "/profile"
    ]
};

})()),
}]);

//# sourceMappingURL=%5Bproject%5D_src_865281._.js.map