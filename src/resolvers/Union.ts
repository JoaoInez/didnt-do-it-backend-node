const Union = {
  SignUpResult: {
    __resolveType(_: any) {
      if (_.id || _.username || _.email) {
        return 'User'
      }
      if (_.message) {
        return 'SignUpMessage'
      }
      return null
    }
  },
  CreateTodoResult: {
    __resolveType(_: any) {
      if (_.task || _.completed) {
        return 'Todo'
      }
      if (_.message) {
        return 'CreateTodoMessage'
      }
      return null
    }
  }
}

export default Union
