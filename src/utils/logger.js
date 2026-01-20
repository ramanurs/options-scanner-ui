/**
 * Logger Utility
 * Provides structured logging with different log levels
 */

import { apiConfig } from '../config/apiConfig';

const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const COLORS = {
  debug: '#7f8c8d',
  info: '#3498db',
  warn: '#f39c12',
  error: '#e74c3c',
};

class Logger {
  constructor() {
    this.currentLevel = LOG_LEVELS[apiConfig.logLevel] || 0;
  }

  shouldLog(level) {
    return LOG_LEVELS[level] >= this.currentLevel;
  }

  formatMessage(level, message, data) {
    const timestamp = new Date().toISOString();
    return {
      timestamp,
      level: level.toUpperCase(),
      message,
      data,
    };
  }

  debug(message, data = null) {
    if (this.shouldLog('debug')) {
      const formatted = this.formatMessage('debug', message, data);
      console.log(
        `%c[${formatted.timestamp}] ${formatted.level}: ${formatted.message}`,
        `color: ${COLORS.debug}; font-weight: bold;`,
        data || ''
      );
    }
  }

  info(message, data = null) {
    if (this.shouldLog('info')) {
      const formatted = this.formatMessage('info', message, data);
      console.log(
        `%c[${formatted.timestamp}] ${formatted.level}: ${formatted.message}`,
        `color: ${COLORS.info}; font-weight: bold;`,
        data || ''
      );
    }
  }

  warn(message, data = null) {
    if (this.shouldLog('warn')) {
      const formatted = this.formatMessage('warn', message, data);
      console.warn(
        `%c[${formatted.timestamp}] ${formatted.level}: ${formatted.message}`,
        `color: ${COLORS.warn}; font-weight: bold;`,
        data || ''
      );
    }
  }

  error(message, data = null) {
    if (this.shouldLog('error')) {
      const formatted = this.formatMessage('error', message, data);
      console.error(
        `%c[${formatted.timestamp}] ${formatted.level}: ${formatted.message}`,
        `color: ${COLORS.error}; font-weight: bold;`,
        data || ''
      );
    }
  }
}

export const logger = new Logger();
export default logger;
