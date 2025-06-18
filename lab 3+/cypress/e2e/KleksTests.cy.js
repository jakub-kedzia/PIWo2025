beforeEach(() => {
  cy.visit("http://localhost:5173/", {
    onBeforeLoad(win) {
      const testUser = {
        uid: "THW8leCxqsToVpmYll3IYbMHNV53",
        displayName: "Jakub Kędzia",
      };
      win.localStorage.setItem("user", JSON.stringify(testUser));
    },
  });
});

it("filters books by name", () => {
  cy.get(".search-bar").type("Alicja");
  cy.contains("Alicja w Krainie Czarów").should("exist");
  cy.get(".book-tile").should("have.length", 1);
});

it("user can access books added by themselves", () => {
  cy.get('[name="myBooks"]').click();
  cy.url().should("include", "/my-books");
  cy.get(".book-tile").should("exist");
});

it("allows adding a book", () => {
  cy.contains("Dodaj książkę").click();
  cy.url().should("include", "/new-book");
  cy.get('input[name="title"]').type("W Pustyni i w Puszczy");
  cy.get('input[name="author"]').type("Henryk Sienkiewicz");
  cy.get('input[name="price"]').type("25.99");
  cy.contains("Dodaj").click();
  cy.wait(1000);
  cy.visit("http://localhost:5173/my-books");
  cy.contains("W Pustyni i w Puszczy").should("exist");
});

//THW8leCxqsToVpmYll3IYbMHNV53
