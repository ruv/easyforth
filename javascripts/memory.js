function Memory() {
  var variables = Object.create(null);
  var memArray = [];
  var _memPointer = 1000;

  function here() { // -- addr
    return _memPointer;
  }

  function allot(cells) {
    _memPointer += cells;
  }

  function newMemPointer() {
    return _memPointer++;
  }

  function addCreate( name, size_cells ) {
    const address = here();
    allot( size_cells );
    variables[name.toLowerCase()] = address;
    memArray[address];
    return getVariable(name);
  }

  function addVariable(name) {
    return addCreate(name, 1);
  }

  function getVariable(name) {
    return variables[name.toLowerCase()];
  }

  function setValue(address, value) {
    memArray[address] = value;
  }

  function getValue(address) {
    return memArray[address] || 0;
  }

  return {
    addCreate: addCreate,
    addVariable: addVariable,
    getVariable: getVariable,
    setValue: setValue,
    getValue: getValue,
    here: here,
    allot: allot
  };
}
