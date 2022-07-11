const randomID = () => {
  const chars =
    '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 30; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;

  // another layer of shaking-up

  // const arr = result.split('');
  // arr.sort();
  // const id = arr.join('');

  // return id;
};

export default randomID;
