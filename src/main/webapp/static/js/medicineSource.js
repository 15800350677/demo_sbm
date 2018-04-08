$(function () {
    Dropzone.autoDiscover = false;
    $("#dropz").dropzone({
        url: $("#PageUrl").val()+"/medicine/uploada",
        maxFiles: 10,
        maxFilesize: 512,
        paramName:"dropz",
        acceptedFiles: ".xlsx,.xls",
        sending: function(file, xhr, formData) {
            formData.append("filesize", file.size+"--------");
        },
        success: function (file, response, e) {
            var res = JSON.parse(response);
            if (res.error) {
                $(file.previewTemplate).children('.dz-error-mark').css('opacity', '1')
            }
        }
    });
})
