const json = {
  accounts: [
    {
      acctName: 'Test',
      acctNumber: 23423423,
      contacts: [
        {
          lastName: 'Doe',
          firstName: 'John'
        }
      ]
    }
  ]
};

//accounts:contacts:firstName

const getName = (json, path) => {
  const pathParts = path.split(':');
  _.forEach(pathParts, (part) => {
    if (json[part]) {
      if (_.isArray(json[part])) {
        _.forEach(json[part], (arrEl) => {
          if (_.isObject(arrEl)) {
            //look at next pathParts    
            //json = json[part];
          } else {
            return;
          }
        });
      }
    } else {
      return;
    }
  });
};

//output: traverse and find a value