[<#list ctrl.getPSDEGridColumns() as column>
<#if column_index gt 0>,</#if>{ "title" : '${column.caption}',"align":'center',"valign":'middle'<#if column.getWidthUnit()!='STAR'>,"width":${column.width}</#if>,"data" :'${column.getDataItemName()}'<#if column.isEnableSort()>,"orderable":true<#else>,"orderable":false</#if><#if ((column.getPSCodeList()??)&&(column.getPSCodeList().getCodeListType()=='STATIC')||(column.getRenderPSSysPFPlugin()??)||(column.getColumnType()=='UAGRIDCOLUMN'))>,'render':function(data,type,row){return me.render${ctrl.name}_${column.name?lower_case}(data,type,row,me);}</#if>}
</#list>
]