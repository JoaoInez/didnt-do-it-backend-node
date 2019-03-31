const Union = {
  SignUpResult: {
    __resolveType(_, ctx, info) {
      if (_.id || _.username || _.email) {
        return 'User'
      }
      if (_.message) {
        return 'SignUpMessage'
      }
      return null
    }
  }
}

export default Union
