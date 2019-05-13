module.exports = params => {
  let count = 0;
  const { username } = params;
  console.log(username);

  Dashpad.showToast({
    message: 'hello '+ username
  })
  setInterval(() => {
    if (count < 1000) {
      count = count + 1;
    } else {
      Dashpad.exit();
    }
    let date = new Date();
    // const action = {
    //     type: 'SHOW_TOAST',
    //     payload: {   message: 'hahahaha' },
    // };
    // process.send(action);
    // Dashpad.showToast({
    //     message: 'hahahaha'
    // });
    Dashpad.setVars([
      {
        keyPath: 'header',
        value: username + ':' + date.getMilliseconds()
      },
      {
        keyPath: 'progress',
        value: count
      }
    ]);
    //Dashpad.settings.set('test', count);

  }, 420);
};
