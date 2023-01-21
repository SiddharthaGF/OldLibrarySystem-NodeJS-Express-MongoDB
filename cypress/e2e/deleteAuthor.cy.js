context("DELETE author", () => {
  it("DELETES an author", () => {
    cy.request("DELETE", "http://localhost:3000/api/v1/author/63ca88c61497e9a5b601a170").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(0)
    })
  })
})