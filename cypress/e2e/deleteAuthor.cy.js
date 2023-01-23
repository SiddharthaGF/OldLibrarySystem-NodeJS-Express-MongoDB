context("DELETE author", () => {
  it("DELETES an author", () => {
    cy.request("DELETE", "http://localhost:3000/api/v1/author/63ca882db0cc2236e6a994c4").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.deletedCount).to.be.eq(1)
    })
  })
})