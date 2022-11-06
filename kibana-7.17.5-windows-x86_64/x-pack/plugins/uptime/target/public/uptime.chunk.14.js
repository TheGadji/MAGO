/*! Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one or more contributor license agreements. 
 * Licensed under the Elastic License 2.0; you may not use this file except in compliance with the Elastic License 2.0. */
(window.uptime_bundle_jsonpfunction=window.uptime_bundle_jsonpfunction||[]).push([[14],{216:function(e,t,i){"use strict";i.r(t),i.d(t,"validateMonitorStatusParams",(function(){return o}));var r=i(116),n=i(67),a=i(114);function o(e){var t,i;const o={},u=a.a.decode(e),s=a.d.decode(e),c=a.c.decode(e);if(!Object(n.isRight)(u)&&!Object(n.isRight)(s)&&!Object(n.isRight)(c))return{errors:{typeCheckFailure:"Provided parameters do not conform to the expected type.",typeCheckParsingMessage:r.PathReporter.report(u)}};if(!(null!==(t=e.shouldCheckAvailability)&&void 0!==t&&t||null!==(i=e.shouldCheckStatus)&&void 0!==i&&i))return{errors:{noAlertSelected:"Alert must check for monitor status or monitor availability."}};if(Object(n.isRight)(u)&&u.right.shouldCheckStatus){const{numTimes:e,timerangeCount:t}=u.right;e<1&&(o.invalidNumTimes="Number of alert check down times must be an integer greater than 0"),isNaN(t)&&(o.timeRangeStartValueNaN="Specified time range value must be a number"),t<=0&&(o.invalidTimeRangeValue="Time range value must be greater than 0")}return{errors:o}}}}]);