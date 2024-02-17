import express from 'express';

let _express = null;
let _port = null;

/**
 * Server class
 *
 * @param {Object} - { router, port }
 * @returns {Object} - Server
 */

export class Server {
  constructor({ router, port }) {
    _express = express().use(router);
    _port = port;
  }

  async start() {
    return new Promise((resolve) => {
      _express.listen(_port, () => {
        resolve(_port);
      });
    });
  }
}
