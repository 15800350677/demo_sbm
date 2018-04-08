$(function () {
    $("#fileuploader").uploadFile({
        url:"/medicine/uploadb", //后台处理方法
        fileName:"excelFile",   //文件的名称，此处是变量名称，不是文件的原名称只是后台接收的参数
        dragDrop:true,  //可以取消
        abortStr:"取消",
        sequential:true,  //按顺序上传
        sequentialCount:1,  //按顺序上传
        autoSubmit :"false",  //取消自动上传
        acceptFiles:"xlsx" , //限制上传文件格式
        extErrorStr:"上传文件格式不对",
        maxFileCount:10,       //上传文件数量
        maxFileSize:1024*1024, //大小限制1M
        sizeErrorStr:"上传文件不能大于1M",
        dragDropStr: "<span><b>附件拖放于此</b></span>",
        showFileCounter:false,
        returnType:"json",  //返回数据格式为json
        onSuccess:function(files,data,xhr,pd)  //上传成功事件，data为后台返回数据
        {
            //将返回的上传文件id动态加入的表单中，用于提交表单时返回给后台。
            var newsform = $("#newsform");
            alert(data.status);
            if( data.status=="SUCCESS"){
                for( var i=0;i<data.data.length;i++){
                    var inputNode='<input type="hidden" id="'+data.data[i].fileId+'" name="fileIds" value="'+data.data[i].fileId+'" >';
                    newsform.append(inputNode);
                }
                bootbox.alert("上传成功")
            }else{
                alert("上传失败");
            }
        },
        showDelete: true,//删除按钮
        statusBarWidth:600,
        dragdropWidth:600,
        //删除按钮执行的方法
        deleteCallback: function (data, pd) {
            var fileId=data.data[0].fileId;
            $.post("control/news/deleteFile.action", {fileId:fileId},
                function (resp,textStatus, jqXHR) {
                    alert("delete ok");
                    //alert(textSatus);
                });
            //删除input标签
            $("#"+fileId).remove();
            pd.statusbar.hide(); //You choice.
        }
    });
});