function sleep(time) {
  const start = new Date()
  while (new Date() - start < time * 1000) {
    // do nothing && block the main thread 😈
  }
}
