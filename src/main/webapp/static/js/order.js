$(function () {
    handleJqgrid
});

var right_click_rowId = 0;
var handleJqgrid = function () {
    $.jgrid.defaults.styleUI = 'Bootstrap';
    jQuery("#rowed3").jqGrid(
        {
            height: 550,
            colNames: ['ID', '订单号', '订单时间', '业务员','状态', '备注'],
            colModel: [{
                name: 'id',
                index: 'id',
                sortable: true,
                hidden: true,
                width: 55
            }, {
                name: 'preshrinkNo',
                index: 'preshrinkNo',
                sortable: true,
                width: 100,
                editable: true,

            }, {
                name: 'shrinkageNo',
                index: 'shrinkageNo',
                editable: true,
                width: 100,
            }, {
                name: 'gdDate',
                index: 'gdDate',
                width: 80,
                editable: true,
            }, {
                name: 'lbNo',
                index: 'lbNo',
                width: 80,
                editable: true,
            }, {
                name: 'expectFinishDate',
                index: 'expectFinishDate',
                width: 100,
                editable: true,
            },{
                name: 'preshrinkAmount',
                index: 'preshrinkAmount',
                width: 100,
                editable: true,
            },  {
                name: 'temp',
                index: 'temp',
                width: 100,
                editable: true,
            }, {
                name: 'decision',
                index: 'decision',
                width: 100,
                editable: true,
            }
                , {
                    name: 'remark',
                    index: 'rem1ark',
                    width: 100,
                    editable: true,
                }
            ],
            url: $("#PageUrl").val() + '/FabricPreShrink/list',
            datatype: "json",
            postData: {
                'local': $('#location').val()
            },
            mtype: "post",
            rowNum: 30,
            // cellEdit:true,
            rowList: [30, 50, 100],
            jsonReader: {// 分页的关键
                id: "id",
                root: "result", total: "total", page: "page", records: "records", repeatitems: false
            },
            pager: '#prowed3',
            sortname: 'id',
            viewrecords: true,
            sortorder: "desc",
            editurl: $("#PageUrl").val() + "/FabricPreShrink/saveOrUpdate",
            caption: "预缩申请表",
            autowidth: true,
            rownumbers: true,
            rownumWidth: 60,
            shrinkToFit: true,
            autoScroll: true,
            onRightClickRow: function (rowid, iRow, iCol, e) {
                right_click_rowId = rowid;
            },

        }
    );
};