(function () {
    // 配置baseURL
    var baseUrl = '<%=baseUrl%>';

    require.config({
        baseUrl: baseUrl,
        paths: {
            director: '<%=director%>',
            zepto: '<%=zepto%>',
            underscore: '<%=underscore%>',
            text: '<%=text%>'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            zepto: {
                exports: '$'
            },
            director: {
                exports: 'Router'
            }
        }
    });

    require([
        'zepto',
        'router',
        'underscore'
    ], function ($, router, _) {
        window.appView = $('<%=appView%>');
        window.$ = $;
        window._ = _;
        router.init();
    });
})();