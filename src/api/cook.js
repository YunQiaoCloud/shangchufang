export default {
  getCookDetail(id) {
    return this.$req({
      url: `/cook_detail/${id}`
    })
  }
}
