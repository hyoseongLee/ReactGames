// 로그 관리 유틸리티
// 개발 환경에서만 로그를 출력하고, 프로덕션에서는 출력하지 않음

const isDevelopment = process.env.NODE_ENV === 'development';

class Logger {
  log(...args) {
    if (isDevelopment) {
      console.log('[LOG]', ...args);
    }
  }

  info(...args) {
    if (isDevelopment) {
      console.info('[INFO]', ...args);
    }
  }

  warn(...args) {
    if (isDevelopment) {
      console.warn('[WARN]', ...args);
    }
  }

  error(...args) {
    if (isDevelopment) {
      console.error('[ERROR]', ...args);
    }
  }

  debug(...args) {
    if (isDevelopment) {
      console.debug('[DEBUG]', ...args);
    }
  }

  // 특정 컴포넌트나 기능별 로거 생성
  createLogger(namespace) {
    return {
      log: (...args) => this.log(`[${namespace}]`, ...args),
      info: (...args) => this.info(`[${namespace}]`, ...args),
      warn: (...args) => this.warn(`[${namespace}]`, ...args),
      error: (...args) => this.error(`[${namespace}]`, ...args),
      debug: (...args) => this.debug(`[${namespace}]`, ...args),
    };
  }
}

const logger = new Logger();

export default logger;