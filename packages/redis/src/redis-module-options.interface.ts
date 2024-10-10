import { RedisOptions } from "ioredis";

import { Cluster as IORedisCluster, Redis as IORedisClient } from "ioredis";
declare type Client = IORedisClient | IORedisCluster;

export interface RedisModuleOptions extends RedisOptions {}
