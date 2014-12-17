
(function() {

    function browserLanguage() {
        var nav = navigator;
        return (nav.browserLanguage || nav.language || nav.userLanguage || "").substr(0, 2);
    }
    ;
    var vm = avalon.define({
        $id: "main",
        userLanguage: browserLanguage() === "zh" ? "zh" : "en",
        currentPath: "zh/introduction.html",
        concepts: [
            {
                name: "视图模型",
                id: "vmodel"
            },
            {
                name: "数据模型",
                id: "$model"
            },
            {
                name: "监控属性",
                id: "observable"
            },
            {
                name: "监控数组",
                id: "collection"
            },
            {
                name: "计算属性",
                id: "computed"
            },
            {
                name: "$watch方法",
                id: "$watch"
            },
            {
                name: "$fire方法",
                id: "$fire"
            },
            {
                name: "非监控属性",
                id: "unobservable"
            }
        ],
        bindings: [
            {
                name: "ms-controller",
                id: "controller"
            },
            {
                name: "ms-important",
                id: "controller"
            },
            {
                name: "ms-skip",
                id: "controller"
            },
            {
                name: "ms-text",
                id: "text"
            },
            {
                name: "ms-html",
                id: "text"
            },
            {
                name: "ms-visible",
                id: "visible"
            },
            {
                name: "ms-if",
                id: "if"
            },
            {
                name: "ms-data-*",
                id: "data"
            },
            {
                name: "ms-attr-*",
                id: "attr"
            },
            {
                name: "ms-classs-*",
                id: "class"
            }
        ],
        supportSVG: !!window.dispatchEvent,
        changePath: function() {
            setTimeout(function() {
                vm.currentPath = location.href.split("#")[1]
            })
        },
        highlight: function() {
            SyntaxHighlighter.highlight()
        }
    })
})()
