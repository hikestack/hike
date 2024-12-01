import { registerAs } from '@nestjs/config';
import kleur from 'kleur';
import winston, { format } from 'winston';

const colors = {
    info: kleur.green,
    warn: kleur.yellow,
    error: kleur.red,
};

export default registerAs<winston.LoggerOptions>('logger', () => ({
    level: 'info',
    format: format.combine(
        format.label({ label: 'Hike' }),
        format.splat(),
        format.ms(),
        format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        format.printf(({ label, timestamp, level, message, ms, ...splat }: any) => {
            const colorizeLevel = colors[level](level.toUpperCase());
            const colorizeMessage = colors[level](message);
            const context = (splat[Symbol.for('splat')] || []).map(item => String(item)).join(', ');
            return `${kleur.green(`[${label}] ${process.pid}  -`)} ${timestamp}     ${colorizeLevel} ${context ? `${kleur.cyan(`[${context}]`)} ` : ''}${colorizeMessage} ${ms ? kleur.yellow(ms) : ''}`;
        }),
    ),
    transports: [new winston.transports.Console()],
}));
