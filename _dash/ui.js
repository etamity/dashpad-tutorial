const onTabsChange = () => {
  console.log('Tab Changed');
};

const commonFunc = something => {
  //Dashpad.setVars('header',  something);
  console.log(something);
};

const setTargetProps = ({ name, type, keyPath, obj }) => {
  const { label, position, brand } = obj;
  Dashpad.setVars([
    { keyPath: 'context.name', value: name },
    { keyPath: 'context.type', value: type },
    { keyPath: 'context.keyPath', value: keyPath },
    { keyPath: 'context.label', value: label },
    { keyPath: 'context.brand', value: brand },
    { keyPath: 'context.position', value: position }
  ]);
};

commonFunc('just loaded!!');
