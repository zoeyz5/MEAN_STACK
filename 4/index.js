source = [
  ["Foley", "Chemicals", "CHEM"],
  ["Foley", "Chemicals", "CTO"],
  ["Foley", "Chemicals", "LK"],
  ["Foley", "Chemicals", "R8"],
  ["Foley", "Chemicals", "WT"],
  ["Foley", "Finishing", "LB2"],
  ["Foley", "Finishing", "LB4"],
  ["Foley", "Finishing", "RW1"],
  ["Foley", "Finishing", "RW2"],
  ["Foley", "Line 3", "LN3"],
  ["Foley", "Line 3", "Production Process"],
  ["Foley", "Line 4", "LN4"],
  ["Foley", "Line 4", "Prod Process"],
  ["Foley", "Mill General", "Wastewater Treatment"],
  ["Foley", "Powerhouse", "BB1"],
  ["Foley", "Powerhouse", "BB2"],
  ["Foley", "Powerhouse", "EV5"],
  ["Foley", "Powerhouse", "FWE"],
  ["Foley", "Powerhouse", "PB1"],
  ["Foley", "Powerhouse", "PB2"],
  ["Foley", "Powerhouse", "RB2"],
  ["Foley", "Powerhouse", "RB3"],
  ["Foley", "Powerhouse", "RB4"],
  ["Foley", "Powerhouse", "TG2"],
  ["Foley", "Powerhouse", "TG3"],
  ["Foley", "Powerhouse", "TG4"],
];

const addChild = (parent, Childname) => {
  let c = parent.find((c) => c.name === Childname);
  if (!c) {
    c = { name: Childname, children: [] };
    parent.push(c);
  }
  return c;
};

const res = [];

source.forEach(([parent, child, grandchild]) => {
  const p = addChild(res, parent);
  const c = addChild(p.children, child);
  addChild(c.children, grandchild);
});

console.log(JSON.stringify(res, null, 2));
