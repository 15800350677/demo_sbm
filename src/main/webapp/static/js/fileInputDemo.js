$(function () {
    initUpload();
});

function initUpload() {
    $('#file-0a').fileinput({
        language: 'zh',
        uploadUrl: 'uploadMultipleFile',
        // allowedPreviewTypes : ['image', 'html', 'text', 'video', 'audio', 'flash']
    });
    $('#file-0a').on('fileuploaderror', function(event, data, previewId, index) {
        var form = data.form, files = data.files, extra = data.extra,
            response = data.response, reader = data.reader;
        console.log(data);
        console.log('File upload error');
    });
    $('#file-0a').on('fileerror', function(event, data) {
        console.log(data);
    });
    $('#file-0a').on('fileuploaded', function(event, data, previewId, index) {
        var form = data.form, files = data.files, extra = data.extra,
            response = data.response, reader = data.reader;
        console.log('File uploaded triggered');
    });
}