new IBizFormButton({id:this.getCId2()+'${item.uniqueId}',name:'${item.name}',form:form,actiontype:'${item.getActionType()}'<#if item.getPSUIAction()??><#assign uiaction=item.getPSUIAction()>,uiaction:{"type":"${uiaction.getUIActionType()}","tag":"${uiaction.getUIActionTag()}"<#if (uiaction.getActionTarget()!="")>,"actiontarget":"${uiaction.getActionTarget()}"</#if>}</#if><#if item.getPSDEFormItemUpdate()??>,fiupdate:{"tag":"${item.getPSDEFormItemUpdate().codeName}"}</#if>})