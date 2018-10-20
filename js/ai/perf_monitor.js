class PerfMonitor {
  constructor() {
    this.mainSearchNodes = 0;
    this.qSearchNodes = 0;
    this.tableHits = 0;
  }

  setStartTime() {
    this.startTime = new Date();
  }

  setEndTime() {
    this.endTime = new Date();
  }

  setDepth(depth) {
    this.depth = depth;
  }

  printResults() {
    console.log('---------');

    if (this.startTime && this.endTime) {
      console.log(`Run Time: ${this.endTime - this.startTime}`);
    }

    console.log(`Depth:  ${this.depth}`);
    console.log(`Total Explored Positions: ${this.qSearchNodes + this.mainSearchNodes}`);
    console.log(`Main Search Nodes: ${this.mainSearchNodes}`);
    console.log(`Quiescent Search Nodes: ${this.qSearchNodes}`);
    console.log(`Table Hits: ${this.tableHits}`);

    console.log('---------');
  }

  logTableHit() {
    this.tableHits++;
  }

  logMainSearchNode() {
    this.mainSearchNodes++;
  }

  logQuiescentNode() {
    this.qSearchNodes++;
  }
}

module.exports = PerfMonitor;
