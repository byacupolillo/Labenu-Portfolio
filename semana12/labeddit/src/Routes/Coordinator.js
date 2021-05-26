export const goToLogin = (history) => {
    history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/register')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goToPostDetails = (history, id) => {
    history.push(`/posts/${id}`)
}