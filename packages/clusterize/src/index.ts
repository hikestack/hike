import * as _cluster from 'cluster';
import * as os from 'os';

const cluster = _cluster as unknown as _cluster.Cluster;

export default (callback: Function, instances: number = os.cpus().length) => {
    if (cluster.isPrimary) {
        for (let i = 0; i < instances; i++) {
            cluster.fork();
        }
        cluster.on('exit', () => {
            cluster.fork();
        });
    } else {
        callback();
    }
}