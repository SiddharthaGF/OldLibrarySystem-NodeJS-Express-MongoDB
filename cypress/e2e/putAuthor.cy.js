context("POST author", () => {
  it("POST an author", () => {
    cy.request("POST", "http://localhost:3000/api/v1/author",
        {
        name: 'José',
        lastname: 'López',
        bibliographic: 'Tampoco he hecho nada con mi vida'
      }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.length).to.be.greaterThan(0)
    })
  })
})
