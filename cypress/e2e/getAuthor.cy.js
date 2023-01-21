context("GET author", () => {
  it("gets an author", () => {
    cy.request("GET", "http://localhost:3000/api/v1/author/63c9ee21661714b479082576").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(0)
    })
  })
})
