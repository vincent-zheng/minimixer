module.exports = function (router) {
    var Router = function (router) {
        this.router = router;
    };
    
    Router.prototype.init = function (appView) {
        window.onhashchange = (function () {
            var onroutechangefunc;
            var hashchange = function () {
                var hash = location.hash.split('#')[1] || router.default || '';
                if (!hash) {
                    return;
                }
                if (typeof router[hash] === 'string') {
                    if (typeof onroutechangefunc === 'function') {
                        onroutechangefunc();
                    }
                    try {
                        var controller = require(router[hash] + '/controller');
                        controller(appView);
                        if (typeof controller.onroutechange === 'function') {
                            onroutechangefunc = controller.onroutechange;
                        } else {
                            onroutechangefunc = null;
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
            hashchange();
            return hashchange;
        })();
    }    
    return new Router(router);
}