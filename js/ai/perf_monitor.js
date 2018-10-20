class PerfMonitor {
  constructor(initBranchCount) {
    this.exploredNodes = 0;
    this.tableHits = 0;
    this.initBranchCount = initBranchCount;
  }

  setStartTime() {
    this.startTime = new Date();
  }

  setEndTime() {
    this.endTime = new Date();
  }

  setDepth(depth) {
    // console.log('setting depth');
    this.depth = depth;
  }

  printResults() {
    console.log('---------');

    if (this.startTime && this.endTime) {
      console.log(`Run Time: ${this.endTime - this.startTime}`);
    }

    console.log(`Depth:  ${this.depth}`);
    console.log(`Explored Positions: ${this.exploredNodes}`);
    console.log(`Pruned Positions est.: ${Math.pow(this.initBranchCount, this.depth) - this.exploredNodes}`);
    console.log(`Table Hits: ${this.tableHits}`);

    console.log('---------');
  }

  calculatePrunedPercentage() {
    const percentAnalyzed = this.exploredNodes / Math.pow(this.initBranchCount, this.depth);
    return Math.round((1 - percentAnalyzed) * 100);
  }

  logTableHit() {
    this.tableHits++;
  }

  logExploredNode() {
    this.exploredNodes++;
  }
}

module.exports = PerfMonitor;
