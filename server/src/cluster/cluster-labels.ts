import os from 'os';
import { ClusterForkOptions } from "../scrypted-cluster-main";

export function matchesClusterLabels(options: ClusterForkOptions, labels: string[]) {
    let matched = 0;
    for (const label of options?.labels?.require || []) {
        if (!labels.includes(label))
            return 0;
    }

    // if there is nothing in the any list, consider it matched
    let foundAny = !options?.labels?.any?.length;
    for (const label of options.labels?.any || []) {
        if (labels.includes(label)) {
            matched++;
            foundAny = true;
        }
    }
    if (!foundAny)
        return 0;

    for (const label of options?.labels?.prefer || []) {
        if (labels.includes(label))
            matched++;
    }
    // ensure non zero result.
    matched++;
    return matched;
}

export function getClusterLabels() {
    let labels = process.env.SCRYPTED_CLUSTER_LABELS?.split(',') || [];
    labels.push(process.arch, process.platform, os.hostname());
    labels = [...new Set(labels)];
    return labels;
}

export function needsClusterForkWorker(options: ClusterForkOptions) {
    return process.env.SCRYPTED_CLUSTER_ADDRESS
        && (!matchesClusterLabels(options, getClusterLabels()) || options.clusterWorkerId);
}
