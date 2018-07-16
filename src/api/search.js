export default {
  search(q) {
    return this.$req({
      url: `/search?q=${q}`
    })
  },
}
