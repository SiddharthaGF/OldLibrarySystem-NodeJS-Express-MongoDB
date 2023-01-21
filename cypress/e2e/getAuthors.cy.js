context("GET authors", () => {
  it("gets a list of authors", () => {
    cy.request("GET", "http://localhost:3000/api/v1/authors").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(0)
    })
  })
})
