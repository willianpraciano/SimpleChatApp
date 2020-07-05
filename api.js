//Este arquivo vai ter todas as funções de acesso ao banco, como buscar, excluir, etc

import firebase from './databse';

const api = {
  findUserByName: async function (name){
    const user = await firebase.database()
      .ref('users')
      .orderByChild('name')
      .equalTo(name)
      .once('value');
    
    if(user.exists()){
      return Object.values(user.val())[0];
    }
    return null;
  },

  createUser: function(user){
    firebase.database().ref('users').push(user);
  },
}

export default api;