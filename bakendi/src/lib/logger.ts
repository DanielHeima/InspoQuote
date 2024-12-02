
export interface ILogger {
  info: (...messages: unknown[]) => void;
  warn: (...messages: unknown[]) => void;
  error: (...messages: unknown[]) => void;
}

export class Logger implements ILogger {
  private silent: boolean;
  
  constructor(silent = false) {
    this.silent = silent;
  }
  
  info(...messages: unknown[]) {
    if (this.silent) {
      return;
    }
    console.info(prefix('info'), ...messages);
  }
  
  warn(...messages: unknown[]) {
    if (this.silent) {
      return;
    }
    console.warn(prefix('warn'),...messages);
  }
  
  error(...messages: unknown[]) {
    if (this.silent) {
      return;
    }
    console.error(prefix('error'),...messages);
  }
}

const prefix = (logType: 'info'|'warn'|'error'): string => { 
  const now = new Date();
  
  return `[${logType.toUpperCase()}] ${now.toLocaleDateString()} ${now.toLocaleTimeString()}]`;
}

export const logger: ILogger = new Logger();
