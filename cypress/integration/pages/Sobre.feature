@feature-tag
Feature: Sobre Page

  I want to open Sobre page

  @tag-to-include
  Scenario: Opening the Sobre page
    Given I kinda open Sobre page
    Then I see "Convocados - Sobre" in the page title
