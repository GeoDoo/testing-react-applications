import { user } from './../__test-data__/db.json'

const getToken = async (username, password) => {
  if (username === user.email && password === user.password) {
    return 'aljdasdIAD(£($*ASHFASDJKSDIASD*@£HN@£JACIAIDAHSDAJDJASD'
  }

  return ''
}

export default {
  getToken,
}
