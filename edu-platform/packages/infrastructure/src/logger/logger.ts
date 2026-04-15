type LogLevel = 'info' | 'warn' | 'error';

class Logger {
    log(level: LogLevel, message: string, meta?: unknown) {
        const log = {
            level,
            message,
            meta,
            timestamp: new Date().toISOString(),
        };

        if (level === 'error') {
            console.error(JSON.stringify(log));
            return;
        }

        if (level === 'warn') {
            console.warn(JSON.stringify(log));
            return;
        }

        console.log(JSON.stringify(log));
    }

    info(message: string, meta?: unknown) {
        this.log('info', message, meta);
    }

    warn(message: string, meta?: unknown) {
        this.log('warn', message, meta);
    }

    error(message: string, meta?: unknown) {
        this.log('error', message, meta);
    }
}

export const logger = new Logger();