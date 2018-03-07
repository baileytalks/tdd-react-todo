const { expect } = require('chai').use(require('chai-style'));

describe('TodoList App', () => {
  it('should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.equal('Todo List | What do you want to do today?');
  });

  it('should allow me to create a Todo', () => {
    const todoText = 'Finish the tech test';
    browser.url('http://localhost:3000/');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });

  it('should allow me to delete a todo', () => {
    const todoText = 'delete a todo';
    browser.url('http://localhost:3000');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-delete');
    const actual = browser.element('.todo-text');

    expect(actual.state).to.equal('failure');
  });

  it('should allow a todo to change from uncomplete to complete', () => {
    const todoText = 'change a todo to complete';
    browser.url('http://localhost:3000');
    browser.element('.todo-input').setValue(todoText);
    browser.click('.todo-submit');
    browser.click('.todo-toggle');
    const actual = browser.element('.todo-text').getCssProperty('text-decoration');

    expect(actual.value).to.contain('line-through');
  });
});
