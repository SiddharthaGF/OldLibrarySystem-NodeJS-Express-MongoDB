context("PUT author", () => {
  it("PUTS an author", () => {
    cy.request("POST", "http://localhost:3000/api/v1/author",// indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
      {
        name: 'José',
        lastname: 'López',
        bibliographic: 'Tampoco he hecho nada con mi vida'
      }
    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.length).to.be.greaterThan(0)
    })
  })
})
