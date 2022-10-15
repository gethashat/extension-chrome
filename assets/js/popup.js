$('#btnCheck').click(function(){
    $('#btnCheck').attr('disabled', 'disabled');
    $('#btnCheck').html('<div class="spinner-border text-white spinner-border-sm mx-4" role="status"></div>');
    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        var url = tabs[0].url;
        $.ajax({
            url: 'https://private.api.hashat.app/endpoints/checkurl.get',
            type: 'GET',
            data: { url: url },
            success: function (data) {
                data = JSON.parse(data);
                if (data.score >= 60){
                    window.location = "status_safe.html";
                }else{
                    window.location = "status_unsafe.html";
                }
            }
        });
    });
});

$('#btnDeepCheck').click(function(){
    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        var url = tabs[0].url;
        chrome.tabs.create({ url: "https://hashat.app/results?url=" + url });
    });
});

$('#btnOpenSettings').click(function () {
    chrome.runtime.openOptionsPage();
});