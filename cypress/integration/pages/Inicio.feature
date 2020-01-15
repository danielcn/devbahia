@feature-tag
Feature: Jobs Page

  I want to open Inicio page

  @tag-to-include
  Scenario: Opening the Inicio page
    Given I kinda open Inicio page
    Then I see "Jobs" in the page title
