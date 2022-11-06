"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenshots = void 0;

var _ = require("../");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/**
 * Resize the viewport to contain the element to capture.
 *
 * @async
 * @param {HeadlessChromiumDriver} browser - used for its methods to control the page
 * @param {ElementsPositionAndAttribute['position']} position - position data for the element to capture
 * @param {Layout} layout - used for client-side layout data from the job params
 * @param {Logger} logger
 */


const resizeViewport = async (browser, position, layout, logger) => {
  const {
    boundingClientRect,
    scroll
  } = position; // Using width from the layout is preferred, it avoids the elements moving around horizontally,
  // which would invalidate the position data that was passed in.

  const width = layout.width || boundingClientRect.left + scroll.x + boundingClientRect.width;
  await browser.setViewport({
    width,
    height: boundingClientRect.top + scroll.y + boundingClientRect.height,
    zoom: layout.getBrowserZoom()
  }, logger);
};
/**
 * Get screenshots of multiple areas of the page
 *
 * @async
 * @param {HeadlessChromiumDriver} browser - used for its methods to control the page
 * @param {Logger} logger
 * @param {ElementsPositionAndAttribute[]} elementsPositionAndAttributes[] - position data about all the elements to capture
 * @param {Layout} layout - used for client-side layout data from the job params
 * @returns {Promise<Screenshot[]>}
 */


const getScreenshots = async (browser, layout, elementsPositionAndAttributes, logger) => {
  logger.info(`taking screenshots`);
  const screenshots = [];

  for (let i = 0; i < elementsPositionAndAttributes.length; i++) {
    const endTrace = (0, _.startTrace)('get_screenshots', 'read');
    const item = elementsPositionAndAttributes[i];
    await resizeViewport(browser, item.position, layout, logger);
    const data = await browser.screenshot(item.position);

    if (!(data !== null && data !== void 0 && data.byteLength)) {
      throw new Error(`Failure in getScreenshots! Screenshot data is void`);
    }

    screenshots.push({
      data,
      title: item.attributes.title,
      description: item.attributes.description
    });
    endTrace();
  }

  logger.info(`screenshots taken: ${screenshots.length}`);
  return screenshots;
};

exports.getScreenshots = getScreenshots;