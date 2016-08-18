define(['wrapper', 'moment', 'canvasChart'], function (wrapper, moment, canvasChart) {

    console.log(wrapper.url().hostUrl, wrapper.url().onbbcdomain, wrapper.url().parameters);

    canvasChart.init(moment);




    setTimeout(function () {
        wrapper.callIstats({
            actionType: 'panel-clicked',
            actionName: 'newsspec-interaction',
            viewLabel:  3
        });
    }, 500);
    setTimeout(function () {
        wrapper.callIstats({
            actionType: 'app loaded',
            actionName: 'newsspec-nonuser',
            viewLabel:  true
        });
    }, 2000);

    wrapper.markPageAsLoaded();

});
