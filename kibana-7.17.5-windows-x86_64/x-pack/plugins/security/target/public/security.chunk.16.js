/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.security_bundle_jsonpfunction=window.security_bundle_jsonpfunction||[]).push([[16],{308:function(e,t,s){"use strict";s.r(t),s.d(t,"RolesGridPage",(function(){return roles_grid_page_RolesGridPage}));var a=s(24),o=s.n(a),n=s(1),l=s.n(n),i=s(4),r=s(17),c=s.n(r),d=s(3),u=s.n(d),m=s(2),g=s(8),j=s(10),b=s(25),p=s(76),h=s(0);class confirm_delete_ConfirmDelete extends d.Component{constructor(e){super(e),l()(this,"onConfirmDelete",(()=>{this.setState({deleteInProgress:!0},(()=>{this.deleteRoles()}))})),l()(this,"deleteRoles",(async()=>{const{rolesToDelete:e,callback:t,rolesAPIClient:s,notifications:a}=this.props,o=[],n=e.map((e=>(async()=>{try{await s.deleteRole(e),a.toasts.addSuccess(m.i18n.translate("xpack.security.management.roles.confirmDelete.roleSuccessfullyDeletedNotificationMessage",{defaultMessage:"Deleted role {roleName}",values:{roleName:e}}))}catch(t){o.push(e),a.toasts.addDanger(m.i18n.translate("xpack.security.management.roles.confirmDelete.roleDeletingErrorNotificationMessage",{defaultMessage:"Error deleting role {roleName}",values:{roleName:e}}))}})()));await Promise.all(n),t(e,o)})),this.state={deleteInProgress:!1}}render(){const{rolesToDelete:e}=this.props,t=e.length>1,s=m.i18n.translate("xpack.security.management.roles.deleteRoleTitle",{defaultMessage:"Delete role{value, plural, one {{roleName}} other {s}}",values:{value:e.length,roleName:` ${e[0]}`}});return Object(h.jsx)(i.EuiModal,{onClose:this.props.onCancel},Object(h.jsx)(i.EuiModalHeader,null,Object(h.jsx)(i.EuiModalHeaderTitle,{"data-test-subj":"confirmModalTitleText"},s)),Object(h.jsx)(i.EuiModalBody,null,Object(h.jsx)(i.EuiText,null,t?Object(h.jsx)(d.Fragment,null,Object(h.jsx)("p",null,Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.confirmDelete.removingRolesDescription",defaultMessage:"You are about to delete these roles:"})),Object(h.jsx)("ul",null,e.map((e=>Object(h.jsx)("li",{key:e},e))))):null,Object(h.jsx)("p",null,Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.deletingRolesWarningMessage",defaultMessage:"You can't undo this operation."})))),Object(h.jsx)(i.EuiModalFooter,null,Object(h.jsx)(i.EuiButtonEmpty,{"data-test-subj":"confirmModalCancelButton",onClick:this.props.onCancel,isDisabled:this.state.deleteInProgress},Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.confirmDelete.cancelButtonLabel",defaultMessage:"Cancel"})),Object(h.jsx)(i.EuiButton,{"data-test-subj":"confirmModalConfirmButton",onClick:this.onConfirmDelete,fill:!0,color:"danger",isLoading:this.state.deleteInProgress},Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.confirmDelete.deleteButtonLabel",defaultMessage:"Delete"}))))}}const x=()=>Object(h.jsx)(i.EuiPageContent,{verticalPosition:"center",horizontalPosition:"center",color:"danger"},Object(h.jsx)(i.EuiEmptyPrompt,{iconType:"securityApp",title:Object(h.jsx)("h2",null,Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.deniedPermissionTitle",defaultMessage:"You need permission to manage roles"})),body:Object(h.jsx)("p",{"data-test-subj":"permissionDeniedMessage"},Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.noPermissionToManageRolesDescription",defaultMessage:"Contact your system administrator."}))})),f=(e,t)=>`/${e}${t?`/${encodeURIComponent(t)}`:""}`;class roles_grid_page_RolesGridPage extends d.Component{constructor(e){super(e),l()(this,"getPageContent",(()=>{const{roles:e}=this.state;return Object(h.jsx)(u.a.Fragment,null,Object(h.jsx)(i.EuiPageHeader,{bottomBorder:!0,pageTitle:Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.roleTitle",defaultMessage:"Roles"}),description:Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.subtitle",defaultMessage:"Apply roles to groups of users and manage permissions across the stack."}),rightSideItems:[Object(h.jsx)(i.EuiButton,o()({"data-test-subj":"createRoleButton"},Object(j.reactRouterNavigate)(this.props.history,f("edit")),{fill:!0,iconType:"plusInCircleFilled"}),Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.createRoleButtonLabel",defaultMessage:"Create role"}))]}),Object(h.jsx)(i.EuiSpacer,{size:"l"}),this.state.showDeleteConfirmation?Object(h.jsx)(confirm_delete_ConfirmDelete,{onCancel:this.onCancelDelete,rolesToDelete:this.state.selection.map((e=>e.name)),callback:this.handleDelete,notifications:this.props.notifications,rolesAPIClient:this.props.rolesAPIClient}):null,Object(h.jsx)(i.EuiInMemoryTable,{itemId:"name",responsive:!1,columns:this.getColumnConfig(),hasActions:!0,selection:{selectable:e=>!e.metadata||!e.metadata._reserved,selectableMessage:e=>e?"":"Role is reserved",onSelectionChange:e=>this.setState({selection:e})},pagination:{initialPageSize:20,pageSizeOptions:[10,20,30,50,100]},items:this.state.visibleRoles,loading:0===e.length,search:{toolsLeft:this.renderToolsLeft(),toolsRight:this.renderToolsRight(),box:{incremental:!0,"data-test-subj":"searchRoles"},onChange:e=>{this.setState({filter:e.queryText,visibleRoles:this.getVisibleRoles(this.state.roles,e.queryText,this.state.includeReservedRoles)})}},sorting:{sort:{field:"name",direction:"asc"}},rowProps:()=>({"data-test-subj":"roleRow"}),isSelectable:!0}))})),l()(this,"getColumnConfig",(()=>[{field:"name",name:m.i18n.translate("xpack.security.management.roles.nameColumnName",{defaultMessage:"Role"}),sortable:!0,truncateText:!0,render:(e,t)=>Object(h.jsx)(i.EuiText,{color:"subdued",size:"s"},Object(h.jsx)(i.EuiLink,o()({"data-test-subj":"roleRowName"},Object(j.reactRouterNavigate)(this.props.history,f("edit",e))),e))},{field:"metadata",name:m.i18n.translate("xpack.security.management.roles.statusColumnName",{defaultMessage:"Status"}),sortable:e=>Object(b.g)(e)&&!Object(b.f)(e),render:(e,t)=>this.getRoleStatusBadges(t)},{name:m.i18n.translate("xpack.security.management.roles.actionsColumnName",{defaultMessage:"Actions"}),width:"150px",actions:[{available:e=>!Object(b.h)(e),render:e=>{const t=m.i18n.translate("xpack.security.management.roles.editRoleActionName",{defaultMessage:"Edit {roleName}",values:{roleName:e.name}});return Object(h.jsx)(i.EuiButtonIcon,o()({"aria-label":t,"data-test-subj":`edit-role-action-${e.name}`,title:t,color:"primary",iconType:"pencil"},Object(j.reactRouterNavigate)(this.props.history,f("edit",e.name))))}},{available:e=>!Object(b.i)(e),render:e=>{const t=m.i18n.translate("xpack.security.management.roles.cloneRoleActionName",{defaultMessage:"Clone {roleName}",values:{roleName:e.name}});return Object(h.jsx)(i.EuiButtonIcon,o()({"aria-label":t,"data-test-subj":`clone-role-action-${e.name}`,title:t,color:"primary",iconType:"copy"},Object(j.reactRouterNavigate)(this.props.history,f("clone",e.name))))}}]}])),l()(this,"getVisibleRoles",((e,t,s)=>e.filter((e=>{const a=`${e.name}`.toLowerCase(),o=t.toLowerCase();return-1!==a.indexOf(o)&&(s||!Object(b.i)(e))})))),l()(this,"onIncludeReservedRolesChange",(e=>{this.setState({includeReservedRoles:e.target.checked,visibleRoles:this.getVisibleRoles(this.state.roles,this.state.filter,e.target.checked)})})),l()(this,"getRoleStatusBadges",(e=>{const t=Object(b.g)(e),s=Object(b.f)(e),a=Object(b.i)(e),o=[];return t||o.push(Object(h.jsx)(p.b,{"data-test-subj":"roleDisabled"})),a&&o.push(Object(h.jsx)(p.d,{"data-test-subj":"roleReserved",tooltipContent:Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.reservedRoleBadgeTooltip",defaultMessage:"Reserved roles are built-in and cannot be edited or removed."})})),s&&o.push(Object(h.jsx)(p.a,{"data-test-subj":"roleDeprecated",tooltipContent:Object(b.c)(e)})),Object(h.jsx)(i.EuiFlexGroup,{gutterSize:"s"},o.map(((e,t)=>Object(h.jsx)(i.EuiFlexItem,{key:t,grow:!1},e))))})),l()(this,"handleDelete",(()=>{this.setState({selection:[],showDeleteConfirmation:!1}),this.loadRoles()})),l()(this,"onCancelDelete",(()=>{this.setState({showDeleteConfirmation:!1})})),this.state={roles:[],visibleRoles:[],selection:[],filter:"",showDeleteConfirmation:!1,permissionDenied:!1,includeReservedRoles:!0}}componentDidMount(){this.loadRoles()}render(){const{permissionDenied:e}=this.state;return e?Object(h.jsx)(x,null):this.getPageContent()}async loadRoles(){try{const e=await this.props.rolesAPIClient.getRoles();this.setState({roles:e,visibleRoles:this.getVisibleRoles(e,this.state.filter,this.state.includeReservedRoles)})}catch(e){403===c.a.get(e,"body.statusCode")?this.setState({permissionDenied:!0}):this.props.notifications.toasts.addDanger(m.i18n.translate("xpack.security.management.roles.fetchingRolesErrorMessage",{defaultMessage:"Error fetching roles: {message}",values:{message:c.a.get(e,"body.message","")}}))}}renderToolsLeft(){const{selection:e}=this.state;if(0===e.length)return;const t=e.length;return Object(h.jsx)(i.EuiButton,{"data-test-subj":"deleteRoleButton",color:"danger",onClick:()=>this.setState({showDeleteConfirmation:!0})},Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.deleteSelectedRolesButtonLabel",defaultMessage:"Delete {numSelected} role{numSelected, plural, one { } other {s}}",values:{numSelected:t}}))}renderToolsRight(){return Object(h.jsx)(i.EuiSwitch,{"data-test-subj":"showReservedRolesSwitch",label:Object(h.jsx)(g.FormattedMessage,{id:"xpack.security.management.roles.showReservedRolesLabel",defaultMessage:"Show reserved roles"}),checked:this.state.includeReservedRoles,onChange:this.onIncludeReservedRolesChange})}}},76:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return r})),s.d(t,"c",(function(){return c})),s.d(t,"d",(function(){return d}));var a=s(4),o=(s(3),s(8)),n=s(0);const l=e=>e.tooltipContent?Object(n.jsx)(a.EuiToolTip,{content:e.tooltipContent},e.children):e.children,i=e=>Object(n.jsx)(l,{tooltipContent:e.tooltipContent},Object(n.jsx)(a.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"warning"},Object(n.jsx)(o.FormattedMessage,{id:"xpack.security.management.deprecatedBadge",defaultMessage:"Deprecated"}))),r=e=>Object(n.jsx)(l,{tooltipContent:e.tooltipContent},Object(n.jsx)(a.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"hollow"},Object(n.jsx)(o.FormattedMessage,{id:"xpack.security.management.disabledBadge",defaultMessage:"Disabled"}))),c=e=>Object(n.jsx)(l,{tooltipContent:e.tooltipContent},Object(n.jsx)(a.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"secondary"},Object(n.jsx)(o.FormattedMessage,{id:"xpack.security.management.enabledBadge",defaultMessage:"Enabled"}))),d=e=>Object(n.jsx)(l,{tooltipContent:e.tooltipContent},Object(n.jsx)(a.EuiBadge,{"data-test-subj":e["data-test-subj"],color:"primary"},Object(n.jsx)(o.FormattedMessage,{id:"xpack.security.management.reservedBadge",defaultMessage:"Reserved"})))}}]);