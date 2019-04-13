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
  LogInResult: {
    __resolveType(_: any) {
      if (_.id || _.username || _.email) {
        return 'User'
      }
      if (_.message) {
        return 'LogInMessage'
      }
      return null
    }
  },
  CreateTodoResult: {
    __resolveType(_: any) {
      if (_.id || _.task || _.completed) {
        return 'Todo'
      }
      if (_.message) {
        return 'CreateTodoMessage'
      }
      return null
    }
  },
  CompleteTodoResult: {
    __resolveType(_: any) {
      if (_.id || _.task || _.completed) {
        return 'Todo'
      }
      if (_.message) {
        return 'CompleteTodoMessage'
      }
      return null
    }
  }
}

export default Union
