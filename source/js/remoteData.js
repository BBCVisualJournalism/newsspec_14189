define([
    'jquery'
], function ($) {

    var RemoteData = {};

    RemoteData.fetch = function(url, callback) {
        $.ajax({
            url: url,
            cache: true,
            dataType: 'json',
            success: function(response) {
                callback(response);
            }
        });
    };

    return RemoteData;


});