/* global describe, it, browser */
const expect = require('chai').expect;

describe('TodoList App', () => {
  it('should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.equal('Todo List');
  });

  // it('Should allow me to create a Todo', () => {
  //   const todoText = "Finish the tech test";
  //   browser.url('http://localhost:3000/');
  //   browser.element('.todo-input').setValue(todoText);
  //   browser.click('.todo-submit');
  //   const actual = browser.element('.todo-text').getText();
  //
  //   expect(actual).to.equal(todoText);
  // });
});
